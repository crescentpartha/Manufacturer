import React from 'react';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { SwiperSlide } from 'swiper/react';

const DisplayBanner = ({ banner }) => {
    const { title, img, description } = banner;
    return (
        <SwiperSlide>
            <div className='flex flex-row gap-5 flex-wrap md:flex-nowrap justify-center items-center mx-10 sm:mx-20 md:mx-24 lg:mx-40 2xl:mx-auto my-10 max-w-screen-xl'>
                {/* Overlay Contents */}
                <div className='text-start w-96'>
                    <div className='flex flex-row flex-nowrap gap-4 items-center'>
                        <h2 className='font-lato text-secondary capitalize italic text-lg sm:text-2xl my-2'>{title}</h2>
                        <hr className='border-t-2 border-neutral-300 w-20' />
                    </div>
                    <p className='font-lato font-bold text-secondary text-5xl'>{description}</p>
                    <Link to='/' className='btn btn-primary hover:btn-secondary uppercase font-opensans font-normal text-secondary hover:text-neutral text-base mt-10'>Shopping Now</Link>
                </div>

                {/* Block Image Section */}
                <div className='mx-auto m-0'>
                    <img className='max-w-full h-96' src={img} alt={title} />
                </div>
            </div>
        </SwiperSlide>
    );
};

export default DisplayBanner;