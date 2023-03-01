import React from 'react';
import Banner from './HomePage/Banner';
import CarouselSlider from './HomePage/CarouselSlider';
import ProductGraph from './HomePage/ProductGraph';
import Summary from './HomePage/Summary';
import TopProduct from './HomePage/TopProduct';

const Dashboard = () => {
    return (
        <div>
            <CarouselSlider />
            <Banner></Banner>
            <ProductGraph></ProductGraph>
            <TopProduct></TopProduct>
            <Summary></Summary>
        </div>
    );
};

export default Dashboard;