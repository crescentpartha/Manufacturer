import React from 'react';
import turbocharger from '../../images/Banner/turbo-charger.jpg';
import engineoil from '../../images/Banner/engine-oil.jpg';
import shockbrake from '../../images/Banner/shock-absorbers-&-brake.jpg';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full min-h-screen">
                <div id="slide1" className="carousel-item relative w-full card flex-col lg:flex-row-reverse px-24 items-center">
                    <img src={turbocharger} alt="Turbocharger" className="w-full h-3/4 rounded-lg basis-9/12" />
                    <div className='max-w-2xl basis-9/12 text-start'>
                        <div className='flex flex-row flex-nowrap items-center gap-x-5 py-2'>
                            <p className=" text-3xl">Top Quality</p>
                            <hr className='h-1 w-40 border-0 bg-gray-200 rounded' />
                        </div>
                        <h1 className="text-5xl font-semibold">Aftermarket Turbocharger Specialist</h1>
                        <button className="btn btn-primary mt-10">Shopping Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide1" className="carousel-item relative w-full card flex-col lg:flex-row-reverse px-24 items-center">
                    <img src={shockbrake} alt="Shock Absorbers & Brake" className="w-full h-3/4 rounded-lg basis-9/12" />
                    <div className='max-w-2xl basis-9/12 text-start'>
                        <div className='flex flex-row flex-nowrap items-center gap-x-5 py-2'>
                            <p className=" text-3xl">Height - Quality</p>
                            <hr className='h-1 w-40 border-0 bg-gray-200 rounded' />
                        </div>
                        <h1 className="text-5xl font-semibold">The Parts Of Shock Absorbers & Brake Kit</h1>
                        <button className="btn btn-primary mt-10">Shopping Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide1" className="carousel-item relative w-full card flex-col lg:flex-row-reverse px-24 items-center">
                    <img src={engineoil} alt="Engine Oil" className="w-full h-3/4 rounded-lg basis-9/12" />
                    <div className='max-w-2xl basis-9/12 text-start'>
                        <div className='flex flex-row flex-nowrap items-center gap-x-5 py-2'>
                            <p className=" text-3xl">Engine Oils</p>
                            <hr className='h-1 w-40 border-0 bg-gray-200 rounded' />
                        </div>
                        <h1 className="text-5xl font-semibold">Top Quality Oil For Every Vehicle</h1>
                        <button className="btn btn-primary mt-10">Shopping Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;