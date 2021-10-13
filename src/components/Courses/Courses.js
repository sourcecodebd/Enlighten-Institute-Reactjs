import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const ENDPOINT = `enlighten.json`
        const URL = `https://raw.githubusercontent.com/sourcecodebd/online-course-api-by-nafi/main/${ENDPOINT}`
        fetch(URL)
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    const loadingStyle = {
        backgroundImage: 'url(./loading.gif)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transform: 'scale(0.5)',
        height: '200px'
    }

    return (
        <div className="mb-5">


            <div>
                <h2 className="mt-5 text-primary fw-bold">Courses</h2>
                <p className="line"></p>
                <div className="courses row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 gap-4 d-flex justify-content-center mx-auto mt-5">
                    {
                        courses.length === 0
                            ?
                            <div style={loadingStyle}></div>

                            :

                            courses.map(course => <Course course={course} key={course._id} />)

                    }
                </div>
            </div>

        </div>
    );
};

export default Courses;