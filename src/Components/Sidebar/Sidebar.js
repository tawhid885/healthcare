import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
    return (
            <div>
                <div className="s-menu-f">
                    <i class="fas fa-plus-square"></i>
                    <div><NavLink className={({isActive})=>isActive && "active"} to="/">Health Care</NavLink></div>
                </div>
                <div className="s-menu">
                    
                    <i class="fas fa-hospital"></i>
                    <div><NavLink className={({isActive})=>isActive && "active"} to="/about">Hospital Performance</NavLink></div>   
                </div>
                <div className="s-menu">
                    <i class="fas fa-heart"></i>
                    <div><NavLink className={({isActive})=>isActive && "active"} to="/about">Patient History</NavLink></div>
                </div>
                <div className="s-menu">
                    <i class="fas fa-user-md"></i>
                    <div><NavLink className={({isActive})=>isActive && "active"} to="/">Doctors</NavLink></div>
                </div>
                <div className="s-menu">
                    <i class="fas fa-ambulance"></i>
                    <div><NavLink className={({isActive})=>isActive && "active"} to="/ambulance">Ambulance</NavLink></div>
                </div>
                <div className="s-menu">
                    <i class="fas fa-book-medical"></i>
                    <div><NavLink className={({isActive})=>isActive && "active"} to="/about">History of Donation</NavLink></div>
                </div>
            </div>
    );
};

export default Sidebar;