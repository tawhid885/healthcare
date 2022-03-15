import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import MainNav from '../MainNav/MainNav';
import Sidebar from '../Sidebar/Sidebar';
import "./Cardiology.css";
import Care from "./../Care/Care";
import Choose from "./../Choose/Choose";
import { useNavigate } from 'react-router-dom';

const Cardiology = () => {
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        const url = `./cardiology.json`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setDoctors(data))
    },[]);

    
    const handleDetail =(id)=>{
        const url = `/details/${id}`;
        navigate(url);
    }
    return (
        <div>
            <Banner></Banner>
            <div className="cardiology">
            <div className='sidebar'>
                <Sidebar></Sidebar>
            </div>

            <div className="cardiology-last">
        <div className="my-main">
            <MainNav></MainNav>
            <div className="row gx-0">
            {
                doctors.map(doctor =>{
                    const {key, name, address, type, image} = doctor;
                    return (
                        <div key={key} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="my-card" style={{width: "20rem"}}>
  <div className="img-container">
  <img src={image} class="" alt="doctor"/>
  </div>
  <h5 className="title">{name}</h5>
    <p class="address">{address}</p>
    <h4 href="#" class="type">{type}</h4>
    <div className="last-section">
        <p className='avail'>Availability</p>
        <p className="call" onClick={()=>handleDetail(key)}><span style={{marginRight:"4px"}}><i className="fas fa-phone-alt"></i></span>Make a phone call</p>
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

export default Cardiology;