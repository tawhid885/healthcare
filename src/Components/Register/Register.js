import React, {useState} from 'react';
import "./Register.css";
import logo from "./../../img/logo2.jpg";
import {NavLink, useNavigate} from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";



const Register = () => {
    const [cp, setCP] = useState("");
    const navigate = useNavigate();


    const {password, setName, setEmail, setPassword, error, setError, createNewUser, updateProfileInfo} = useAuth();

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


    const onSubmit = (e) => {
        e.preventDefault();
        console.log("triggered!");
        if(password !== cp){
            setError("password must be same");
            return;
        }
        else{
            createNewUser()
            .then(result=>{
                console.log("user created, ", result.user);
                updateProfileInfo();
                navigate("/login");
            })
            .catch(error=>{
                console.log(error.message);
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
                </div>
            </div>
        </div>
    );
};

export default Register;