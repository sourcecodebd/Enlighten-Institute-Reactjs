import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import detailImg from '../../girl-learning.jpg';
import useStats from '../../hooks/useStats';

const CourseDetails = () => {
    const { courseId } = useParams();
    const [stats] = useStats();
    const [newStat, setNewStat] = useState({});

    useEffect(() => {
        const foundCourse = stats?.find(stats => stats._id === parseFloat(courseId));
        setNewStat(foundCourse);
    }, [stats, courseId]);

    const getBack = () => {
        window.history.go(-1);
    }

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(70, 136, 173, 0.6),rgba(154, 209, 235, 0.658)), url(${detailImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        marginBottom: '50px',
        padding: '30px 20px',
    }

    return (
        <div>
            <div style={backgroundStyle}>
                <h1>{newStat?.course_name}</h1>
                <p>Course Id: {courseId}</p>
                <div className="container d-flex justify-content-center mb-5">
                    <div className="fw-bold">
                        <p className="text-justify fs-4">Course Fee: {newStat?.course_fee} taka</p>
                        <p className="text-justify fs-4">Description: {newStat?.description}</p>
                    </div>
                </div>
                <button onClick={getBack} className="btn-custom"><i className="fas fa-arrow-circle-right"></i> Go Back</button>
            </div>
        </div>
    );
};

export default CourseDetails;