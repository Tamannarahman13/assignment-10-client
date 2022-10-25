import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = ({ course }) => {
    const { name, id, img } = course;
    return (
        <div className='grid-cols-3'>


            <div className="card  w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold">{name}</h2>


                </div>
            </div>
        </div>


    );
};

export default Course;