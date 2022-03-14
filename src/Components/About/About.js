import React from 'react';
import Glance from '../Glance/Glance';
import We from '../We/We';
import "./About.css";


const About = () => {
    return (
        <div className="about">
            <h1>About YouHeal</h1>
            <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <We></We>
                    </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <Glance></Glance>
                </div>
            </div>
        </div>
    );
};

export default About;