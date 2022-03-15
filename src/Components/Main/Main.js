import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Main.css";
import MainNav from "./../MainNav/MainNav";


const Main = () => {
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        const url = `./data.json`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setDoctors(data))
    },[]);


    const handleDetail =(id)=>{
        const url = `/details/${id}`;
        navigate(url);
    }
    
    return (
        <div className="my-main">
            <div className="main-nav">
                <MainNav></MainNav>
            </div>
            <div className="row gx-0">
            {
                doctors.map(doctor =>{
                    const {key, name, address, type, image} = doctor;
                    return (
                        <div key={key} className="col-lg-4 col-md-12 col-sm-12">
                            <div className="my-card" >
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