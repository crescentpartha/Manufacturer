import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const onSubmit = async (data) => {
        // console.log(data);
    }

    return (
        <div className='flex my-10 justify-center items-center'>

            <div className="card w-4/12 rounded-none bg-white border shadow-lg">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold capitalize mb-2">Register a new account</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Username */}
                        <div className="form-control w-full max-w-xs mx-auto">
                            <input
                                type="text"
                                placeholder="Username"
                                className="input input-bordered rounded-none focus:border-primary focus:outline-none h-10 w-full max-w-xs"
                                {...register("name", {
                                    required: "Name is required",
                                    maxLength: {
                                        value: 50,
                                        message: "Max length is 50 character long"
                                    },
                                    pattern: {
                                        value: /^[A-Z]+((\s)?([A-Za-z])+)*$/,
                                        message: 'Name is invalid'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name?.message}</span>}
                                {errors.name?.type === 'maxLength' && <span className="label-text-alt text-error">{errors.name?.message}</span>}
                                {errors.name?.type === 'pattern' && <span className="label-text-alt text-error">{errors.name?.message}</span>}
                            </label>
                        </div>

                        {/* Email */}
                        <div className="form-control w-full max-w-xs mx-auto">
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered rounded-none focus:border-primary focus:outline-none h-10 w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /^[a-z0-9+_.-]+@[a-z]+\.[a-z]{3}$/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-error">{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-error">{errors.email?.message}</span>}
                            </label>
                        </div>

                        {/* Password */}
                        <div className="form-control w-full max-w-xs mx-auto">
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered rounded-none focus:border-primary focus:outline-none h-10 w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Must be 8 characters or longer'
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: 'Less than or equal to 30 characters'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-error">{errors.password?.message}</span>}
                                {errors.password?.type === 'maxLength' && <span className="label-text-alt text-error">{errors.password?.message}</span>}
                            </label>
                        </div>

                        <input
                            className='btn btn-primary rounded-none focus:border-primary focus:outline-none btn-sm w-full max-w-xs mt-3 h-10'
                            type="Submit"
                            value="Sign Up"
                            readOnly
                        />
                    </form>
                    <p className='text-center'><small>Already have an account? <Link to="/login" className='text-primary'>Login now</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Register;