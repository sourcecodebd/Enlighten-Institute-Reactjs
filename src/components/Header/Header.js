import React from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import logo from '../../logo.png';
import './Header.css';
import { pressOnBar } from './NavBar';
import MarqueeOff from './MarqueeOff';
import 'animate.css';

const Header = () => {
    let history = useHistory();
    const handlerCourses = () => {
        history.push('/courses');
    }
    const handlerYT = () => {
        window.location = 'https://www.youtube.com';
    }

    const HeadingStyle = {
        fontWeight: 'bold',
        marginRight: '10px',
        fontSize: '25px',
        cursor: 'pointer',
    }
    const activeStyle = {
        color: 'black',
        backgroundColor: "#00e9ff",
        fontWeight: "bold",
    }

    return (
        <div className="header" id="header">
            <nav>
                <div className="bg-info p-2 mb-5 fixed-top" id="short-msg">
                    <div className="d-flex">
                        <marquee width="100%" direction="left">
                            Next Batch will start from December, 15, 2021. Earlier students will get 15% discount of course fee.
                        </marquee>
                        <i onClick={MarqueeOff} className="fas fa-times mx-4 mt-1"></i>
                    </div>
                </div>
                <div className="navbar mt-2">
                    <img title="Enlighten Institute" src={logo} alt="Enlighten Official Logo" className="logo" /><span className="heading" title="Enlighten Institute" style={HeadingStyle}></span>
                    <NavLink className="navlink" activeStyle={activeStyle} to="/home">Home</NavLink>
                    <NavLink className="navlink" activeStyle={activeStyle} to="/about">About Us</NavLink>
                    <NavLink className="navlink" activeStyle={activeStyle} to="/courses">Courses</NavLink>
                    <NavLink className="navlink" activeStyle={activeStyle} to="/stats">Stats</NavLink>
                </div>
                <div className="menubar">
                    <div className="mobile-nav">
                        <NavLink className="navlink" activeStyle={activeStyle} to="/home">Home</NavLink>
                        <NavLink className="navlink" activeStyle={activeStyle} to="/about">About Us</NavLink>
                        <NavLink className="navlink" activeStyle={activeStyle} to="/courses">Courses</NavLink>
                        <NavLink className="navlink" activeStyle={activeStyle} to="/stats">Stats</NavLink>
                    </div>
                    {/* mobile menubar */}
                    <div className="toggle-bar-margin">
                        <div onClick={pressOnBar} id="toggle-bar">
                            <i className="fas fa-bars fa-2x"></i>
                        </div>
                    </div>
                </div>
            </nav>
            <Carousel fade className="text-white mx-auto mb-5">
                <Carousel.Item className="carousel-custom row row-cols-md-2 d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="animate__animated animate__bounce">Personalized learning</h1>
                        <p>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
                        <div className="row row-cols-3 row-cols-md-3 d-flex justify-content-center align-items-center gap-3">
                            <button onClick={handlerCourses} className="btn btn-info info text-white fw-bold fs-4 shadow-lg"><i className="fas fa-arrow-circle-right"></i> Enroll Now</button>
                            <button onClick={handlerYT} className="btn btn-danger red text-white fw-bold fs-4 shadow-lg"><i className="fab fa-youtube"></i> YouTube</button>
                        </div>
                    </div>
                    <div>
                        <img
                            className="img-fluid rounded-pill"
                            src="https://i.ibb.co/ZmmvBQX/react.png"
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-custom row row-cols-md-2 d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="animate__animated animate__bounce">Trusted content</h1>
                        <p>Created by experts, Enlighten Institute’s library of trusted practice and lessons covers math, science, and more. Always free for learners and teachers.</p>
                        <div className="row row-cols-3 row-cols-md-3 d-flex justify-content-center align-items-center gap-3">
                            <button onClick={handlerCourses} className="btn btn-info info text-white fw-bold fs-4 shadow-lg"><i className="fas fa-arrow-circle-right"></i> Enroll Now</button>
                            <button onClick={handlerYT} className="btn btn-danger red text-white fw-bold fs-4 shadow-lg"><i className="fab fa-youtube"></i> YouTube</button>
                        </div>
                    </div>
                    <div>
                        <img
                            className="img-fluid rounded-pill"
                            src="https://i.ibb.co/9yjDHPk/nodejs.png"
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-custom row row-cols-md-2 d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="animate__animated animate__bounce">Tools to empower teachers</h1>
                        <p>With Enlighten Institute, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.</p>
                        <div className="row row-cols-3 row-cols-md-3 d-flex justify-content-center align-items-center gap-3">
                            <button onClick={handlerCourses} className="btn btn-info info text-white fw-bold fs-4 shadow-lg"><i className="fas fa-arrow-circle-right"></i> Enroll Now</button>
                            <button onClick={handlerYT} className="btn btn-danger red text-white fw-bold fs-4 shadow-lg"><i className="fab fa-youtube"></i> YouTube</button>
                        </div>
                    </div>
                    <div>
                        <img
                            className="img-fluid rounded-pill"
                            src="https://i.ibb.co/pjpDT2P/php.png"
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-custom row row-cols-md-2 d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="animate__animated animate__bounce">Encouraging Teachers and Students</h1>
                        <p>We empower teachers to support their entire classroom. 90% of US teachers who have used Enlighten Institute have found us effective.</p>
                        <div className="row row-cols-3 row-cols-md-3 d-flex justify-content-center align-items-center gap-3">
                            <button onClick={handlerCourses} className="btn btn-info info text-white fw-bold fs-4 shadow-lg"><i className="fas fa-arrow-circle-right"></i> Enroll Now</button>
                            <button onClick={handlerYT} className="btn btn-danger red text-white fw-bold fs-4 shadow-lg"><i className="fab fa-youtube"></i> YouTube</button>
                        </div>
                    </div>
                    <div>
                        <img
                            className="img-fluid rounded-pill m-2"
                            src="https://i.ibb.co/Vqqdftt/laravel.png"
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;