import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const courses = useLoaderData()
    return (
        <div>
            <h1>{courses.title}</h1>
        </div>
    );
};

export default CourseDetail;