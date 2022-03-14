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
        <div>

            {/* start here ------------------------ */}

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand">YOUHEAL</NavLink>


    {/* toggle button  */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/about" className="nav-link active">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Doctors</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/ambulance" className="nav-link">Ambulance</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
        {!user?.email&&<li className="nav-item">
          <NavLink to="/login" className="nav-link">Login</NavLink>
        </li>}
        {!user?.email && <li className="nav-item">
          <NavLink to="/register" className="nav-link">Register</NavLink>
        </li>}
        {user?.email && <li className="nav-item"><span style={{margin:"5px",color:"white",}}>{user.displayName}</span></li>}
                    {user?.email && <li className="logout" onClick={handleLogOut}>Logout</li>}
      </ul>

    </div>
  </div>
</nav>

            {/* end here ------------------------------ */}
            
        </div>
    );
};

export default Header;