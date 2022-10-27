import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = ({ course }) => {
    const { name, id, img } = course;
    return (
        <div className=' mt-5'>

            <div className='w-3/4'>
                <div className="card  w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-semibold">{name}</h2>
                        <Link to={`/courses/${id}`} className='bg-success text-white py-3 rounded no-underline text-center'>Details</Link>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Course;