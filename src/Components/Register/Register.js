import React, {useState} from 'react';
import "./Register.css";
import logo from "./../../img/logo2.jpg";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";



const Register = () => {
    const [cp, setCP] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const redirect_uri = location.state?.from || "/home";


    const {password, setUser, setName, setEmail, setPassword, error, setError, createNewUser, updateProfileInfo, signInWithGoogle} = useAuth();

    const handleName=(e)=>{
        setName(e.target.value);
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }

    const handleConfirmPassword=(e)=>{
        setCP(e.target.value);
    }

    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result =>{
            navigate(redirect_uri);
        })
        .catch(error=>{
            setError(error.message);
        })
    }


    const onSubmit = (e) => {
        e.preventDefault();
        if(password !== cp){
            setError("password must be same");
            return;
        }
        else{
            createNewUser()
            .then(result=>{
                updateProfileInfo()
                .then(() => {
                    setUser({});
                    setError("");
                    navigate("/login");
                    
                  }).catch((error) => {
                    setError(error.message);
                  });
            })
            .catch(error=>{
                setError(error.message);
            })
        }

    };


    return (
        <div className="register">
            <div className="form-container">
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>
                <div className="field-container">
                    <form className="my-form" onSubmit={onSubmit}>
                        
                        <input type="text" placeholder='Name' className='form-field' onBlur={handleName}/>

                        <input type="email" placeholder='email' className='form-field' onBlur={handleEmail}/>

                        <input type="password" placeholder='Password' className='form-field' onBlur={handlePassword}/>

                        <input type="password" placeholder="Confirm password" className='form-field' onBlur={handleConfirmPassword}/>
    
                        {<span className='error-class'>{error}</span>}

                        <input type="submit" value="Signup" className='btn my-btn' />
                    </form>
                    <br />
                    <p>Already have an account? <NavLink to="/login" className={()=>"pointer"}>Login</NavLink></p>
                    <p style={{cursor:"pointer"}} onClick={handleGoogleSignIn}>Sign In with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Register;