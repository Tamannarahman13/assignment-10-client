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
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="">
                    {user?.email ? <><button onClick={handleLogout} className='bg-dark text-white'>Logout</button></> : <Link to='/login'>Login</Link>}

                    <Link to='/register'>Register</Link>

                </div>
            </div>
        </div>
    );
};

export default Header;