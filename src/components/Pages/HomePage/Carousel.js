import React from 'react';
import image1 from '../../../images/Carouse1.jpg'
import image2 from '../../../images/Carouse2.jpg'
import image3 from '../../../images/Carouse3.jpg'

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={image1} className="w-full" alt='' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={image2} className="w-full" alt='' />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={image3} className="w-full" alt='' />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Carousel;