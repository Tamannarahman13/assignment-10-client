import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';

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
                    <h3 className='ms-5 text-white'>Learn Tree</h3>
                </div>
                <div className="me-5">


                    <Link to='/blog' className='no-underline mr-7 text-white font-bold'>Blog</Link>
                    <Link to='/courses' className='no-underline mr-7 text-white font-bold'>Courses</Link>
                    <Link to='/courses' className='no-underline mr-7 text-white font-bold'>FAQ</Link>
                    {user?.email ? <><button onClick={handleLogout} className='bg-dark-100 text-white mr-3 p-2 rounded'>Logout</button></> : <Link to='/login' className='no-underline mr-5 text-white font-bold'>Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;