import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ShowAllItems from './ShowAllItems';

const Inventory = () => {


    const navigate = useNavigate();

    const handleAddProduct = () => {
        navigate('/addItems')
    }

    const [products, setProducts] = useProducts();

    const handleDeleteBtn = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://mighty-brushlands-85501.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }


    return (
        <div className='p-2'>
            <div className='flex items-center justify-between my-4'>
                <p className='text-xl font-semibold'>All Product List</p>
                <button
                    onClick={handleAddProduct}
                    className='btn btn-sm btn-accent'>Add New Item</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        products.map(product => <ShowAllItems
                            key={product?._id}
                            product={product}
                            handleDeleteBtn={handleDeleteBtn}
                        ></ShowAllItems>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Inventory;