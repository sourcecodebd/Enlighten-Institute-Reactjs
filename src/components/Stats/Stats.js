import React from 'react';
import useStats from '../../hooks/useStats';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Stats.css';
import Search from '../Search/Search';

const Stats = () => {
    const [stats] = useStats();


    const backgroundStyle = {
        backgroundImage: 'url(https://iacademy.qodeinteractive.com/wp-content/uploads/2017/05/h12-parallax-1.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        height: '100%',
    }
    const statsStyle = {
        backgroundImage: 'url(https://iacademy.qodeinteractive.com/wp-content/uploads/2017/05/h12-parallax-1.jpg)',
        backgroundColor: '#fff',
        height: '300px',
        color: 'white',
        margin: '40px 0',
    }

    return (
        <section className="text-white py-4 pb-5" style={backgroundStyle}>
            <h2>Review Stats</h2>
            <p className="line bg-warning mb-3"></p>
            <Search />
            <div className="container-fluid mt-5">
                <div className="charts overflow-scroll row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 mx-auto">
                    <BarChart
                        width={600}
                        height={500}
                        data={stats}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="course_name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey='rating' fill="#82ca9d" />
                    </BarChart>

                    <BarChart
                        width={600}
                        height={500}
                        data={stats}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 30,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="course_name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey='rating_count' fill="#00e9ff" />
                    </BarChart>
                </div>

            </div>
            <div className="stats container mx-auto py-4" style={statsStyle}>
                <div className="events-heading rounded-1">
                    <h2 className="text-white py-2 px-4 fs-4">Events</h2>
                </div>
                <div className="my-4">
                    <h4 className="my-3">Choose Your Direction</h4>
                    <div className="d-block d-lg-flex border-top-0 border-start-0 border-end-0 border border-warning border-1 py-2 justify-content-evenly align-items-center">
                        <img src="./event1.jpg" width="150px" className="img-fluid" alt="" />
                        <div>
                            <li><span className="fw-bold text-info">Date: </span>September 18, 2021</li>
                            <li><span className="fw-bold text-info">Time: </span>10:30pm</li>
                            <li><span className="fw-bold text-info">Venue: </span>Enlighten Institute</li>
                            <li><span className="fw-bold text-info">Address: </span>Shahbag, Dhaka</li>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <h4 className="my-3">Leaders in Learning</h4>
                    <div className="d-block d-lg-flex border-top-0 border-start-0 border-end-0 border border-warning border-1 py-2 justify-content-evenly align-items-center">
                        <img src="./event2.jpg" width="150px" className="img-fluid" alt="" />
                        <div>
                            <li><span className="fw-bold text-info">Date: </span>October 2, 2021</li>
                            <li><span className="fw-bold text-info">Time: </span>9:30pm</li>
                            <li><span className="fw-bold text-info">Venue: </span>Enlighten Institute</li>
                            <li><span className="fw-bold text-info">Address: </span>Shahbag, Dhaka</li>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <h4 className="my-3">Education for Service</h4>
                    <div className="d-block d-lg-flex border-top-0 border-start-0 border-end-0 border border-warning border-1 py-2 justify-content-evenly align-items-center">
                        <img src="./event3.jpg" width="150px" className="img-fluid" alt="" />
                        <div>
                            <li><span className="fw-bold text-info">Date: </span>November 22, 2021</li>
                            <li><span className="fw-bold text-info">Time: </span>10:30pm</li>
                            <li><span className="fw-bold text-info">Venue: </span>Enlighten Institute</li>
                            <li><span className="fw-bold text-info">Address: </span>Shahbag, Dhaka</li>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <h4 className="my-3">Students Are Achievers</h4>
                    <div className="d-block d-lg-flex border-top-0 border-start-0 border-end-0 border border-warning border-1 py-2 justify-content-evenly align-items-center">
                        <img src="./event4.jpg" width="150px" className="img-fluid" alt="" />
                        <div>
                            <li><span className="fw-bold text-info">Date: </span>December 30, 2021</li>
                            <li><span className="fw-bold text-info">Time: </span>8:30pm</li>
                            <li><span className="fw-bold text-info">Venue: </span>Enlighten Institute</li>
                            <li><span className="fw-bold text-info">Address: </span>Shahbag, Dhaka</li>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <h4 className="my-3">Creating Future Together</h4>
                    <div className="d-block d-lg-flex border-top-0 border-start-0 border-end-0 border border-warning border-1 py-2 justify-content-evenly align-items-center">
                        <img src="./event5.jpg" width="150px" className="img-fluid" alt="" />
                        <div>
                            <li><span className="fw-bold text-info">Date: </span>January 6, 2021</li>
                            <li><span className="fw-bold text-info">Time: </span>2:30pm</li>
                            <li><span className="fw-bold text-info">Venue: </span>Enlighten Institute</li>
                            <li><span className="fw-bold text-info">Address: </span>Shahbag, Dhaka</li>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <h4 className="my-3">Leaders in Learning</h4>
                    <div className="d-block d-lg-flex border-top-0 border-start-0 border-end-0 border border-warning border-1 py-2 justify-content-evenly align-items-center">
                        <img src="./event3.jpg" width="150px" className="img-fluid" alt="" />
                        <div>
                            <li><span className="fw-bold text-info">Date: </span>February 12, 2021</li>
                            <li><span className="fw-bold text-info">Time: </span>7:30pm</li>
                            <li><span className="fw-bold text-info">Venue: </span>Enlighten Institute</li>
                            <li><span className="fw-bold text-info">Address: </span>Shahbag, Dhaka</li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;