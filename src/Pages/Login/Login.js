import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {
    const [error, setError] = useState('')
    const { signIn, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value
        const password = form.password.value
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('')
                navigate('/')
            })
            .catch(error => {
                console.error(error)

                setError(error.message)
            })

    }

    // Google

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
    }

    return (
        <div>
            <div className='flex justify-center items-center pt-8'>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold text-success'>Sign in</h1>
                        <p className='text-sm text-gray-400'>
                            Sign in to access your account
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}
                        noValidate=''
                        action=''
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='Enter Your Email Here' required
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    type='password'
                                    name='password'
                                    id='password'
                                    placeholder='*******' required
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                                />
                            </div>
                            <p className='text-danger'>{error}</p>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='w-full px-8 py-3 font-semibold rounded-md bg-success hover:bg-gray-700 hover:text-white text-gray-100'
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className='space-y-1'>
                        <button className='text-xs hover:underline text-gray-400'>
                            Forgot password?
                        </button>
                    </div>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            Login with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>
                    <div className=''>
                        <button onClick={handleGoogleSignin} className="w-full text-white px-8 py-3 btn gap-2 d-flex text-center bg-success">
                            Sign Up With Google
                            <FaGoogle></FaGoogle>
                        </button>
                        <button className="w-full text-white px-8 py-3 mt-3 btn gap-2 d-flex text-center bg-success">
                            Sign Up With Github
                            <FaGithub></FaGithub>
                        </button>
                    </div>
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Don't have an account yet?{' '}
                        <Link to='/register' className='hover:underline text-gray-600'>
                            Sign up
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;