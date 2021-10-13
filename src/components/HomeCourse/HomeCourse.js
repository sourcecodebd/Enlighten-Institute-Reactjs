import React from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory } from 'react-router-dom';

const HomeCourse = (props) => {
    const { _id, course_name, instructor, course_duration, rating, rating_count, picture } = props.course || {};
    /* Rating React */
    const fullIcon = <i className="fas fa-star"></i>
    const emptyIcon = <i className="far fa-star"></i>
    const backgroundStyle = {
        backgroundImage: 'url(https://iacademy.qodeinteractive.com/wp-content/uploads/2017/05/h12-parallax-1.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        color: 'white'
    }

    let history = useHistory();
    const handlerDetails = () => {
        const URL = `/course-details/${_id}`;
        history.push(URL);
    }

    return (
        <Card style={{ width: '18rem' }} className="shadow p-0">
            <div className="course-image shadow-sm">
                <Card.Img variant="top" src={picture.thumbnail} />
            </div>
            <Card.Body style={backgroundStyle}>
                <Card.Title>
                    <h3>{course_name}</h3>
                    <div className="d-flex justify-content-between align-items-center">
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={emptyIcon}
                            placeholderSymbol={fullIcon}
                            fullSymbol={fullIcon}
                            readonly
                        />
                        <Button className="text-white fw-bold" variant="" style={{ backgroundColor: 'limegreen', border: 'none' }}>
                            Reviews <Badge className="border border-1 fs-6" bg="white" style={{ color: 'limegreen' }}>{rating_count}</Badge>
                        </Button>
                    </div>
                </Card.Title>
                <Card.Text className="text-justify">
                    <span className="text-yellow">Course Id: </span>{_id}<br />
                    <span className="text-yellow">Course Name:</span> {course_name}<br />
                    <span className="text-yellow">Instructor: </span> {instructor}<br />
                    <span className="text-yellow">Course Duration: </span> {course_duration}<br />
                    <li className="text-center mt-4">
                        <button className="btn-custom" onClick={handlerDetails}><i className="fas fa-arrow-right"></i> View More </button>
                    </li>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default HomeCourse;