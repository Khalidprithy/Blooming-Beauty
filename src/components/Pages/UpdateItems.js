import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateItems = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);


    const handleRestock = event => {
        event.preventDefault()
        const quantity = product.quantity;
        const inputQuantity = event.target.newQuantity.value;
        if (inputQuantity < 1) {
            toast.error('Please Enter a positive number')
            return;
        }
        else {
            const updatedQuantity = JSON.parse(quantity) + JSON.parse(inputQuantity);

            const updatedProduct = {
                name: product.name,
                price: product.price,
                quantity: (updatedQuantity).toString(),
                itemName: product.itemName,
                category: product.category,
                brand: product.brand,
                description: product.description,
                picture: product.picture
            }
            setProduct(updatedProduct)
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('Item restocked');
                    event.target.reset();
                })
        }
    }
    const updatePrice = event => {
        event.preventDefault()
        const inputPrice = event.target.newPrice.value;
        if (inputPrice < 1) {
            toast.error('Please Enter a positive number')
            return;
        }
        else {
            const updatedPrice = JSON.parse(inputPrice);

            const updatedProduct = {
                name: product.name,
                price: (updatedPrice).toString(),
                quantity: product.quantity,
                category: product.category,
                brand: product.brand,
                itemName: product.itemName,
                description: product.description,
                picture: product.picture
            }
            setProduct(updatedProduct)
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('Price Updated');
                    event.target.reset();
                })
        }
    }
    const handleDelivered = async event => {
        event.preventDefault()
        const quantity = product.quantity;
        const updatedQuantity = JSON.parse(quantity) - 1;
        const updatedProduct = {
            name: product.name,
            price: product.price,
            quantity: (updatedQuantity).toString(),
            brand: product.brand,
            itemName: product.itemName,
            category: product.category,
            description: product.description,
            picture: product.picture
        }
        setProduct(updatedProduct);
        const url = `http://localhost:5000/products/${id}`;
        await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Product Delivered')
            })
    }


    return (
        <div>
            <h1 className='text-center text-2xl text-gray-500 mt-6 font-bold'>Update this item</h1>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col md:flex-row">
                    <img src={product?.picture} class="max-w-sm w-72  rounded-lg border hover:scale-105 duration-75 delay-75 ease-in translate-y-1" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">{product?.itemName}</h1>
                        <p class="py-6">{product?.description}</p>
                        <div>
                            <p>Brand: {product?.brand}</p>
                            <p>Category: {product?.category}</p>
                            <p>Price: ${product?.price}</p>
                            <p>Quantity: {product?.quantity}</p>
                        </div>
                        <form
                            onSubmit={handleRestock}
                        >
                            <div className='flex items-center gap-2 my-2'>
                                <input className='w-1/2 border rounded-xl' type="text" name='newQuantity' />
                                <input className='btn btn-xs btn-accent' type="submit" value="Restock" />
                            </div>
                        </form>
                        <form
                            onSubmit={updatePrice}
                        >
                            <div className='flex items-center gap-2 my-2'>
                                <input className='w-1/2 border rounded-xl' type="text" name='newPrice' />
                                <input className='btn btn-xs btn-accent' type="submit" value="Update Price" />
                            </div>
                        </form>
                        <div className='flex items-center justify-between gap-2'>
                            <button
                                onClick={handleDelivered}
                                className='btn btn-xs btn-primary'>Delivered</button>
                            <button class="btn btn-xs btn-success">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateItems;