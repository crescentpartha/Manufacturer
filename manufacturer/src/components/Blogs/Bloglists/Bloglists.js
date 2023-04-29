import React from 'react';
import useBlogs from '../../../hooks/useBlogs';
import DisplayBloglists from './DisplayBloglists';
import Recommendations from '../../Home/Recommendations';

const Bloglists = () => {
    const [blogs] = useBlogs();
    // console.log(blogs);

    return (
        <div>
            <div className='my-10 mx-auto max-w-screen-2xl'>
                <h2 className='text-2xl font-opensans font-bold uppercase my-5'>Featured Blogs</h2>
                <div className='grid grid-cols-1 gap-8 justify-center items-center mx-5 sm:mx-10'>
                    {
                        blogs.map(blog => <DisplayBloglists
                            key={blog.id}
                            blog={blog}
                        ></DisplayBloglists>)
                    }
                </div>
            </div>
            <Recommendations></Recommendations>
        </div>
    );
};

export default Bloglists;