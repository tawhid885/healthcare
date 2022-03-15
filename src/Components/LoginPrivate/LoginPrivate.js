import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const LoginPrivate = ({children}) => {
    const {user} = useAuth();
    return user.email? <Navigate to="/"/> : children;
};

export default LoginPrivate;