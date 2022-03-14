import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import "./Home.css";
// import Header from "./../Header/Header";
import Banner from "./../Banner/Banner";
import Choose from '../Choose/Choose';
import Care from '../Care/Care';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <div className='home'>
                <div className='sidebar'>
                    <Sidebar></Sidebar>
                </div>

                <div className="main">
                    <Main></Main>
                    {/* <Choose></Choose> */}
                </div>
                

            
            </div>
            <div className="care">
                <Care></Care>
            </div>
            <div className="Choose">
                <Choose></Choose>
            </div>
        </div>
    );
};

export default Home;