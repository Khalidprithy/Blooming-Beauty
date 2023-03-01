import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Logo1 from '../../images/Logo1.png'
import Logo2 from '../../images/Logo2.png'
import Logo3 from '../../images/Logo3.png'
import Logo4 from '../../images/images (3).png'

const Navbar = () => {

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
        <li className='font-semibold text-neutral text-xl'><Link to='/'>Home</Link></li>
        <li className='font-semibold text-neutral text-xl'><Link to='/'>Dashboard</Link></li>
        <li className='font-semibold text-neutral text-xl'><Link to='/inventory'>Inventory</Link></li>
        <li className='font-semibold text-neutral text-xl'><Link to='/purchases'>Purchases</Link></li>
    </>

    return (
        <div>
            <div className="navbar h-20 relative bg-primary">
                <div className="navbar-start md:flex-none xl:flex-1">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost md:hidden lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="1" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded w-48">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="absolute left-20 -bottom-14 w-20 md:w-28 h-28 rounded-full border border-t-4 border-b-0 border-r-0 border-l-0 border-red-500"><img className='absolute left-0 bottom-5 md:bottom-0 w-20 md:w-32 hover:scale-x-110 hover:rotate-[720deg] duration-150 ease-in-out z-30' src={Logo4} alt="" />
                        <h4 className='ml-32 text-3xl font-mono font-extralight cursor-pointer hidden lg:block'>LuxeLooks</h4>
                    </Link>

                </div>
                <div className="navbar-center hidden md:flex lg:flex-auto">
                    <ul className="menu menu-horizontal p-0 md:pr-8">
                        {menuItems}
                    </ul>
                </div>
                <div className="flex-none">
                    {
                        user ?
                            <div className="dropdown dropdown-end ">
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
                                <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded w-52">
                                    <li>
                                        <Link to='/profile' className="justify-between text-neutral">
                                            {
                                                user.displayName ?
                                                    <p className='text-xl'>{user?.displayName}</p>
                                                    :
                                                    <p>Profile</p>
                                            }
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/myItems' className="justify-between text-neutral text-xl">My Items</Link>
                                    </li>
                                    <li>
                                        <Link to='/addItems' className="justify-between text-neutral text-xl">Add Items</Link>
                                    </li>
                                    <li className='m-2'>
                                        <button
                                            onClick={handleSignOut}
                                            className='flex justify-center items-center btn-success text-neutral font-semibold w-full'>Sign out </button>
                                    </li>
                                </ul>
                            </div>
                            :
                            <NavLink className='btn btn-success btn-sm' to="/login">Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;