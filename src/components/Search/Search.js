import React, { useEffect, useState } from 'react';
import './Search.css';

const Search = () => {
    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        const ENDPOINT = `enlighten.json`;
        const URL = `https://raw.githubusercontent.com/sourcecodebd/online-course-api-by-nafi/main/${ENDPOINT}`;
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setCourses(data);
            })
            .catch(err => console.log(err));
    }, [])

    const handleSearch = (e) => {
        const searchText = e.target.value;
        const foundCourse = courses.filter(c => c.course_name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        if (searchText) {
            setSearch(foundCourse);
        }
        else {
            setSearch([]);
        }
    }

    return (
        <div>
            <div className="search-bar">
                <i className="fas fa-search"></i>
                <input onChange={handleSearch} type="text" placeholder="Search" id="" />
            </div>
            <div className="container">

                {
                    search?.length === 0 ?
                        ""

                        :
                        <div>
                            {
                                search?.map(s =>
                                    <div className="search-result mx-auto">
                                        <div className="d-flex justify-content-center">
                                            <div>
                                                <div><span className="fw-bold text-white">Course Name: </span>{s.course_name}</div>
                                                <div><span className="fw-bold text-white">Instructor: </span>{s.instructor}</div>
                                                <div><span className="fw-bold text-white">Course Duration: </span>{s.course_duration}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Search;