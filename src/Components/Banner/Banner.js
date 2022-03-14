import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner">
            <div>
                <div className='banner-info'>
                    <h1>Your health is always our concern</h1>
                </div>
                <div className="banner-search">
                <input type="text" className='banner-input'  placeholder='Search here .....' />
            <button className='btn my-banner-btn'>Search</button>
                </div>
            
            </div>
        </div>
        </div>
    );
};

export default Banner;