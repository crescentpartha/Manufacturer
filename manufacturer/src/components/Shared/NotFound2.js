import React from 'react';
import error from '../../images/404-error.png';
import { Link } from 'react-router-dom';

const NotFound2 = () => {
    return (
        <div className='my-20 mx-10 md:mx-20 lg:mx-56 grid grid-cols-1 sm:grid-cols-2 gap-6 align-middle items-center'>
            <div>
                <img src={error} alt="404 Error" className='' />
            </div>
            <div className='text-left'>
                <h2 className='font-bold font-lato text-4xl sm:text-5xl md:text-6xl 2xl:text-8xl text-secondary'>404 <span className='text-primary'>ERROR!</span></h2>
                <p className='font-normal font-opensans text-sm sm:text-md 2xl:text-lg text-slate-500 mt-5'>Sorry, we can't find the page you are looking for. Please go to <Link to='/' className='text-primary'>Home.</Link></p>
            </div>
        </div>
    );
};

export default NotFound2;