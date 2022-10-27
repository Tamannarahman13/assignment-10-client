import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    // const courses = useLoaderData()
    const selectedCourse = useLoaderData();
    const { name, img, description, fee, duration, eligibility } = selectedCourse

    return (
        <div className='container '>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className="card-title font-bold">{name}</h1>
                    <p>{description}</p>
                    <h3>Fee: {fee}</h3>
                    <h6>Course Duration: {duration}</h6>
                    <h6>Eligibility: {eligibility}</h6>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success">Get Premium Access</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;