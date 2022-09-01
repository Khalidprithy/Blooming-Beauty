import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';

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
        <div className='min-h-screen'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center mt-4 text-xl text-secondary'>Enter your email</h1>
                <div className='flex justify-center mt-6 mx-4 gap-2'>
                    <div className="form-control w-full max-w-xs">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
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
                    <input className='btn btn-accent text-white' type="submit" value='Reset' />
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;