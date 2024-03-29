import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';
import PageTitle from '../Shared/PageTitle';
import SocialLogin from './SocialLogin';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [userInfo, setUserInfo] = useState(null);
    // const [token] = useCreateUserToken([user, userInfo]);
    const navigate = useNavigate();
    // console.log(userInfo);

    let signInError;
    if (error || updateError) {
        signInError = <p className='text-error'><small>{error?.message || updateError?.message}</small></p>
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        // console.log(user);
        navigate('/');
    }
    
    const onSubmit = async (data) => {
        // console.log(data);
        setUserInfo(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    }

    return (
        <div className='flex my-10 justify-center items-center'>
            <PageTitle title="Register"></PageTitle>

            <div className="card w-96 xl:w-1/3 rounded-none bg-white border shadow-lg">
                <div className="card-body">
                    <h2 className="text-center text-xl xl:text-2xl font-bold capitalize mb-2">Register a new account</h2>

                    <SocialLogin></SocialLogin>

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

                        {signInError}
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