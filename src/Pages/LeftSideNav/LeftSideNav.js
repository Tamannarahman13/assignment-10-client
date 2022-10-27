import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({ course }) => {
    const { name } = course;
    return (
        <div>
            <p className='mt-5'><Link className='no-underline bg-success text-white px-2 py-2 rounded'>{name}</Link></p>
        </div>
    );
};

export default LeftSideNav;