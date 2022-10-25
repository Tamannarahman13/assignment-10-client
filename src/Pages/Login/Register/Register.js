import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

import app from '../../../firebase/firebase.config';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../context/UserContext';




const Register = () => {
    const { createUser, updateName, varifyEmail, signInWithGoogle } = useContext(AuthContext)




    //  email and password
    const handleSubmit = (event) => {
        event.preventDefault()


        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        createUser(email, password)
            .then(result => {
                console.log(result.user)

                updateName(name)
                    .then(() => {
                        // Toast.success('name updated')
                        // console.log(auth.currentUser.displayName)


                        varifyEmail()
                            .then(() => {


                            });


                    }).catch((error) => {

                    });

            })
            .catch(error => console.error(error))
    }

    // google

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
                        <h1 className='my-3 text-4xl text-success font-bold'>Register</h1>
                        <p className='text-sm text-gray-400'>Create a new account</p>
                    </div>
                    <form onSubmit={handleSubmit}
                        noValidate=''
                        action=''
                        className='space-y-12 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-400 focus:border-gray-900 bg-gray-200 text-gray-900'
                                // data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                // data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <div className=''>
                                    <label htmlFor='password' className='text-sm'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    type='password'
                                    name='password'
                                    id='password'
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                                />
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <div>
                                <button
                                    type='submit'
                                    className='w-full px-8 py-3 font-semibold rounded-md bg-success hover:bg-gray-700 hover:text-white text-gray-100'
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            Signup with social accounts
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
                        Already have an account yet?{' '}
                        <Link to='/login' className='hover:underline text-gray-600'>
                            Sign In
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;