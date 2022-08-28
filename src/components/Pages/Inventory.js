import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

const Inventory = () => {
    return (
        <div className='p-2'>
            <div className='flex items-center justify-between my-4'>
                <p className='text-xl font-semibold'>All Product List</p>
                <button className='btn btn-sm btn-accent'>Add Product</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
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
                                            <img src="https://shop.shajgoj.com/wp-content/uploads/2018/12/wet-n-wild-photo-focus-matte-setting-spray1-800.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Setting Spray</div>
                                        <div className="text-sm opacity-50">Wet & Wild</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Makeup
                            </td>
                            <td>$120</td>
                            <td>
                                <p>Wet & Wild</p>
                            </td>
                            <td>100</td>
                            <th>
                                <div className='flex'>
                                    <div class="tooltip tooltip-primary p-0.5" data-tip="Edit">
                                        <p className='btn btn-xs'><FiEdit className='my-1 text-white'></FiEdit></p>
                                    </div>
                                    <div class="tooltip tooltip-error p-0.5" data-tip="Delete">
                                        <p className='btn btn-xs'><MdDelete className='my-1 text-white'></MdDelete></p>
                                    </div>
                                    <div class="tooltip tooltip-info p-0.5" data-tip="View">
                                        <p className='btn btn-xs'><AiOutlineEye className='my-1 text-white'></AiOutlineEye></p>
                                    </div>
                                </div>
                            </th>
                        </tr>
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
                                            <img src="https://imagiccosmetics.com/wp-content/uploads/2019/06/A3.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Brice Swyre</div>
                                        <div className="text-sm opacity-50">China</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Makeup
                            </td>
                            <td>$120</td>
                            <td>
                                <p>Wet & Wild</p>
                            </td>
                            <td>100</td>
                            <th>
                                <div className='flex'>
                                    <div class="tooltip tooltip-primary p-0.5" data-tip="Edit">
                                        <p className='btn btn-xs'><FiEdit className='my-1 text-white'></FiEdit></p>
                                    </div>
                                    <div class="tooltip tooltip-error p-0.5" data-tip="Delete">
                                        <p className='btn btn-xs'><MdDelete className='my-1 text-white'></MdDelete></p>
                                    </div>
                                    <div class="tooltip tooltip-info p-0.5" data-tip="View">
                                        <p className='btn btn-xs'><AiOutlineEye className='my-1 text-white'></AiOutlineEye></p>
                                    </div>
                                </div>
                            </th>
                        </tr>

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
                                            <img src="https://images-na.ssl-images-amazon.com/images/I/61YO%2BXsyqAS._SL1500_.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Marjy Ferencz</div>
                                        <div className="text-sm opacity-50">Russia</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Makeup
                            </td>
                            <td>$120</td>
                            <td>
                                <p>Wet & Wild</p>
                            </td>
                            <td>100</td>
                            <th>
                                <div className='flex'>
                                    <div class="tooltip tooltip-primary p-0.5" data-tip="Edit">
                                        <p className='btn btn-xs'><FiEdit className='my-1 text-white'></FiEdit></p>
                                    </div>
                                    <div class="tooltip tooltip-error p-0.5" data-tip="Delete">
                                        <p className='btn btn-xs'><MdDelete className='my-1 text-white'></MdDelete></p>
                                    </div>
                                    <div class="tooltip tooltip-info p-0.5" data-tip="View">
                                        <p className='btn btn-xs'><AiOutlineEye className='my-1 text-white'></AiOutlineEye></p>
                                    </div>
                                </div>
                            </th>
                        </tr>

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
                                            <img src="https://images-na.ssl-images-amazon.com/images/I/61YO%2BXsyqAS._SL1500_.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Yancy Tear</div>
                                        <div className="text-sm opacity-50">Brazil</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Makeup
                            </td>
                            <td>$120</td>
                            <td>
                                <p>Wet & Wild</p>
                            </td>
                            <td>100</td>
                            <th>
                                <div className='flex'>
                                    <div class="tooltip tooltip-primary p-0.5" data-tip="Edit">
                                        <p className='btn btn-xs'><FiEdit className='my-1 text-white'></FiEdit></p>
                                    </div>
                                    <div class="tooltip tooltip-error p-0.5" data-tip="Delete">
                                        <p className='btn btn-xs'><MdDelete className='my-1 text-white'></MdDelete></p>
                                    </div>
                                    <div class="tooltip tooltip-info p-0.5" data-tip="View">
                                        <p className='btn btn-xs'><AiOutlineEye className='my-1 text-white'></AiOutlineEye></p>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Inventory;