import React from 'react';
import { Link } from 'react-router-dom';
import { FcBusinessman, FcCalendar, FcOpenedFolder } from 'react-icons/fc';

const DisplayBloglists = ({ blog }) => {
    const { title, description, img, category, date, link } = blog;

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-top bg-info rounded px-5 py-5'>
            <div>
                <img src={img} alt={title} className='w-full' />
            </div>
            <div className='flex flex-col gap-3 text-start md:col-span-2 font-opensans'>
                <h2 className='text-xl font-semibold text-justify hover:text-primary'>{title}</h2>
                <div className='flex flex-row flex-wrap gap-3 justify-start items-center text-sm'>
                    <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                        <FcCalendar />
                        <p>{date}</p>
                    </div>
                    <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                        <FcBusinessman />
                        <p>Posted by Admin</p>
                    </div>
                    <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                        <FcOpenedFolder />
                        <p>{category}</p>
                    </div>
                </div>
                <p className='text-sm text-justify'>{description}</p>
                <div>
                    <Link to={link} className='btn btn-secondary hover:btn-primary hover:text-secondary text-sm font-normal'>Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default DisplayBloglists;