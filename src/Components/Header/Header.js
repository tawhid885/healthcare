import React from 'react';
import "./Header.css";
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from "./../../Hooks/useAuth";


const Header = () => {
    const navigate = useNavigate();
    const {user, logOut} = useAuth();
    const handleLogOut=()=>{
        logOut();
        localStorage.clear();
        navigate("/login");
    }
    return (
        <div className='header-container'>
            <div className="header">
            {/* logo goes here  */}
            <div className="logo-section">
                <NavLink to="/home" className="text-doco">
                <h2>YouHeal</h2>
                </NavLink>
            </div>
            {/* nav section goes here  */}
            <nav className="nav-section">
                <ul>
                    <li>
                        <NavLink className={()=>"link"} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={()=>"link"} to="/">Doctors</NavLink>
                    </li>
                    <li>
                        <NavLink className={()=>"link"} to="/ambulance">Ambulance</NavLink>
                    </li>
                    {!user?.email&&<li>
                        <NavLink className={()=>"link"} to="/login">Login</NavLink>
                    </li>}
                    {!user?.email&&<li>
                        <NavLink className={()=>"signup"} to="/register">SignUp</NavLink>
                    </li>}
                    
                    {user?.email && <li><span style={{marginLeft:"5px", marginRight:"5px", color:"white"}}>{user.displayName}</span></li>}
                    {user?.email && <li className="logout" onClick={handleLogOut}>Logout</li>}
                </ul>
            </nav>
        </div>
        </div>
    );
};

export default Header;