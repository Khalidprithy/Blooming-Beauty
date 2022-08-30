import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowTopItems = ({ product }) => {
    const { _id } = product;
    const navigate = useNavigate();

    const manageBtn = id => {
        navigate(`products/${id}`)
    }


    return (
        <div className="card card-compact bg-base-100 hover:shadow-xl shadow-none">
            <figure><img src={product?.picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-xl">{product?.itemName}</h2>
                <p className='text-xs'>{product?.description}</p>
                <div className='flex flex-row text-xs'>
                    <p>Price: ${product?.price}</p>
                    <p>Quantity: {product?.quantity}</p>
                </div>
                <div className="card-actions justify-center">
                    <button
                        onClick={() => manageBtn(_id)}
                        className="btn btn-sm btn-accent w-full">Manage</button>
                </div>
            </div>
        </div>
    );
};

export default ShowTopItems;