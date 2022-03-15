import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import "./Login.css";
import useAuth from "./../../Hooks/useAuth";
import logo from "./../../img/logo2.jpg";



const Login = () => {
    const navigate = useNavigate();

    const {setUser, setEmail, setPassword, error, setError, signInWithEmail, signInWithGoogle} = useAuth();


    const location = useLocation();
    const redirect_uri = location.state?.from || "/home";

    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result =>{
            navigate(redirect_uri);
            setError("");
        })
        .catch(error=>{
            setError(error.message);
        })
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        signInWithEmail()
        .then(result=>{
            const user = result.user;

            // local storage control 
            const info = {name: user.displayName, uid:user.uid}
            localStorage.setItem('user',JSON.stringify(info));

            setUser(user);
            setError("");
            navigate(redirect_uri);
        })
        .catch(error=>{
            setError(error.message);
        })
    };

    return (
        <div className="register">
            <div className="form-container">
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>
                <div className="field-container">
                    <form className="my-form" onSubmit={onSubmit}>

                        <input type="email" className='form-field' placeholder='Email' onBlur={handleEmail} />

                        <input type="password" className='form-field' placeholder='Password' onBlur={handlePassword}/>
    
                        <p style={{color:"red"}}>{error}</p>
                        <input type="submit" value="Login" className='btn my-btn' />
                    </form>
                    <br />
                    <p>Don't have an account? <NavLink to="/register" className={()=>"pointer"}>Signup</NavLink></p>
                    <p style={{cursor:"pointer"}} onClick={handleGoogleSignIn}>Sign In with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;