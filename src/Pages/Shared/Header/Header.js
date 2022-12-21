import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import logo from '../../../assets/image/logo5.png'
import { FaUser } from 'react-icons/fa';

import './Header.css'

const Header = () => {

    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error))
    }

    console.log(user);
    return (
        <div>
            <div className="navbar bg-success">
                <div className="flex-1">
                    <img className='h-12 w-15 ms-5' src={logo} alt="" />
                    <h3 className='ms-5 text-white'>Learn Tree</h3>
                </div>
                <div className="me-5">

                    <Link to='/' className='no-underline mr-7 text-white font-bold'>Home</Link>
                    <Link to='/blog' className='no-underline mr-7 text-white font-bold'>Blog</Link>
                    <Link to='/courses' className='no-underline mr-7 text-white font-bold'>Courses</Link>
                    <Link to='/courses' className='no-underline mr-7 text-white font-bold'>FAQ</Link>
                    <input type="checkbox" id="check1" class="toggle" />
                    <label for="check1"></label>
                    {user?.email ? <><button onClick={handleLogout} className='bg-dark-100 text-white mr-3 p-2 rounded'>Logout</button><p className='text-white'>{user.displayName}</p><img src={user.photoURL} alt="" /></> : <Link to='/login' className='no-underline mr-5 text-white font-bold'>Login</Link>}
                    {user?.photoURL ? <img src={user.photoURL}></img> : <FaUser></FaUser>}
                </div>
            </div>
        </div>
    );
};

export default Header;