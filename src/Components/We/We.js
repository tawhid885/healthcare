import React from 'react';
import "./We.css";
import w1 from "./../../img/w-1.jpg";
import w2 from "./../../img/w-2.jpg";
import w3 from "./../../img/w-3.jpg";
import w4 from "./../../img/w-4.jpg";
import w5 from "./../../img/w-5.jpg";
import w6 from "./../../img/w-6.jpg";

const We = () => {
    return (
        <div className="we">
            <div className="video-section">
                <iframe width="560" className="w-video" height="315" src="https://www.youtube.com/embed/ZH93ufLvYF8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>Learn about our mission, our people, the patients who partner with us, and what drives us to improve health and fight disease. This is our story.</p>
            </div>
            <div className="we-main">
                <div className="row gx-0">
                    <div className="col-lg-6 col-sm-12 col-md-12">
                        <div className="we-info">
                            <div className="w-info-image">
                                <img src={w1} alt="" />
                            </div>
                            <div className="w-detail">
                            <h2>Who We Are</h2>
                            <p>The YouHeal Director, organization, and staff directory.</p>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-12">
                        <div className="we-info">
                            <div className="w-info-image">
                                <img src={w2} alt="" /></div>
                                <div className="w-detail">
                            <h2>What do We do</h2>
                            <p>How YouHeal works to prevent disease and improve health.</p>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-12">
                        <div className="we-info">
                            <div className="w-info-image">
                                <img src={w3} alt="" />
                            </div>
                            <div className="w-detail">
                            <h2>Jobs at YouHeal</h2>
                            <p>Search for jobs, including scientific, administrative, executive careers.</p>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-12">
                        <div className="we-info">
                            <div className="w-info-image">
                                <img src={w4} alt="" />
                            </div>
                            <div className="w-detail">
                                <h2>Visitor Information</h2>
                                <p>Directions, maps, parking information, and more.</p>
                            </div>
                            </div>
                            
                        </div>
                    <div className="col-lg-6 col-sm-12 col-md-12">
                        <div className="we-info">
                            <div className="w-info-image">
                                <img src={w5} alt="" />
                            </div>
                            <div className="w-detail">
                            <h2>Frequently Asked Questions</h2>
                            <p>Answers to frequently asked questions about the YouHeal.</p>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-12">
                        <div className="we-info">
                            <div className="w-info-image">
                                <img src={w6} alt="" />
                            </div>
                            <div className="w-detail">
                            <h2>Contact Us</h2>
                            <p>How to contact NIH by email, phone, or mail.</p>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default We;