import React from 'react';
import { FcMoneyTransfer } from 'react-icons/fc';
import { BsCashCoin, BsCartFill, BsBank } from 'react-icons/bs';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-col lg:flex-row p-2 py-14'>
            <div className='w-full lg:w-4/12 p-2 lg:px-10 sm:my-6'>
                <h1 className='text-2xl md:text-4xl lg:text-3xl font-bold pb-2'>Welcome Jennifer</h1>
                <p className='text-base'>Manage Your Beauty Business with Ease - Your One-Stop Shop for Product Management, Inventory Tracking and Sales Monitoring</p>
                <button className='btn btn-sm btn-success my-2 rounded text-white'>Explore More</button>
            </div>
            <div className='w-full lg:w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-2'>
                <div className='relative rounded-2xl p-6 transition ease-in-out delay-250 shadow hover:shadow-lg duration-300'>
                    <div className='flex justify-between'>
                        <FcMoneyTransfer className='absolute -top-5 right-5 text-5xl'></FcMoneyTransfer>
                        <div className='flex flex-col justify-end'>
                            <p className='text-lg font-semibold text-end'>Investment</p>
                            <h4>$340.02</h4>
                        </div>
                    </div>
                    <progress className="progress progress-success w-full" value="70" max="100"></progress>
                    <p className='text-sm text-center'>Sells have increased 10%</p>
                </div>
                <div className='relative rounded-2xl p-6 transition ease-in-out delay-250 shadow hover:shadow-lg duration-300'>
                    <div className='flex justify-between'>
                        <BsCashCoin className='absolute -top-5 right-5 text-5xl text-green-500'></BsCashCoin>
                        <div className='flex flex-col justify-end'>
                            <p className='text-lg font-semibold'>Total Cost</p>
                            <h4>$2502</h4>
                        </div>
                    </div>
                    <progress className="progress progress-success w-full" value="70" max="100"></progress>
                    <p className='text-sm text-center'>Investment has increased 24%</p>
                </div>


                <div className='relative rounded-2xl p-6 transition ease-in-out delay-250 shadow hover:shadow-lg duration-300'>
                    <div className='flex justify-between'>
                        <BsCartFill className='absolute -top-5 right-5 text-5xl text-gray-700'></BsCartFill>
                        <div className='flex flex-col'>
                            <p className='text-lg font-semibold'>Total Sales</p>
                            <h4>$1540</h4>
                        </div>
                    </div>
                    <progress className="progress progress-success w-full" value="85" max="100"></progress>
                    <p className='text-sm text-center'>Sells have increased 10%</p>
                </div>

                <div className='relative rounded-2xl p-6 transition ease-in-out delay-250 shadow hover:shadow-lg duration-300'>
                    <div className='flex justify-between'>
                        <BsBank className='absolute -top-5 right-5 text-5xl text-teal-600'></BsBank>
                        <div className='flex flex-col'>
                            <p className='text-lg font-semibold'>Transfer</p>
                            <h4>$1540</h4>
                        </div>
                    </div>
                    <progress className="progress progress-success w-full" value="85" max="100"></progress>
                    <p className='text-sm text-center'>Sells have increased 10%</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;