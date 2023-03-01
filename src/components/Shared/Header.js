import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user, setUser] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setUser({});
            })
    }

    const menuItems = <>
        <li><Link className='font-semibold text-green-600 text-xl' to='/'>Home</Link></li>
        <li><Link className='font-semibold text-green-600 text-xl' to='/'>Dashboard</Link></li>
        <li><Link className='font-semibold text-green-600 text-xl' to='/inventory'>Inventory</Link></li>
        <li><Link className='font-semibold text-green-600 text-xl' to='/purchases'>Purchases</Link></li>
    </>


    return (
        <div className="navbar bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="green"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' >
                    <h4 className='text-3xl text-green-600 font-mono font-semibold cursor-pointer'>Blooming Beauty</h4>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <ul className="menu menu-horizontal p-0 md:pr-8">
                        {menuItems}
                    </ul>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user.photoURL ?
                                            <img className='w-12 rounded-full' src={user?.photoURL} alt='' />
                                            :
                                            <img src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg" alt='' />
                                    }
                                </div>
                            </label>
                            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded w-52">
                                <li>
                                    <Link to='/profile' className="justify-between text-green-600">
                                        {
                                            user.displayName ?
                                                <p className='text-xl'>{user?.displayName}</p>
                                                :
                                                <p>Profile</p>
                                        }
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/myItems' className="justify-between text-green-600 text-xl">My Items</Link>
                                </li>
                                <li>
                                    <Link to='/addItems' className="justify-between text-green-600 text-xl">Add Items</Link>
                                </li>
                                <li className='m-2'>
                                    <button
                                        onClick={handleSignOut}
                                        className='flex justify-center items-center btn-success text-green-600 font-semibold w-full'>Sign out </button>
                                </li>
                            </ul>
                        </div>
                        :
                        <Link className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800" to='/login'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Header;