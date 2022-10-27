import React from 'react';
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=''>
            <div className='p-10 bg-success mt-5'>

                <p className=' text-center  text-white'>Copyright @ 2022 Learn Tree</p>
                <div className='d-flex justify-center mt-5'>
                    <p className='text-white me-5 '><FaGoogle className=''></FaGoogle></p>
                    <p className='text-white me-5'><FaGithub className=''></FaGithub></p>
                    <p className='text-white me-5'><FaTwitter className=''></FaTwitter></p>
                </div>
            </div>


        </div>
    );
};

export default Footer;