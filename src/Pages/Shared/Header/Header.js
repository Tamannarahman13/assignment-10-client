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
                <div className="">
                    {user?.email ? <><button onClick={handleLogout} className='bg-dark text-white'>Logout</button></> : <Link to='/login' className='no-underline mr-5 text-white'>Login</Link>}

                    <Link to='/register' className='no-underline mr-5 text-white'>Register</Link>

                </div>
            </div>
        </div>
    );
};

export default Header;