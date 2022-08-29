import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

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

    const handleDeleteBtn = () => {
        const email = user?.email;
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/product?email=${email}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }

    return (
        <div className='my-4 text-center'>
            <h4 className='text-center font-semibold m-2 text-gray-600'>You have added {myProducts?.length} product</h4>
        </div>
    );
};

export default MyItems;