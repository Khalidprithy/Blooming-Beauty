import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import { AiOutlineHome } from 'react-icons/ai';


const SignUp = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [agree, setAgree] = useState(false);


    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userF, loadingF, errorF] = useSignInWithFacebook(auth);
    ;
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const onSubmit = async data => {
        createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name })
    }

    let errorMessage;

    if (user || userG) {
        navigate(from, { replace: true });
    }

    if (error || errorG || updateError) {
        errorMessage = <p className='text-orange-500'>{error?.message || errorG?.message || updateError?.message}</p>
    }

    if (loading || loadingG || updating) {
        <Loading></Loading>
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="card relative w-full md:w-[400px] lg:w-[500px] bg-secondary shadow-md rounded-md m-2">
                <Link className='absolute top-3 left-3 hover:bg-green-500 text-green-600 hover:text-white border border-gray-400 p-2 rounded-full' to='/'><AiOutlineHome className='text-2xl' /></Link>
                <div className="card-body">
                    <h2 className="text-2xl md:text-4xl m-2 font-semibold text-center text-white">Sign Up</h2>
                    <div className="flex flex-col items-center justify-between">
                        <button
                            onClick={() => signInWithGoogle()}
                            className="w-full btn bg-white border-none text-gray-700 hover:text-white mb-2 "><FcGoogle className='text-2xl mr-2'></FcGoogle>Google</button>
                        <button
                            onClick={() => signInWithFacebook()}
                            className="w-full btn bg-white border-none text-gray-700 hover:text-white mb-2 "><GrFacebook className='text-xl mr-2 text-blue-500'></GrFacebook>Facebook</button>
                    </div>

                    <div className="divider text-white">OR</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Please Enter You Name'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-orange-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="email"
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
                                {errors.email?.type === 'required' && <span className="label-text-alt text-orange-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-orange-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full "
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Please Enter You Password'
                                    },
                                    pattern: {
                                        value: /(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                                        message: 'Password must contain one special character and one number'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-orange-500">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-orange-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {errorMessage}


                        <div>
                            <input
                                onClick={() => setAgree(!agree)}
                                type="checkbox" name="terms" id="" />
                            <label className='ml-1 pb-2 text-white' htmlFor="terms">I agree with the terms of use </label>
                        </div>
                        <input
                            disabled={!agree}
                            className='btn btn-success w-full text-white mt-1' type="submit" value='Sign Up' />
                    </form>
                    <div className='flex items-center'>
                        <p className='text-white'>Already have an account?<Link className='btn btn-link text-xs md:text-base text-green-600' to='/login'>Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SignUp;