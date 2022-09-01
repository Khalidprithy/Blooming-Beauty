import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const ShowPurchase = ({ product, handleDeleteBtn }) => {

    const { _id } = product;
    const navigate = useNavigate();

    const handleEditBtn = id => {
        navigate(`/products/${id}`);
    }


    return (
        <tbody>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={product?.picture} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{product?.itemName}</div>
                            <div className="text-sm opacity-50">{product?.description}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <p>{product?.category}</p>
                </td>
                <td>
                    <p className='btn btn-xs btn-success'>Completed</p>
                </td>
                <td>
                    <p className='btn btn-xs btn-info'>Processing</p>
                </td>
                <td>
                    <p className='btn btn-xs btn-error'>Sold</p>
                </td>
                <th>
                    <div className='flex'>
                        <div className="tooltip tooltip-info p-0.5" data-tip="View">
                            <p
                                onClick={() => handleEditBtn(_id)}
                                className='btn btn-link px-0'><AiOutlineEye className='text-xl text-info'></AiOutlineEye></p>
                        </div>
                        <div className="tooltip tooltip-error p-0.5" data-tip="Delete">
                            <p
                                onClick={() => handleDeleteBtn(_id)}
                                className='btn btn-link px-0'><MdDelete className='text-xl text-error'></MdDelete></p>
                        </div>
                    </div>
                </th>
            </tr>
        </tbody>
    );
};

export default ShowPurchase;