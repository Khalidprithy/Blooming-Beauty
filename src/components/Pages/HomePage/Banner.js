import React from 'react';
import { FcMoneyTransfer } from 'react-icons/fc';
import { BsCashCoin, BsCartFill } from 'react-icons/bs';

const Banner = () => {
    return (
        <div className='p-2 py-14'>
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 m-2'>
                <div className='p-2 sm:my-6'>
                    <h1 className='text-xl lg:text-3xl font-bold pb-2'>Welcome Jennifer</h1>
                    <p className='text-sm'>Here is your Dashboard to keep you updated with your business performance and process.</p>
                </div>
                <div className='border-2 rounded-lg p-6 transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 hover:bg-accent duration-300'>
                    <div className='flex justify-between'>
                        <p className='w-10 h-10 bg-gray-300 p-2 rounded-lg'><FcMoneyTransfer className='mx-auto text-2xl'></FcMoneyTransfer></p>
                        <div className='flex flex-col'>
                            <p className='text-xl font-semibold'>Investment</p>
                            <h4>$340.02</h4>
                        </div>
                    </div>
                    <progress class="progress progress-primary w-full" value="70" max="100"></progress>
                    <p className='text-sm text-center'>Sells have increased 10%</p>
                </div>
                <div className='border-2 rounded-lg p-6 transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 hover:bg-accent duration-300'>
                    <div className='flex justify-between'>
                        <p className='w-10 h-10 bg-gray-300 p-2 rounded-lg'><BsCashCoin className='mx-auto text-2xl text-error'></BsCashCoin></p>
                        <div className='flex flex-col'>
                            <p className='text-xl font-semibold'>Total Cost</p>
                            <h4>$2502</h4>
                        </div>
                    </div>
                    <progress class="progress progress-error w-full" value="90" max="100"></progress>
                    <p className='text-sm text-center'>Investment has increased 24%</p>
                </div>
                <div className='border-2 rounded-lg p-6 transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 hover:bg-accent duration-300'>
                    <div className='flex justify-between'>
                        <p className='w-10 h-10 bg-gray-300 p-2 rounded-lg'><BsCartFill className='mx-auto text-2xl text-success'></BsCartFill></p>
                        <div className='flex flex-col'>
                            <p className='text-xl font-semibold'>Total Sales</p>
                            <h4>$1540</h4>
                        </div>
                    </div>
                    <progress class="progress progress-success w-full" value="80" max="100"></progress>
                    <p className='text-sm text-center'>Sells have increased 10%</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;