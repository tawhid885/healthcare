import React from 'react';
import "./Choose.css";
import c1 from "./../../img/c-1.png";
import c2 from "./../../img/c-2.jpg";
import c3 from "./../../img/c-3.jpg";

const Choose = () => {
    return (
        <div className="choose-container">
            <h1 className='choose-color'>Our Stories</h1>
            <div className='choose'>
            <div className="choose-item">
                <h5 className="choose-color">Brain Health and Conditions</h5>
                <div className="image-section">
                    <img src={c1} alt="" className="choose-image"/>
                </div>
                <div className="choose-detail">
                    <h5 className="choose-color">Managing Multiple Sclerosis</h5>
                    <p>Latest treatment options make it possible to maintain an active</p>
                </div>
            </div>
            <div className="choose-item">
                <h5 className="choose-color">HEART HEALTH</h5>
                <div className="image-section">
                    <img src={c2} alt="" className="choose-image"/>
                </div>
                <div className="choose-detail">
                    <h5 className="choose-color">Connor's Story</h5>
                    <p>When Connor had a stroke at age 30, RUSH cardiology helped him</p>
                </div>
            </div>
            <div className="choose-item">
                <h5 className="choose-color">HEART HEALTH</h5>
                <div className="image-section">
                    <img src={c3} alt="" className="choose-image"/>
                </div>
                <div className="choose-detail">
                    <h5 className="choose-color">Preventing and Treating Varicose Veins</h5>
                    <p>Basharat Muneer, MD, a cardiologist with Rush Copley</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Choose;