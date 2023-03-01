import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const TopSold = ({ product }) => {
    const { _id } = product;
    const navigate = useNavigate();

    const manageBtn = id => {
        navigate(`products/${id}`)
    }
    return (
        <div className="card h-full card-side border transition ease-in-out delay-250 shadow hover:shadow-lg duration-300">
            <figure><img className='w-32 h-32 rounded-xl m-1 md:m-2' src={product?.picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-base font-semibold text-left">{product.itemName}</h2>
                <div>
                    <p >Price: ${product?.price}</p>
                    <p >Brand: {product?.brand}</p>
                    <p >Quantity: {product?.quantity}</p>
                </div>
            </div>
            <button
                onClick={() => manageBtn(_id)}
                className='btn btn-sm btn-success rounded-md h-full'><AiOutlineRight></AiOutlineRight></button>
        </div>
    );
};

export default TopSold;