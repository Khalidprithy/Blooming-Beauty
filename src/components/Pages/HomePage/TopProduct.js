import React from 'react';
import { BsCashCoin, BsCartFill } from 'react-icons/bs';

const TopProduct = () => {
    return (
        <div className='flex flex-col md:flex-row m-2 gap-3'>
            <div className='w-full md:w-3/5 border-2 rounded-xl'>
                <div className='flex items-center justify-between p-3'>
                    <h1 className='text-xl font-semibold'>Top Product</h1>
                    <select class="select select-bordered w-28 max-w-xs">
                        <option selected>Week</option>
                        <option>Month</option>
                        <option>Year</option>
                    </select>
                </div>
                <div className='m-2'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                        <div class="card card-compact bg-base-100 shadow-xl">
                            <figure><img src="https://images-na.ssl-images-amazon.com/images/I/61YO%2BXsyqAS._SL1500_.jpg" alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="text-xl">Pore Filler</h2>
                                <p className='text-xs'>NYX professional makeup, Blurring Primer</p>
                                <div class="card-actions justify-center">
                                    <button class="btn btn-sm btn-primary w-full">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="card card-compact bg-base-100 shadow-xl">
                            <figure><img src="https://imagiccosmetics.com/wp-content/uploads/2019/06/A3.jpg" alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="text-xl">Foundation</h2>
                                <p className='text-xs'>Magic professional cosmetics, Blurring Primer</p>
                                <div class="card-actions justify-center">
                                    <button class="btn btn-sm btn-primary w-full">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="card card-compact bg-base-100 shadow-xl">
                            <figure><img src="https://shop.shajgoj.com/wp-content/uploads/2018/12/wet-n-wild-photo-focus-matte-setting-spray1-800.jpg" alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="text-xl">Setting Spray</h2>
                                <p className='text-xs'>Wet and Wild, Matte finish.</p>
                                <div class="card-actions justify-center">
                                    <button class="btn btn-sm btn-primary w-full">Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='w-full md:w-2/5'>
                <div className='flex items-center justify-between p-3'>
                    <h1 className='text-xl font-semibold'>Top Sold Product</h1>
                    <button className='btn btn-sm btn-accent'>View All</button>
                </div>
                <div className='grid grid-cols-1 gap-2 border-2 rounded-2xl p-2'>
                    <div class="card h-48 card-side bg-base-100 border">
                        <figure><img className='w-32 rounded-xl m-1 md:m-2' src="https://shop.shajgoj.com/wp-content/uploads/2018/12/wet-n-wild-photo-focus-matte-setting-spray1-800.jpg" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="text-base font-semibold text-left">Setting Spray</h2>
                            <div>
                                <p className='text-sm'>Price: $120</p>
                                <p className='text-sm'>Brand: Wet & Wild</p>
                                <p className='text-sm'>Total sold: 1200</p>
                            </div>
                        </div>
                    </div>
                    <div class="card h-48 card-side bg-base-100 border">
                        <figure><img className='w-32 rounded-xl m-1 md:m-2' src="https://m.media-amazon.com/images/I/51Qejl-sawL.SS700.jpg" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="text-base font-semibold text-left">Serum Spray</h2>
                            <div>
                                <p className='text-sm'>Price: $20</p>
                                <p className='text-sm'>Brand: Livon</p>
                                <p className='text-sm'>Total sold: 900</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default TopProduct;