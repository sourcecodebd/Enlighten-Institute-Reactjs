import React from 'react';

const About = () => {

    const backgroundStyle = {
        backgroundImage: 'linear-gradient(rgba(70, 136, 173, 0.6),rgba(154, 209, 235, 0.658)), url(./about-bg.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <article className="container-fluid row row-cols-md-2 mx-auto gy-5 py-3 pb-5 text-white fw-bold" style={backgroundStyle}>
            <div>
                <img className="img-fluid mb-5 rounded" src="https://img.freepik.com/free-vector/kids-online-lessons_52683-36818.jpg?size=626&ext=jpg" alt="" />
            </div>
            <div style={{ textAlign: 'justify' }}>
                <h2 className="text-center">About Us</h2>
                <p className="fs-5">We empower teachers to support their entire virtual classroom. 90% of the instructors who have used Enlighten Institute have found us effective.</p>
                <p>Our professional approach and continual development has led us to becoming the leading provider of professional course education. We combine innovative, fun and creative ways to teach course and engage with students to reach their full potential. Innovative course lessons and classes from beginner through advanced for children, teens, and adults. We are the best course school for you. We have programs to suit everyone’s needs. We are the only professional course school offering lessons for children, adults and seniors.</p>
            </div>
        </article>
    );
};

export default About;