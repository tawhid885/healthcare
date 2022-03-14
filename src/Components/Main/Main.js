import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Main.css";
import MainNav from "./../MainNav/MainNav";
// import useDoctors from '../../Hooks/useDoctors';

const Main = () => {
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        const url = `./data.json`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setDoctors(data))
    },[]);

    // const {doctors, doctorsData} = useDoctors();
    // doctorsData();

    const handleDetail =(id)=>{
        const url = `/details/${id}`;
        navigate(url);
    }
    
    return (
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
        <p className="call" onClick={()=>handleDetail(key)}><span style={{marginRight:"4px"}}><i className="fas fa-phone-alt"></i></span>Make a phone call</p>
    </div>
</div>
                        </div>
                        
                    )
                })
            }
        </div>
        </div>
    );
};

export default Main;