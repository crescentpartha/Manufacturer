import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-neutral'>
            <div className='max-w-screen-2xl mx-auto'>
                <section className='grid grid-cols-1 md:grid-cols-3 gap-5 px-10 py-10'>
                    <div className='flex flex-col gap-5 justify-start items-top font-opensans'>
                        <div className='text-start'>
                            <h2 className='font-lobster text-2xl'>Manufacturer</h2>
                            <p className='text-sm'>We are a team of productions and producers that supply high quality manufacturer tools.</p>
                        </div>
                        <div className='text-start'>
                            <h3 className='text-md font-bold mb-1'>Address</h3>
                            <p className='text-sm'>4710-4890 Breckinridge St, UK Burlington, VT 05401</p>
                        </div>
                        <div className='text-start'>
                            <h3 className='text-md font-bold mb-1'>Need Help?</h3>
                            <p className='text-sm'>Call: <Link to='tel:1-800-345-3456' className='hover:text-primary'>1-800-345-3456</Link></p>
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap sm:flex-nowrap gap-5 justify-between md:justify-evenly items-center md:items-start'>
                        <div className='text-start font-opensans'>
                            <h3 className='text-md font-bold mb-3'>Information</h3>
                            <ul className='flex flex-col justify-center items-start gap-2 capitalize text-sm'>
                                <Link to='/' className='hover:text-primary'><li>About us</li></Link>
                                <Link to='/' className='hover:text-primary'><li>Delivery information</li></Link>
                                <Link to='/' className='hover:text-primary'><li>Privacy policy</li></Link>
                                <Link to='/' className='hover:text-primary'><li>Terms & conditions</li></Link>
                                <Link to='/' className='hover:text-primary'><li>Returns</li></Link>
                            </ul>
                        </div>
                        <div className='text-start font-opensans'>
                            <h3 className='text-md font-bold mb-3'>Extras</h3>
                            <ul className='flex flex-col justify-center items-start gap-2 capitalize text-sm'>
                                <Link to='/' className='hover:text-primary'><li>Addresses of factories</li></Link>
                                <Link to='/' className='hover:text-primary'><li>Dealers</li></Link>
                                <Link to='/' className='hover:text-primary'><li>Trading houses</li></Link>
                                <Link to='/' className='hover:text-primary'><li>Brand shops</li></Link>
                                <Link to='/' className='hover:text-primary'><li>Career</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 justify-start items-top font-opensans'>
                        <div className='text-start'>
                            <h3 className='text-md font-bold mb-1'>Newsletter Subscribe</h3>
                            <p className='text-sm'>We'll never share your email address with a third-party.</p>
                        </div>
                        <div className='flex flex-row gap-0 justify-start items-center'>
                            <input type="text" placeholder="Enter your email address!!!" className='py-3 px-5 rounded-l text-neutral-400 w-full' />
                            <input type="button" value="Subscribe" className='btn btn-primary py-3 px-3 sm:px-5 rounded-none rounded-e hover:bg-secondary hover:border-secondary hover:text-neutral' />
                        </div>
                    </div>
                </section>
                <section className="flex flex-row flex-wrap gap-5 justify-center sm:justify-between items-center mx-10 py-4 border-t border-neutral-300 text-secondary">
                    <div>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='hover:text-primary font-lobster'>Manufacturer</span></p>
                    </div>
                    <div className="flex flex-row flex-nowrap gap-4">
                        <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-gray-500"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                        <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-gray-500"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                        <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-gray-500"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Footer;