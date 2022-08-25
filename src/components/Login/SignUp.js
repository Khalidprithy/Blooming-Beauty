import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';


const SignUp = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
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
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <div className="card w-80 bg-primary border rounded-md">
                        <div className="card-body">
                            <h2 className="text-2xl m-2 font-bold text-center text-white">Sign Up</h2>
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn border-white hover:border-white text-black hover:text-white bg-white"><FcGoogle className='mr-2'></FcGoogle>Sign Up with Google</button>
                            <div className="divider text-white">OR</div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full max-w-xs">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="input input-bordered w-full max-w-xs"
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
                                <div className="form-control w-full max-w-xs">
                                    <input
                                        type="email"
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
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-orange-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-orange-500">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <input
                                        type="password"
                                        placeholder="Your Password"
                                        className="input input-bordered w-full max-w-xs "
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
                                <input className='btn w-full text-white' type="submit" value='Sign Up' />
                            </form>
                            <div className='flex items-center'>
                                <p className='text-white'>Already have an account?<Link className='btn btn-link text-xs text-success' to='/login'>Login</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SignUp;