import React, { useRef, useState } from 'react';
import post from 'axios';
import Sso from "./Sso";
import plantIcon from "../Assets/plant.png";
import { useDispatch, connect } from 'react-redux';
import "../css/Login.css";
// src/css/Login.css
// import { Login } from '../redux/actions/auth';
import { Navigate, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react';
import axios from 'axios';
import { api, baseUrl } from '../Api.js';


const Ulogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const dispatch=useDispatch();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //  const registrationKey=localStorage.getItem('registrationKey');
    axios.post(baseUrl.baseUrl + api.login, {
      // registrationKey,
      email,
      password,
    })
      .then((response) => {
        // dispatch(setToken(result.data.token));
        const { token, role,  } = response.data;
        localStorage.setItem("token", token);
        localStorage.getItem("token");
        localStorage.setItem("role", role);
        // if(response.data.role===VC){
        //   localStorage.setItem("Vc-Id", VcId);
        // }
        // else{
        //   localStorage.setItem("user-Id", userId );
        // }

        console.log(response);
        navigate('/homePage', { state: { userId: response.data.userId }});

      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className='login-body'>
      <div className="login-left">
        <img src={plantIcon}></img>
      <p>Welcome back NineSeeders!</p>
      </div>
      <div className="Login-main">
        <div className="container-left-login">
          <img src="https://img.freepik.com/premium-photo/aesthetic-home-office-desk-workspace-with-laptop-computer-notebook-tabled-pad-white-background-flat-lay-top-view-blog-website-social-media-concept_408798-9640.jpg?w=360"></img>
        </div>
        <form onSubmit={handleSubmit} className="app-wrapper-login">
          <h1>login</h1>
          <label className="txtForm-login">Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="input-field-login"
            placeholder="Email/Phone"
          />
          <label className="txtForm-login">Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="input-field-login2"
            placeholder="Password"
            
          />
          <a className='forgotpasswordlink' href="/forgotpassword?">Forgot Password?</a>
          <button type="submit" className="submit-button-login" >
            Login
          </button>
          <p className="or">or</p>
          <div className="Sso">
            <Sso /> 
            {/* <p>login with Google</p> */}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Ulogin;