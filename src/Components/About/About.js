import React from 'react';
import Glance from '../Glance/Glance';
import We from '../We/We';
import "./About.css";


const About = () => {
    return (
        <div className="about">
            <h1>About YouHeal</h1>
            <div className="about-container">
                <div className="we-com">
                    <We></We>
                </div>
                <div className="glance-com">
                    <Glance></Glance>
                </div>
            </div>
        </div>
    );
};

export default About;