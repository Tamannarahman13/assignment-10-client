import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


import './Courses.css'


const Courses = () => {
    // const [courses,setCourses] = useState([]);
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='mt-5 ms-5'>
                {
                    courses.map(course => <LeftSideNav
                        key={course.id}
                        course={course}

                    ></LeftSideNav>)
                }
            </div>
            <div className='col-span-2
'>
                <div className='grid grid-cols-2 gap-4'>



                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}

                        ></Course>)
                    }




                </div>
            </div>
        </div>
    );
};

export default Courses;