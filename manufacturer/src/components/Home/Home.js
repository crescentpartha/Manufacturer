import React from 'react';
import Banner from './Carousel/Banner';
import ServiceSummary from './ServiceSummary';
import Recommendations from './Recommendations';
import BusinessSummary from './BusinessSummary';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <ServiceSummary></ServiceSummary>
            </div>
            <div>
                <Recommendations></Recommendations>
            </div>
            <div>
                <BusinessSummary></BusinessSummary>
            </div>
        </div>
    );
};

export default Home;