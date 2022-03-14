import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Main from '../Main/Main';
// import Nurology from '../Nurology/Nurology';
// import { useNavigate, useParams } from 'react-router-dom';
// import Menutitle from '../Menutitle/Menutitle';
import "./Detail.css";

const Detail = () => {
    const {id} = useParams();
    // const navigate = useNavigate();
    const [doctor, setDoctor] = useState({});
    useEffect(()=>{
        const api_url = `/${id}.json`;
        fetch(api_url)
        .then(res => res.json())
        .then(data => setDoctor(data))
    }, [id]);

    // const handleCartButton=()=>{
    //     navigate("/cart");
    // }
    return (
        <div>
            {/* <Menutitle></Menutitle> */}
            <div className='detail-menu'>
            <div className='details'>
                <h2>{doctor.name}</h2>
                <p>01796936897</p>
                <div className='price-quantity'>
                    <h4>{doctor.address}</h4>
                </div>
                <button className='btn cart-button' >Book for You</button>
            </div>
            <div className="menu-image-container">
                <img src={doctor.image} alt="doctor" />
            </div>
        </div>
        </div>
    );
};

export default Detail;