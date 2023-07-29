import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle';

const RetrievePassword = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    let signInError;
    if (error) {
        signInError = <p className='text-error'><small>{error?.message}</small></p>
    }

    const onSubmit = async (data) => {
        // console.log(data);
        await sendPasswordResetEmail(data.email);
        toast.success('Send your reset password Email!');
    }

    return (
        <div className='flex my-10 justify-center items-center'>
            <PageTitle title="Forget Password"></PageTitle>

            <div className="card w-96 xl:w-1/3 rounded-none bg-white border shadow-lg">
                <div className="card-body">
                <h2 className="text-center text-xl xl:text-2xl font-bold capitalize mb-4">Retrieve Password</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

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

                        { sending && <span className="loading loading-dots loading-md"></span>}
                        {signInError}
                        <input
                            className='btn btn-primary rounded-none focus:border-primary focus:outline-none btn-sm w-full max-w-xs mt-3 h-10'
                            type="Submit"
                            value="Reset"
                            readOnly
                        />
                    </form>
                    <p className='text-center'><small>Not a member yet? <Link to="/register" className='text-primary'>Register now</Link></small></p>
                    <p className='text-center'><small>Already have an account? <Link to="/login" className='text-primary'>Login now</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default RetrievePassword;