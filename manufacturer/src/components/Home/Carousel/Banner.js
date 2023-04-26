import React from 'react';
import useBanner from '../../../hooks/useBanner';
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import DisplayBanner from './DisplayBanner';

const Banner = () => {
    const [banners] = useBanner();
    // console.log(banners);

    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            // navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className='bg-info'
            
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            {banners.map(banner => <SwiperSlide
                key={banner.id}
                style={{marginRight: '0px'}}
            ><DisplayBanner banner={banner}></DisplayBanner></SwiperSlide>
            )}
        </Swiper>
    );
};

export default Banner;