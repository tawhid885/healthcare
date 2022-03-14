import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Choose from '../Choose/Choose';
import MainNav from '../MainNav/MainNav';
import Sidebar from '../Sidebar/Sidebar';
import "./Ambulance.css";

const Ambulance = () => {
    const [ambulance, setAmbulance] = useState([]);
    useEffect(()=>{
        const url = `./ambulance.json`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setAmbulance(data))
    },[]);
    return (
        <div>
            <Banner></Banner>
            <div className="ambulance">
            <div className='sidebar'>
                <Sidebar></Sidebar>
            </div>

            <div className="ambulance-last">
        <div className="my-main">
            {/* <MainNav></MainNav> */}
            <div className="row gx-0">
            {
                ambulance.map(amb =>{
                    const {key, country, charge, mobile, image} = amb;
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="my-card" style={{width: "20rem"}}>
  <div className="img-container">
  <img src={image} class="" alt="doctor"/>
  </div>
  <h5 className="title">{country}</h5>
    <p class="address">$ {charge}</p>
    <h4 href="#" class="type">{mobile}</h4>
    <div className="last-section">
        <p className='avail'>Availability</p>
        <p className="call"><span style={{marginRight:"4px"}}><i className="fas fa-phone-alt"></i></span>Make a phone call</p>
    </div>
</div>
                        </div>
                        
                    )
                })
            }
        </div>
        </div>
            </div>
            
        </div>
        <Care></Care>
        <Choose></Choose>
        </div>
    );
};

export default Ambulance;