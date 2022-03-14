import React from 'react';
import "./Glance.css";
import g1 from "./../../img/g-1.jpg";
import g2 from "./../../img/g-2.jpg";
import g3 from "./../../img/g-3.jpg";

const Glance = () => {
    return (
        <div className="glance-section">
                <h2 style={{color: "#896436"}}>YouHeal at a Glance</h2>
                <p>
                A part of the U.S. Department of Health and Human Services, NIH is the largest biomedical research agency in the world.
                </p>
                <div className="row">
                <div className="g-full">
                    <div className="g-image">
                        <img src={g1} alt="" />
                    </div>
                    <div className="g-detail">
                        <h5>Mission and goal</h5>
                    </div>
                </div>
                <div className="g-full">
                    <div className="g-image">
                        <img src={g2} alt="" />
                    </div>
                    <div className="g-detail">
                        <h5>Acting Directior: Md. Shishir Ahmed, ph.D.</h5>
                    </div>
                </div>
                <div className="g-full">
                    <div className="g-image">
                        <img src={g3} alt="" />
                    </div>
                    <div className="g-detail">
                        <h5>Headquarters: Dhaka, Bangladesh</h5>
                    </div>
                </div>
                </div>
            </div>
    );
};

export default Glance;