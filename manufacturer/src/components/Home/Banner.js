import React from 'react';
import turbocharger from '../../images/Banner/turbo-charger.jpg';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={turbocharger} alt="Turbocharger" className="max-w-2xl rounded-lg shadow-2xl" />
                    <div className='max-w-2xl'>
                        <p className="py-6">Top Quality</p>
                        <h1 className="text-5xl font-bold">Aftermarket Turbocharger Specialist</h1>
                        <button className="btn btn-primary">Shopping Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;