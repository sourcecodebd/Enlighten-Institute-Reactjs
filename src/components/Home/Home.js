import React from 'react';
import About from '../About/About';
import HomeCourses from '../HomeCourses/HomeCourses';
import Stats from '../Stats/Stats';


const Home = () => {
    return (
        <div>
            <About />
            <HomeCourses />
            <Stats />
        </div>
    );
};

export default Home;