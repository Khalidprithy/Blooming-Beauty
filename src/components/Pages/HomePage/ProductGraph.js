import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';




const ProductGraph = () => {
    const [timelineChart, setTimelineChart] = useState({
        series: [
            {
                name: 'Bobainna',
                data: [
                    {
                        x: 'Order',
                        y: [
                            new Date('2019-03-05').getTime(),
                            new Date('2019-03-08').getTime()
                        ]
                    },
                    {
                        x: 'Confirm',
                        y: [
                            new Date('2019-03-02').getTime(),
                            new Date('2019-03-05').getTime()
                        ]
                    },
                    {
                        x: 'Confirm',
                        y: [
                            new Date('2019-03-05').getTime(),
                            new Date('2019-03-07').getTime()
                        ]
                    },
                    {
                        x: 'Package',
                        y: [
                            new Date('2019-03-03').getTime(),
                            new Date('2019-03-09').getTime()
                        ]
                    },
                    {
                        x: 'Package',
                        y: [
                            new Date('2019-03-08').getTime(),
                            new Date('2019-03-11').getTime()
                        ]
                    },
                    {
                        x: 'Shipment',
                        y: [
                            new Date('2019-03-11').getTime(),
                            new Date('2019-03-16').getTime()
                        ]
                    },
                    {
                        x: 'Order',
                        y: [
                            new Date('2019-03-01').getTime(),
                            new Date('2019-03-03').getTime()
                        ],
                    }
                ]
            },
            {
                name: 'Smith',
                data: [
                    {
                        x: 'Order',
                        y: [
                            new Date('2019-03-02').getTime(),
                            new Date('2019-03-05').getTime()
                        ]
                    },
                    {
                        x: 'Package',
                        y: [
                            new Date('2019-03-06').getTime(),
                            new Date('2019-03-16').getTime()
                        ],
                        goals: [
                            {
                                name: 'Break',
                                value: new Date('2019-03-10').getTime(),
                                strokeColor: '#CD2F2A'
                            }
                        ]
                    },
                    {
                        x: 'Confirm',
                        y: [
                            new Date('2019-03-03').getTime(),
                            new Date('2019-03-07').getTime()
                        ]
                    },
                    {
                        x: 'Completed',
                        y: [
                            new Date('2019-03-20').getTime(),
                            new Date('2019-03-22').getTime()
                        ]
                    },
                    {
                        x: 'Order',
                        y: [
                            new Date('2019-03-10').getTime(),
                            new Date('2019-03-16').getTime()
                        ]
                    }
                ]
            },
            {
                name: 'Kevin',
                data: [
                    {
                        x: 'Confirm',
                        y: [
                            new Date('2019-03-10').getTime(),
                            new Date('2019-03-17').getTime()
                        ]
                    },
                    {
                        x: 'Shipment',
                        y: [
                            new Date('2019-03-05').getTime(),
                            new Date('2019-03-09').getTime()
                        ],
                        goals: [
                            {
                                name: 'Break',
                                value: new Date('2019-03-07').getTime(),
                                strokeColor: '#CD2F2A'
                            }
                        ]
                    },
                ]
            }
        ],
        options: {
            chart: {
                height: 450,
                type: 'rangeBar'
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: '80%'
                }
            },
            xaxis: {
                type: 'datetime'
            },
            stroke: {
                width: 1
            },
            fill: {
                type: 'solid',
                opacity: 0.6
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left'
            }
        },

    })

    return (
        <div className='flex flex-col lg:flex-row gap-6 mt-6 p-4'>
            <div className='w-full lg:w-2/12 flex flex-col lg:flex-col gap-6'>
                <div className='h-full rounded-lg p-6 transition ease-in-out delay-250 shadow hover:shadow-lg duration-300'>
                    <h1 className='text-xl font-semibold'>New Clients</h1>
                    <div className='flex lg:flex-col items-center gap-4'>
                        <h1 className='text-6xl font-bold font-mono'>62</h1>
                        <p className='bg-green-100 rounded-md text-green-700 w-fit p-1'> +13% in one month</p>
                    </div>
                </div>
                <div className='h-full rounded-lg p-6 transition ease-in-out delay-250 shadow hover:shadow-lg duration-300'>
                    <h1 className='text-xl font-semibold'>Product Shipped</h1>
                    <div className='flex lg:flex-col items-center gap-4'>
                        <h1 className='text-6xl font-bold font-mono'>24</h1>
                        <p className='bg-red-100 rounded-md text-green-700 w-fit p-1'> +17% then last week</p>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-10/12 bg-white pr-4 rounded-lg p-2 shadow'>
                <h4 className='text-xl font-semibold m-2'>Product Timeline</h4>
                <ReactApexChart
                    options={timelineChart.options}
                    series={timelineChart.series}
                    type="rangeBar"
                    width='100%'
                    height={350} />
            </div>
        </div>
    );
};

export default ProductGraph;