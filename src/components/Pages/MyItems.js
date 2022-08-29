import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ShowMyItems from './ShowMyItems';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myProducts, setMyProducts] = useState([]);
    console.log(myProducts)
    useEffect(() => {
        const getMyProducts = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/product?email=${email}`;
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
            const url = `http://localhost:5000/products/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myProducts.filter(product => product._id !== id);
                    setMyProducts(remaining);
                })
        }
    }

    return (
        <div className='my-4 text-center'>
            <h4 className='text-center font-semibold m-2 text-gray-600'>You have added {myProducts?.length} product</h4>
            <div>
                <table className="table m-2">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th className='d-none d-md-block' scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th className='d-none d-md-block' scope="col">Supplier</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        myProducts?.map(product => <ShowMyItems
                            key={product._id}
                            product={product}
                            handleDeleteBtn={handleDeleteBtn}
                        ></ShowMyItems>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyItems;