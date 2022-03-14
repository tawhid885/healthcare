import React from 'react';
import "./Care.css";
import care1 from "./../../img/care-1.png";
import care2 from "./../../img/care-2.png";
import care3 from "./../../img/care-3.png";

const Care = () => {
    return (
        <div className="care-container">
            <h1 style={{color: "blue"}}>Care when you need it, where you need it.</h1>
            <div className="care">
            <div className="care-item">
                <div className="care-image">
                    <img src={care1} alt="" />
                </div>
                <div className="care-detail">
                    <h4>Vaccine Information</h4>
                    <p>
                    Find the latest information about the COVID-19 vaccine, including who Rush is currently distributing the vaccine to.
                    </p>
                    
                    </div>
                    <button className="btn care-btn">Covid 19 Vaccine Updates</button>
            </div>
            <div className="care-item">
                <div className="care-image">
                    <img src={care2} alt="" />
                </div>
                <div className="care-detail">
                    <h4>Same-day Appointments</h4>
                    <p>
                    For primary care & selected specialties, see provider schedules & make your own appointment online, even if you’re new to Rush.
                    </p>
                    
                    </div>
                    <button className="btn care-btn">Schedule Online</button>
            </div>
            <div className="care-item">
                <div className="care-image">
                    <img src={care3} alt="" />
                </div>
                <div className="care-detail">
                    <h4>On Demand</h4>
                    <p>
                    Get quick care without an appointment for common conditions and everyday health concerns with Rush On Demand. We have many convenient ways to see a provider, including online virtual visits.
                    </p>
                    
                    </div>
                    <button className="btn care-btn">Get Care Today</button>
            </div>
        </div>
        </div>
    );
};

export default Care;