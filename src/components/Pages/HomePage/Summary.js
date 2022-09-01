import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaRegMoneyBillAlt, FaShoppingCart } from 'react-icons/fa';

const Summary = () => {
    return (
        <div className='mb-20'>
            <h1 className='text-center text-2xl text-secondary font-bold'>Our Special Services</h1>
            <p className='text-center font-thin'>Best quality with best service support</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 m-4'>
                <div className='border-2 rounded-xl p-4 transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-105 hover:bg-accent hover:text-white duration-300'>
                    <TbTruckDelivery className='text-4xl text-info mx-auto mt-6'></TbTruckDelivery>
                    <h1 className='text-xl font-semibold text-center m-2'>Fastest Delivery Service</h1>
                    <p className='text-center text-sm  font-light'>We provide the fastest delivery service in town. We have over 200+ delivery man and 100+ vehicle.</p>
                </div>
                <div className='border-2 rounded-xl p-4 transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-105 hover:bg-accent hover:text-white duration-300'>
                    <FaRegMoneyBillAlt className='text-4xl text-success mx-auto mt-6'></FaRegMoneyBillAlt>
                    <h1 className='text-xl font-semibold text-center m-2'>Cheapest Price</h1>
                    <p className='text-center text-sm  font-light'>Best price in town for single or wholesale purchase. We have 12000+ products to choose from. </p>
                </div>
                <div className='border-2 rounded-xl p-4 transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-105 hover:bg-accent hover:text-white duration-300'>
                    <FaShoppingCart className='text-4xl text-red-400 mx-auto mt-6'></FaShoppingCart>
                    <h1 className='text-xl font-semibold text-center m-2'>Tracking and Return</h1>
                    <p className='text-center text-sm font-light'>You can track your product and return as well. Easy return process with no extra charges </p>
                </div>
            </div>
        </div>
    );
};

export default Summary;