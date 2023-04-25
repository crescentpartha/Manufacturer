import React from 'react';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { SwiperSlide } from 'swiper/react';

const DisplayBanner = ({banner}) => {
    const { title, img, description } = banner;
    return (
        <SwiperSlide>
            <div className='flex flex-row gap-5 flex-wrap sm:flex-nowrap justify-center items-center mx-10 sm:mx-20 md:mx-24 lg:mx-40 2xl:mx-auto my-10 max-w-screen-xl'>
                {/* Block Image Section */}
                <div className='mx-auto m-0'>
                    <img className='max-w-full h-96' src={img} alt={title} />
                </div>

                {/* Overlay Contents */}
                <div className='text-start pb-10 w-96'>
                    <h4 className='uppercase font-semibold text-xs'>Welcome to DeepGreen Online Store</h4>
                    <h2 className='uppercase font-coresens text-xl sm:text-5xl my-2'><span className='text-primary'>Hand</span>crafted</h2>
                    <h2 className='uppercase font-semibold text-lg sm:text-xl my-2'>{title}</h2>
                    <p className='font-kiro text-xs mb-4'>{description}</p>
                    <Link to='/' className='uppercase font-coresens text-xs mt-2'>Explore</Link>
                    <hr className='w-10 border-t-2 border-primary' />
                </div>
            </div>
        </SwiperSlide>
    );
};

export default DisplayBanner;