import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DeleteModal from '../Shared/DeleteModal';
import ShowMyItems from './ShowMyItems';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myProducts, setMyProducts] = useState([]);
    const [deleteItem, setDeleteItem] = useState(null);
    // console.log(myProducts)
    useEffect(() => {
        const getMyProducts = async () => {
            const email = user?.email;
            const url = `https://blooming-beauty-server.onrender.com/product?email=${email}`;
            fetch(url, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setMyProducts(data)
                })
        }
        getMyProducts()
    }, [user])

    const handleDeleteBtn = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://blooming-beauty-server.onrender.com/products/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const remaining = myProducts.filter(product => product._id !== id);
                    setMyProducts(remaining);
                })
        }
    }

    return (
        <div className='my-4 text-center min-h-screen'>
            <h4 className='text-left text-2xl font-semibold m-2 p-4 text-gray-600'>You have added {myProducts?.length} product</h4>
            <div className='flex flex-col gap-4 mx-8'>
                {
                    myProducts?.map(product => <ShowMyItems
                        key={product._id}
                        product={product}
                        handleDeleteBtn={handleDeleteBtn}
                        setDeleteItem={setDeleteItem}
                    ></ShowMyItems>)
                }
            </div>
            {deleteItem && <DeleteModal
                deleteItem={deleteItem}
            ></DeleteModal>}
        </div>
    );
};

export default MyItems;