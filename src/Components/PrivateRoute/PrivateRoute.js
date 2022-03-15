import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user} = useAuth();
    const location = useLocation();
    const user_info = JSON.parse(localStorage.getItem("user"));
    const user_information = user_info?.uid || "";
    return user_information || user.displayName? children: <Navigate to="/login" state={{from:location.pathname
    }}/>
};

export default PrivateRoute;