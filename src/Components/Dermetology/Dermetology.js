import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Choose from '../Choose/Choose';
import MainNav from '../MainNav/MainNav';
import Sidebar from '../Sidebar/Sidebar';
import "./Dermetology.css";

const Dermetology = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        const url = `./dermetology.json`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setDoctors(data))
    },[]);
    return (
        <div>
            <Banner></Banner>
            <div className="dermetology">
            <div className='sidebar'>
                <Sidebar></Sidebar>
            </div>

            <div className="dermetology-last">
        <div className="my-main">
            <MainNav></MainNav>
            <div className="row gx-0">
            {
                doctors.map(doctor =>{
                    const {key, name, address, type, image} = doctor;
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="my-card" style={{width: "20rem"}}>
  <div className="img-container">
  <img src={image} class="" alt="doctor"/>
  </div>
  <h5 className="title">{name}</h5>
    <p class="address">{address}</p>
    <h4 href="#" class="type">{type}</h4>
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

export default Dermetology;