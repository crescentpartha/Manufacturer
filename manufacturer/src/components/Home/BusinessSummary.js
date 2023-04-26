import React from 'react';
import { Link } from 'react-router-dom';
import { MdGroups, MdPreview } from 'react-icons/md';
import { GiMoneyStack } from 'react-icons/gi';
import { BsTools } from 'react-icons/bs';

const BusinessSummary = () => {
    return (
        <div className='my-10 mx-4'>
            {/* Intro Section */}
            <div>
                <h2 className='font-opensans text-3xl sm:text-4xl font-extrabold capitalize'>Millions business trust us</h2>
                <p className='font-opensans text-lg sm:text-xl font-normal capitalize'>Try to understand users expectation</p>
                <hr className='w-40 border-t-2 mx-auto mt-2 border-primary' />
            </div>

            {/* Business Stats Section */}
            <div className='flex flex-row justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-left items-center mx-2 sm:mx-20 my-10 py-3 border rounded max-w-screen-2xl'>
                    <div className='flex flex-col flex-nowrap gap-4 justify-center items-center py-4 px-4 sm:border-r sm:border-b md:border-b-0'>
                        {/* <img src={shipping} alt="Shipping Icon" className='w-10' /> */}
                        <MdGroups className='w-16 h-16 text-primary' />
                        <div className='text-center'>
                            <h2 className='font-lato font-extrabold text-4xl text-neutral-700'>100+</h2>
                            <p className='font-opensans font-light text-primary text-lg'>Customers</p>
                        </div>
                    </div>
                    <div className='flex flex-col flex-nowrap gap-4 justify-center items-center py-4 px-4 sm:border-r sm:border-b md:border-b-0'>
                        {/* <img src={shipping} alt="Shipping Icon" className='w-10' /> */}
                        <BsTools className='w-16 h-16 text-primary' />
                        <div className='text-center'>
                            <h2 className='font-lato font-extrabold text-4xl text-neutral-700'>50+</h2>
                            <p className='font-opensans font-light text-primary text-lg'>Tools</p>
                        </div>
                    </div>
                    <div className='flex flex-col flex-nowrap gap-4 justify-center items-center py-4 px-4 sm:border-r'>
                        {/* <img src={shipping} alt="Shipping Icon" className='w-10' /> */}
                        <GiMoneyStack className='w-16 h-16 text-primary' />
                        <div className='text-center'>
                            <h2 className='font-lato font-extrabold text-4xl text-neutral-700'>120M+</h2>
                            <p className='font-opensans font-light text-primary text-lg'>Annual Revenue</p>
                        </div>
                    </div>
                    <div className='flex flex-col flex-nowrap gap-4 justify-center items-center py-4 px-4'>
                        {/* <img src={shipping} alt="Shipping Icon" className='w-10' /> */}
                        <MdPreview className='w-16 h-16 text-primary' />
                        <div className='text-center'>
                            <h2 className='font-lato font-extrabold text-4xl text-neutral-700'>33K+</h2>
                            <p className='font-opensans font-light text-primary text-lg'>Reviews</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Questions Section */}
            <div className='flex flex-row justify-center'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center py-10 px-4 sm:px-20 max-w-screen-lg rounded bg-neutral-50'>
                    <div className='text-center lg:text-start'>
                        <h2 className='font-opensans text-xl sm:text-2xl capitalize'>Have any question about us or get a products request?</h2>
                        <p className='font-opensans text-xs sm:text-sm'>Don't hesitate to contact us.</p>
                    </div>
                    <div className='flex flex-row flex-wrap gap-4 md:gap-10 justify-center items-center mx-2'>
                        <Link to='/' className='btn rounded-full btn-primary hover:bg-secondary hover:text-neutral font-opensans font-medium text-xs sm:text-sm px-7 border-none'>Request for Product</Link>
                        <Link to='/' className='btn rounded-full btn-primary hover:bg-secondary hover:text-neutral font-opensans font-medium text-xs sm:text-sm px-7 border-none'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;