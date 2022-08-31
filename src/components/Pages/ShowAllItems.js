import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ShowAllItems = ({ product, handleDeleteBtn }) => {

    const { _id } = product;
    const navigate = useNavigate();

    const handleEditBtn = id => {
        navigate(`/products/${id}`);
    }
    const handleViewBtn = id => {
        navigate(`/products/${id}`);
    }


    return (
        <tbody>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
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
                    <p>${product?.price}</p>
                </td>
                <td>
                    <p>{product?.brand}</p>
                </td>
                <td>
                    <p>{product?.quantity}</p>
                </td>
                <th>
                    <div className='flex'>
                        <div className="tooltip tooltip-info p-0.5" data-tip="View">
                            <p
                                onClick={() => handleViewBtn(_id)}
                                className='btn btn-xs'><AiOutlineEye className='my-1 text-success'></AiOutlineEye></p>
                        </div>
                        <div className="tooltip tooltip-info p-0.5" data-tip="Edit">
                            <p
                                onClick={() => handleEditBtn(_id)}
                                className='btn btn-xs'><FiEdit className='my-1 text-info'></FiEdit></p>
                        </div>

                        <div className="tooltip tooltip-error p-0.5" data-tip="Delete">
                            <p
                                onClick={() => handleDeleteBtn(_id)}
                                className='btn btn-xs'><MdDelete className='my-1 text-red-500'></MdDelete></p>
                        </div>
                    </div>
                </th>
            </tr>
        </tbody>
    );
};

export default ShowAllItems;