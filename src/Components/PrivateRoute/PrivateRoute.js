import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const user_info = JSON.parse(localStorage.getItem("user"));
    const user = user_info?.uid || "";
    return user? children: <Navigate to="/login" state={{from:location.pathname
    }}/>
};

export default PrivateRoute;