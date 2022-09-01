import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, Scatter, Tooltip, XAxis, YAxis } from 'recharts';


const data = [
    {
        name: 'Hair',
        month: 'Jan',
        price: 80,
        sells: 110,
    },
    {
        name: 'Skin',
        month: 'Feb',
        price: 110,
        sells: 180,
    },
    {
        name: 'Makeup',
        month: 'Mar',
        price: 198,
        sells: 190,
    },
    {
        name: 'Women',
        month: 'Api',
        price: 190,
        sells: 250,
    },
    {
        name: 'Body',
        month: 'May',
        price: 300,
        sells: 330,
    },
    {
        name: 'Gift',
        month: 'June',
        price: 380,
        sells: 380,
    },
];

const data2 = [
    {
        year: '2010',
        sells: 190,
        profit: 200,
        invest: 400,
        lose: 120,
    },
    {
        year: '2012',
        sells: 250,
        profit: 220,
        invest: 500,
        lose: 80,
    },
    {
        year: '2014',
        sells: 300,
        profit: 500,
        invest: 700,
        lose: 150,
    },
    {
        year: '2018',
        sells: 250,
        profit: 300,
        invest: 1000,
        lose: 480,
    },
    {
        year: '2020',
        sells: 520,
        profit: 1108,
        invest: 1100,
        lose: 60,
    },
    {
        year: '2022',
        sells: 1400,
        profit: 1680,
        invest: 1700,
        lose: 380,
    },
];



const ProductGraph = () => {
    return (
        <div >
            <h4 className='text-2xl text-center font-bold text-secondary mt-4'>Our Business States</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 g-2">
                <div className='border-2 rounded-xl mx-auto mt-10'>
                    <h6 className='text-center text-gray-700 font-bold mt-2'>Sells Chart</h6>
                    <BarChart
                        width={350}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 10,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis dataKey="price" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" fill="#60a5fa" />
                        <Bar dataKey="sells" fill="#82ca9d" />
                    </BarChart>
                </div>

                <div className='border-2 rounded-xl mx-auto mt-10'>
                    <h6 className='text-center text-gray-700 font-bold m-2'>Business Summery</h6>
                    <ComposedChart
                        width={350}
                        height={300}
                        data={data2}
                        margin={{
                            top: 5,
                            right: 5,
                            bottom: 10,
                            left: 5,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="year" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="invest" fill="#60a5fa" stroke="#8884d8" />
                        <Bar dataKey="profit" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="sells" stroke="#ff7300" />
                        <Scatter dataKey="lose" fill="red" />
                    </ComposedChart>
                </div>
            </div>
        </div>
    );
};

export default ProductGraph;