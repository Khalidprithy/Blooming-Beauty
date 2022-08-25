import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo1 from '../../images/Logo1.png'
import Logo2 from '../../images/Logo2.png'
import Logo3 from '../../images/Logo3.png'

const Navbar = () => {

    const menuItems = <>
        <li className='font-semibold text-white'><Link to='/'>Dashboard</Link></li>
        <li className='font-semibold text-white'><Link to='/inventory'>Inventory</Link></li>
        <li className='font-semibold text-white'><Link to='/blog'>Blog</Link></li>
    </>


    return (
        <div>
            <div className="navbar bg-secondary">
                <div className="navbar-start flex-1">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost md:hidden lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="1" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-48">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl text-secondary"><img className='w-36' src={Logo3} alt="" /></Link>
                </div>
                <div className="navbar-center hidden md:flex lg:flex-auto">
                    <ul className="menu menu-horizontal p-0 md:pr-8">
                        {menuItems}
                    </ul>
                </div>
                <div className="flex-none">

                    <div className="dropdown dropdown-end">
                        <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <p className="justify-between">Profile</p>
                            </li>
                            <li>
                                <button
                                    className='sign-out'>Sign out </button>
                            </li>
                        </ul>
                    </div>
                    <NavLink className='btn btn-primary btn-sm' to="/login">Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;