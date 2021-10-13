import React from 'react';

const NotFound = () => {
    const statsStyle = {
        backgroundImage: 'url(https://iacademy.qodeinteractive.com/wp-content/uploads/2017/05/h12-parallax-1.jpg)',
        backgroundColor: '#fff',
        height: '300px',
        color: 'white',
    }

    return (
        <div className="shadow py-4" style={statsStyle}>
            <div className="my-4">
                <h2 className="my-3">404</h2>
                <div className="d-flex justify-content-evenly align-items-center">
                    <h1 className="text-warning">Page Not Found!</h1>
                </div>
            </div>
        </div >
    );
};

export default NotFound;