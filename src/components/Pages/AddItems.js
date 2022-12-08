import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const AddItems = () => {

    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = product => {
        fetch('https://blooming-beauty-server.onrender.com/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                toast.success('Your product added')
                reset()
            })

        if (loading) {
            return <Loading></Loading>
        }

    };

    return (
        <div className='my-4 text-center min-h-screen'>
            <h4 className='text-2xl font-semibold text-secondary py-6'>Add a new item</h4>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col w-2/3 mx-auto'>
                <div className='flex flex-col md:flex-row items-center justify-around '>
                    <div className='flex flex-col'>
                        <label className='text-left text-xl ml-1 mb-2 font-semibold'>User Name</label>
                        <input className='mb-3 p-2 rounded-md border' value={user?.displayName} {...register("name", { required: true })} readOnly />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-left text-xl ml-1 mb-2 font-semibold'>User Email</label>
                        <input className='mb-3 p-2 rounded-md border' value={user?.email} {...register("email", { required: true })} readOnly />
                    </div>
                </div>
                <input className='mb-3 p-2 rounded-md border-2 hover:border-secondary' placeholder='Product Name' {...register("itemName", { required: true, maxLength: 20 })} required />
                <input className='mb-3 p-2 rounded-md border-2 hover:border-secondary' placeholder='Category' {...register("category")} required />
                <input className='mb-3 p-2 rounded-md border-2 hover:border-secondary' placeholder='Brand' {...register("brand")} required />
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-2'>
                    <input className='mb-3 p-2 rounded-md border-2 hover:border-secondary' placeholder='Price' type="number" {...register("price")} required />
                    <input className='mb-3 p-2 rounded-md border-2 hover:border-secondary' placeholder='Quantity' type="number" {...register("quantity", { min: 1, max: 1000 })} required />
                    <input className='mb-3 p-2 rounded-md border-2 hover:border-secondary' placeholder='Date' type="date" {...register("date")} />
                </div>
                <input className='mb-3 p-2 rounded-md border-2 hover:border-secondary' placeholder='Photo URL' type="text" {...register("picture")} required />
                <textarea className='mb-3 p-2 rounded-md border-2 hover:border-secondary' placeholder='Description' {...register("description")} />
                <div className='flex justify-center items-center gap-2'>
                    <button onClick={() => { reset(); toast.success('Form Reset Successfully') }
                    } className='btn btn-sm btn-error'>Reset</button>
                    <input className='btn btn-sm btn-success' type="submit" value='Add Product' />
                </div>

            </form>
        </div>
    );
};

export default AddItems;