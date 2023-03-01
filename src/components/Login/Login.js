import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { GrFacebook } from 'react-icons/gr';
import { AiOutlineHome } from 'react-icons/ai';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userF, loadingF, errorF] = useSignInWithFacebook(auth);
    ;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }

    let errorMessage;

    if (error || errorG || errorF) {
        errorMessage = <p className='text-error pb-2'>{error?.message || errorG?.message || errorF.message}</p>
    }

    if (user || userG || userF) {
        navigate(from, { replace: true });
    }

    if (loading || loadingG || loadingF) {
        <Loading></Loading>
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="card relative w-full md:w-[400px] bg-secondary shadow-md rounded-md m-2">
                <Link className='absolute top-3 left-3 hover:bg-green-500 text-green-600 hover:text-white border border-gray-400 p-2 rounded-full' to='/'><AiOutlineHome className='text-2xl' /></Link>
                <div className="card-body">
                    <h2 className="text-2xl md:text-4xl m-2 font-semibold text-center text-white">Login</h2>
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
                                {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-error">{errors.password.message}</span>}

                            </label>
                        </div>

                        {errorMessage}

                        <div className='flex items-center justify-between'>
                            <p className='text-start'>
                                <Link
                                    to='/resetpassword'
                                    className='btn btn-link text-xs text-white p-0 m-0'>Forgot password?</Link>
                            </p>
                        </div>
                        <input className='btn btn-success w-full text-white' type="submit" value='Login' />
                    </form>
                    <div className='flex justify-center items-center'>
                        <p className='text-white text-sm md:text-base'>Doesn't have an account?<Link className='btn btn-link text-sm md:text-base text-green-600' to='/signup'>Sign Up</Link> </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;