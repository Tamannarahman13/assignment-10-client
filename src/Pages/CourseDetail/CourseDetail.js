import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    // const courses = useLoaderData()
    const selectedCourse = useLoaderData();
    const { name, img, description, fee, duration, eligibility } = selectedCourse

    return (
        <div className='container'>

            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;