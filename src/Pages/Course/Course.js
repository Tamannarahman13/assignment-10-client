import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = ({ course }) => {
    const { name, id, img } = course;
    return (
        <div className='d-flex mt-5'>
            <div className='w-1/4'>
                <p><Link className='no-underline bg-success px-2 py-2 text-white rounded'>{course.name}</Link></p>
            </div>
            <div className='w-3/4'>
                <div className="card  w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-semibold">{name}</h2>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Course;