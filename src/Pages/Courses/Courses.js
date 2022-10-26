import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import LeftSide from '../LeftSide/LeftSide';
import './Courses.css'

const Courses = () => {
    // const [courses,setCourses] = useState([]);
    const courses = useLoaderData()
    return (
        <div className=''>

            {/* {
                courses.map(course => <LeftSide key={course.id} course={course}></LeftSide>)
            } */}


            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}

                ></Course>)
            }




        </div>
    );
};

export default Courses;