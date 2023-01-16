import React, { useEffect, useState } from 'react';
import image1 from '../../../images/Carouse1.jpg'
import image2 from '../../../images/Carouse2.jpg'
import image3 from '../../../images/Carouse3.jpg'

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);
    const slides = [
        {
            title: 'Slide 1',
            id: 0,
            image: image1
        },
        {
            title: 'Slide 2',
            id: 1,
            image: image2
        },
        {
            title: 'Slide 3',
            id: 2,
            image: image3
        }
    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(nextSlide, 3000);
            return () => clearInterval(interval);
        }
    }, [autoplay, nextSlide]);

    return (
        <div
            onMouseEnter={() => setAutoplay(!autoplay)}
            onMouseLeave={() => setAutoplay(!autoplay)}
            className="relative">
            <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className={`block h-96 w-full object-cover transition-opacity duration-500 ease-in-out ${currentSlide === slides[currentSlide].id ? 'opacity-100' : 'opacity-0'}`}
            />
            <div className="absolute inset-0 flex items-center justify-between">
                <button
                    className="bg-white text-black p-2 m-2 rounded-full hover:bg-gray-200"
                    onClick={prevSlide}
                >
                    Previous
                </button>
                <button
                    className="bg-white text-black p-2 m-2 rounded-full hover:bg-gray-200 ml-4"
                    onClick={nextSlide}
                >
                    Next
                </button>
                {/* <button
                    className="bg-white text-black p-2 rounded-full hover:bg-gray-200 ml-4"
                    onClick={() => setAutoplay(!autoplay)}
                >
                    {autoplay ? "Stop" : "Start"} Autoplay
                </button> */}
            </div>
        </div>
    );
}

export default Carousel;
