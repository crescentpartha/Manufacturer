import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { TfiGoogle } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const Recommendations = () => {
    return (
        <div className='bg-primary flex flex-row justify-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center py-10 px-4 sm:px-20 max-w-screen-2xl'>
                <div className='text-center lg:text-start'>
                    <h2 className='font-opensans text-2xl sm:text-3xl capitalize'>We have <span className='font-extrabold'>recommendations</span> for you</h2>
                    <p className='font-opensans text-xs sm:text-sm'>Take 30% off when you spend $150 or more with code <span className='italic'>Manufacturer</span></p>
                </div>
                <div className='flex flex-row flex-wrap gap-4 md:gap-10 justify-center items-center mx-2'>
                    <div>
                        <Link to='/' className='btn rounded-full btn-secondary hover:bg-primary hover:text-secondary font-opensans font-normal text-xs sm:text-sm px-7'>Discover Now</Link>
                    </div>
                    <div className='flex flex-row flex-nowrap gap-2'>
                        <Link to='/'><FaFacebookF className='border border-secondary hover:bg-secondary hover:text-neutral text-secondary rounded-full p-3 w-10 h-10' /></Link>
                        <Link to='/'><FaTwitter className='border border-secondary hover:bg-secondary hover:text-neutral text-secondary rounded-full p-3 w-10 h-10' /></Link>
                        <Link to='/'><FaYoutube className='border border-secondary hover:bg-secondary hover:text-neutral text-secondary rounded-full p-3 w-10 h-10' /></Link>
                        <Link to='/'><TfiGoogle className='border border-secondary hover:bg-secondary hover:text-neutral text-secondary rounded-full p-3 w-10 h-10' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommendations;