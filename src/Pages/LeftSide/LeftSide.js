import React from 'react';
import { Link } from 'react-router-dom';

const LeftSide = ({ course }) => {
    const { name, id, img, description } = course;
    return (
        <div>
            <p><Link>{course.name}</Link></p>
        </div>
    );
};

export default LeftSide;