import React from 'react';
import Banner from './HomePage/Banner';
import ProductGraph from './HomePage/ProductGraph';
import Summary from './HomePage/Summary';
import TopProduct from './HomePage/TopProduct';

const Dashboard = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <ProductGraph></ProductGraph> */}
            <TopProduct></TopProduct>
            <Summary></Summary>
        </div>
    );
};

export default Dashboard;