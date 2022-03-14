import React from 'react';
import { Link } from 'react-router-dom';
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <div className="row">
                <div className="col-lg-3 col-sm-12 col-md-12">
                    <h4>About YouHeal</h4>
                    <ul className='side-link'>
                        <li><Link to="/www.google.com">Jobs at YouHeal</Link></li>
                        <li><Link to="/www.google.com">Frequently Asked Questions</Link></li>
                        <li><Link to="/www.google.com">Contact Us</Link></li>
                        <li><Link to="/www.google.com">Who We Are</Link></li>
                        <li><Link to="/www.google.com">What We Do</Link></li>
                        <li><Link to="/www.google.com">Visitor Information</Link></li>
                    </ul>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-12">
                    <h1 style={{color: "#896436"}}>Contact Us</h1>
                    <p>The information and email services on this Web site cannot provide personalized medical advice about conditions or treatments. The resources on this site should not be used as a substitute for professional medical care. Contact your medical care providers for answers to personal health questions. We also do not rate or provide referrals to physicians or health care facilities. Such activities are usually handled by state or local governments.</p>
                    <ul className='ex-link'>
                        <li><Link to="/www.google.com">Frequently asked questions</Link></li>
                        <li><Link to="/www.google.com">General questions: Ask YouHeal</Link></li>
                        <li><Link to="/www.google.com">Research grants and funding questions</Link></li>
                        <li><Link to="/www.google.com">Contáctenos en Español</Link></li>
                    </ul>
                    <h4 style={{color: "#896436"}}>Mail & Phone</h4>
                    <address>
                    YouHeal HealthCare Limited
                    (YHL)
                    <br />
                    9000 Rockville Pike
                    <br />
                    Dhaka, 0000
                    000-000-0000
                    <br />
                    TTY 000-000-0000 
                    </address>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-12">
                    <h4 style={{color: "#896436"}}>Other contacts</h4>
                    <ul className='side-link'>
                        <li><Link to="/www.google.com">Tribal Health Research Office (THRO)</Link></li>
                        <li><Link to="/www.google.com">Science Policy Questions</Link></li>
                        <li><Link to="/www.google.com">Website Questions</Link></li>
                        <li><Link to="/www.google.com">Health Info Lines</Link></li>
                        <li><Link to="/www.google.com">Media Contacts</Link></li>
                        <li><Link to="/www.google.com">FOIA requests</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;