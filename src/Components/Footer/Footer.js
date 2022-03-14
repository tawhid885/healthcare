import React from 'react';
import "./Footer.css";
// import footer_img from "../../img/logo2.png";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='first-part'>
                <div className="footer-img">
                    {/* <img src={footer_img} alt="" /> */}
                    <h2>logo</h2>
                </div>
                <div className='main-li-container'>
                    <div>
                        <li>About YouHeal</li>
                        <li>Read our blog</li>
                        <li>Sign up to get news</li>
                        <li>Add your comments</li>
                    </div>
                    <div>
                        <li>Get help</li>
                        <li>Read FAQs</li>
                        <li>View all cities</li>
                        <li>Near me</li>
                    </div>
                </div>
            </div>
            {/* another part  */}
            <div className='second-part'>
                <div><small>Copyright &#169; 2022 YouHeal healthcare limited</small></div>
                <div className='terms'>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Cost</li>
                </div>
            </div>
        </div>
    );
};

export default Footer;