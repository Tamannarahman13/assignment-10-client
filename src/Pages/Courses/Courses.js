import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    // const [courses,setCourses] = useState([]);
    const courses = useLoaderData()
    return (
        <div className='d-flex  justify-around mt-10'>
            <div>
                {
                    courses.map(course => <p><Link>{course.name}</Link></p>)
                }
            </div>
            <div className='card'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}

                    ></Course>)
                }
            </div>



        </div>
    );
};

export default Courses;