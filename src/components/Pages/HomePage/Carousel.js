import React from 'react';
import image1 from '../../../images/Carouse01.jpg'
import image2 from '../../../images/Carouse02.jpg'
import image3 from '../../../images/Carouse03.jpg'

const Carousel = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={image1} className="w-full" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-xs btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-xs btn-circle">❯</a>
                    </div>
                    <div className='absolute left-12 md:left-24 top-1/4'>
                        <div className='text-left'>
                            <p className='font-light text-sm md:text-base'>Exclusive</p>
                            <h1 className='text-xl md:text-5xl my-1'>Princes Story</h1>
                            <p className='text-sm md:w-80 text-gray-500 mb-2 hidden md:block'>One of the most successful ways to make money from a beauty blog is through affiliate marketing. You can join relevant affiliate programs and then promote their products on your website</p>
                            <button className='btn btn-xs md:btn-md btn-outline'>Read More</button>
                        </div>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={image2} className="w-full" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-xs btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-xs btn-circle">❯</a>
                    </div>
                    <div className='absolute right-14 md:right-24 top-1/4'>
                        <div className='text-left'>
                            <p className='font-light'>New Product</p>
                            <h1 className='text-xl md:text-5xl my-1'>Face Mask</h1>
                            <p className='text-sm md:w-80 text-gray-500 mb-2 hidden md:block'>Face masks are good at moisturizing skin. Even if you were to just put a mask on top of the skin with nothing in it, it would naturally moisturize the skin</p>
                            <button className='btn btn-xs md:btn-md btn-outline'>Get Now</button>
                        </div>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={image3} className="w-full" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-xs btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-xs btn-circle">❯</a>
                    </div>
                    <div className='absolute left-12 md:left-24 top-1/4'>
                        <div className='text-left'>
                            <p className='font-light text-sm md:text-base'>Skin package</p>
                            <h1 className='text-xl md:text-5xl my-1'>Daily Skincare</h1>
                            <p className='text-sm md:w-80 text-gray-500 mb-2 hidden md:block'>Think of your skin-care routine as consisting of three main steps Cleansing Washing your face. Toning Balancing the skin.</p>
                            <button className='btn btn-outline'>Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
{/* <img src={image2} className="w-full" alt='' /> */ }