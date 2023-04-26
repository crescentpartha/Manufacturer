import React from 'react';
import shipping from '../../images/service-summary/shipping.png';
import support from '../../images/service-summary/support.png';
import moneyBack from '../../images/service-summary/money-back.png';
import payment from '../../images/service-summary/payment.png';

const ServiceSummary = () => {
    return (
        <div className='flex flex-row justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-left items-center mx-2 sm:mx-16 md:mx-20 my-10 py-3 border rounded max-w-screen-2xl'>
                <div className='flex flex-row flex-nowrap gap-3 justify-center items-center py-4 px-4 sm:border-r sm:border-b lg:border-b-0'>
                    <img src={shipping} alt="Shipping Icon" className='w-10' />
                    <div className='text-start'>
                        <h2 className='font-opensans font-bold text-sm'>Free Shipping</h2>
                        <p className='font-opensans font-base text-xs'>Free shipping on all US order</p>
                    </div>
                </div>
                <div className='flex flex-row flex-nowrap gap-3 justify-left items-center py-4 px-4 lg:border-r sm:border-b lg:border-b-0'>
                    <img src={support} alt="Support Icon" className='w-10' />
                    <div className='text-start'>
                        <h2 className='font-opensans font-bold text-sm'>Support 24/7</h2>
                        <p className='font-opensans font-base text-xs'>Contact us 24 hours a day</p>
                    </div>
                </div>
                <div className='flex flex-row flex-nowrap gap-3 justify-left items-center py-4 px-4 sm:border-r'>
                    <img src={moneyBack} alt="Money Back Icon" className='w-10' />
                    <div className='text-start'>
                        <h2 className='font-opensans font-bold text-sm'>100% Money Back</h2>
                        <p className='font-opensans font-base text-xs'>You have 30 days to Return</p>
                    </div>
                </div>
                <div className='flex flex-row flex-nowrap gap-3 justify-left items-center py-4 px-4'>
                    <img src={payment} alt="Payment Secure Icon" className='w-10' />
                    <div className='text-start'>
                        <h2 className='font-opensans font-bold text-sm'>Payment Secure</h2>
                        <p className='font-opensans font-base text-xs'>You ensure secure payment</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSummary;