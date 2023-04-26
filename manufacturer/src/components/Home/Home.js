import React from 'react';
import Banner from './Carousel/Banner';
import ServiceSummary from './ServiceSummary';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <ServiceSummary></ServiceSummary>
            </div>
        </div>
    );
};

export default Home;