import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const ShowMyItems = ({ product, handleDeleteBtn, setDeleteItem }) => {
    const { _id } = product;

    return (
        <div class="card md:card-side bg-pink-100 md:bg-base-100 border-2 hover:shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-pink-100 duration-300">
            <figure><img className='row-img w-52 md:w-40 mask mask-square md:mask-squircle rounded-xl m-4' src={product?.picture} alt="" /></figure>
            <div class="flex-1 md:flex items-center justify-between gap-2 p-2 w-full">
                <h2 class="card-title">{product?.itemName}</h2>
                <div className='flex-1 md:flex gap-2 text-left'>
                    <p>Brand: {product?.brand}</p>
                    <p>Price: {product?.price}</p>
                    <p>Quantity: {product?.quantity}</p>
                </div>
                <div class="flex justify-end items-center tooltip tooltip-error" data-tip="Delete">
                    {/* <label
                        onClick={() => setDeleteItem(_id)}
                        for="deleteModal" className='btn btn-link'><AiFillDelete className='text-error text-4xl'></AiFillDelete></label> */}
                    <button
                        onClick={() => handleDeleteBtn(_id)}
                        className='btn btn-accent w-full mt-2 md:btn-link'><AiFillDelete className='text-error text-4xl'></AiFillDelete>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowMyItems;