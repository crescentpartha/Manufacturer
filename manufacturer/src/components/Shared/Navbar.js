import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from '@firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Authentication/Loading';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    const logout = () => {
        signOut(auth);
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/about'>About</Link></li>
        {
            user
                ? <li><Link to='/login' onClick={logout}>Sign Out</Link></li>
                : <li><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar sm:px-5 md:px-10 xl:px-20 w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost text-secondary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-secondary uppercase font-lato text-sm rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl text-secondary font-lobster">Manufacturer</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-secondary uppercase font-lato text-sm">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">

            </div>
        </div>
    );
};

export default Navbar;