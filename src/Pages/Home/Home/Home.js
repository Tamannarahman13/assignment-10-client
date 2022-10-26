import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://o7services.com/wp-content/uploads/2020/12/Basic-Computer-Fundamentals-1200x600.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold ">Get Ready for a Dream Career!!</h1>
                        <p className="mb-5">This course introduces computer concepts, including fundamental functions and operations of the computer. Topics include identification of hardware components, basic computer operations, security issues, and use of software applications.</p>
                        <button className="btn btn-success font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;