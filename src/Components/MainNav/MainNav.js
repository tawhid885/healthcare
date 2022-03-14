import React from 'react';
import {NavLink, useLocation, useNavigate } from 'react-router-dom';
import "./MainNav.css";

const MainNav = () => {
    const location= useLocation();
    const {pathname} = location;

    const splitPathname = pathname.split("/");
 
    return (
        <div className="main-nav">
                <div>
                <h2 className="doctors">Doctors</h2>
                </div>
                <ul className="main-ul">
                    <li className={splitPathname[1] ==="home"|| "" ? "activated":"n-active"}>
                        <NavLink to="/home" className={({isActive})=>isActive&&"white-color"}>All</NavLink>
                    </li>
                    
                    <li className={splitPathname[1] ==="nurology" ? "activated":"n-active"}>
                    <NavLink to="/nurology" className={({isActive})=>isActive&&"white-color"}>Nurology</NavLink>
                    </li>

                    <li className={splitPathname[1] ==="dermetology" ? "activated":"n-active"}>
                    <NavLink to="/dermetology" className={({isActive})=>isActive&&"white-color"}>Dermetology</NavLink>
                    </li>
                    <li className={splitPathname[1] ==="cardiology" ? "activated":"n-active"}>
                    <NavLink to="/cardiology" className={({isActive})=>isActive&&"white-color"}>Cardiology</NavLink>
                    </li>
                    <li  className={splitPathname[1] ==="gynocology" ? "activated":"n-active"}>
                    <NavLink to="/gynocology" className={({isActive})=>isActive&&"white-color"}>Gyconology</NavLink>
                    </li>
                    <li className={splitPathname[1] ==="conology" ? "activated":"n-active"}>
                    <NavLink to="/conology" className={({isActive})=>isActive&&"white-color"}>Concology</NavLink>
                    </li>
                    
                </ul>
            
            </div>
    );
};

export default MainNav;