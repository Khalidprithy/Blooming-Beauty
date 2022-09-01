import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const TopSold = ({ product }) => {
    return (
        <div className="card h-36 card-side bg-base-100 border rounded-md hover:shadow-2xl">
            <figure><img className='w-32 rounded-xl m-1 md:m-2' src={product?.picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-base font-semibold text-left">{product.itemName}</h2>
                <div>
                    <p className='text-sm'>Price: ${product?.price}</p>
                    <p className='text-sm'>Brand: {product?.brand}</p>
                    <p className='text-sm'>Quantity: {product?.quantity}</p>
                </div>
            </div>
            <button className='btn btn-sm btn-accent rounded-md h-full'><AiOutlineRight></AiOutlineRight></button>
        </div>
    );
};

export default TopSold;