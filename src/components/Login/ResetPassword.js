import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';


const ResetPassword = () => {
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        if (data.email) {
            sendPasswordResetEmail(data.email);
            toast.success('Email sent for reset password')
        }
        else {
            toast.error('Please enter your email')
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500'>
            <div className='relative border border-red-400 rounded-lg bg-white w-80 md:w-[400px]'>

                <Link className='absolute top-3 left-3 hover:bg-green-500 hover:text-white border border-green-400 p-2 rounded-full' to='/'><AiOutlineHome className='text-2xl' /></Link>
                <form
                    onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center mt-10 text-xl text-gray-600 font-medium'>Enter your email</h1>
                    <div className='flex flex-col justify-center mt-6 mx-4 gap-2'>
                        <div className="form-control w-full">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Please Enter You Email'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Enter a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-success text-white m-4' type="submit" value='Reset' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;