import React, { useState } from 'react';
import axios from 'axios';
import "../css/forgotPassword.css"
 import forgotimg from "../Assets/forgotpassword.png"
import { useNavigate } from "react-router-dom";
// import back from "../Assets/back.png"
import Navbar from './Navbar';
function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordFormatError, setPasswordFormatError] = useState(false);
  const [registrationKey, setRegistrationKey] = useState(null);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://192.168.1.248:8080/api/v1/request', { email });
      const data = response.data;
      if (data.registrationKey) {
        setRegistrationKey(data.registrationKey);
        setShowPasswordForm(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
    setPasswordMatchError(false);
    setPasswordFormatError(false);
  };
  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
    setPasswordMatchError(false);
  };
  const handleNewPasswordSubmit = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setPasswordMatchError(true);
      return;
    }
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;
    if (!passwordRegex.test(newPassword)) {
      setPasswordFormatError(true);
      return;
    }
    try {
      await axios.post('http://192.168.1.248:8080/api/v1/reset', {
        registrationKey,
        newPassword
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
    <Navbar />
    <div className='Forgotpassword-container'>
      {!showPasswordForm ? (
        <>
        <form className='forgotpassword' onSubmit={handleEmailSubmit}>
        <p className="back">
 <a   href="/login">
{/* <img border="0" alt="Back" src={back} width="100" height="100"/> */}
</a>
</p>
          <b>Forgot password?</b>
        <img src={forgotimg} alt='...' />
          <label className='Enterpasswordlabel' htmlFor="email">Enter your email address</label>
          <input type="email" id="emailr" value={email} onChange={handleEmailChange} />
          <button type="submit">Change Password</button>
        </form>
        </>
      ) : (
        <form className="forgotpassword" onSubmit={handleNewPasswordSubmit}>
          {/* <img src={forgotimg} alt='...' /> */}
          <label htmlFor="newPassword">New Password:</label>
          <input type="password" id="newPassword" value={newPassword} onChange={handleNewPasswordChange} />
          <label htmlFor="confirmNewPassword">Confirm New Password:</label>
          <input type="password" id="confirmNewPassword" value={confirmNewPassword} onChange={handleConfirmNewPasswordChange} />
          {passwordMatchError && <p>Passwords do not match.</p>}
          {passwordFormatError && <p>Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long.</p>}
          <button type="submit">Confirm</button>
        </form>
      )}
    </div>
    </>
  );
}
export default ForgotPassword;