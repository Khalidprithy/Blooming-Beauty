import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const ShowMyItems = ({ product, handleDeleteBtn }) => {
    const { _id } = product;

    return (
        <div class="card md:card-side bg-base-100 border-2 hover:shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-pink-100 duration-300">
            <figure><img className='row-img w-40 mask mask-squircle m-4' src={product?.picture} alt="" /></figure>
            <div class="flex items-center justify-between gap-2 p-2">
                <h2 class="card-title">{product?.itemName}</h2>
                <div className='text-left'>
                    <p>Category: {product?.category}</p>
                    <p>Brand: {product?.brand}</p>
                </div>
                <div className='text-left'>
                    <p>Price: {product?.price}</p>
                    <p>Quantity: {product?.quantity}</p>
                </div>
                <div class="card-actions justify-end items-center">
                    <button
                        onClick={() => handleDeleteBtn(_id)}
                        className='btn btn-link'><AiFillDelete className='text-error text-4xl'></AiFillDelete>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowMyItems;