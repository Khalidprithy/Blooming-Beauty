import React from 'react';
import Banner from './HomePage/Banner';
import Banner2 from './HomePage/Banner2';
import Carousel from './HomePage/Carousel';
import ProductGraph from './HomePage/ProductGraph';
import Summary from './HomePage/Summary';
import TopProduct from './HomePage/TopProduct';

const Dashboard = () => {
    return (
        <div>
            <Carousel></Carousel>
            {/* <Banner2></Banner2> */}
            <Banner></Banner>
            <ProductGraph></ProductGraph>
            <TopProduct></TopProduct>
            <Summary></Summary>
        </div>
    );
};

export default Dashboard;