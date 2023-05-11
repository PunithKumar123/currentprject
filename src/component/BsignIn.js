import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/validation";
import plantIcon from "../Assets/plant.png";

import { useNavigate } from "react-router-dom";
import axios from "./axios";
// import { setKey } from "../redux/actions/auth";
import "../css/Signup.css";
import Sso from "./Sso";
import { signingup, baseUrl } from "../Api.js";

import { useState } from "react";
import photo from "../Assets/Feeds.png";

const initialValues = {
  role:"",
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};

function Signup() {
  const navigate = useNavigate();
  const [role, setrole] = useState(0);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);
  const [backendError, setBackendError] = useState("");

  const handleChanged = (e) => {
    const target = e.target;
    if (target.checked) {
      setrole((e.target.value));
    }
  };
  
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log({
        role: role,
        name: values.name,
        email: values.email,
        password: values.password,
      });
     

      try {
        axios
          .post(baseUrl.baseUrl + signingup.signup, {
            role: role,
            name: values.name,
            email: values.email,
            password: values.password,
          })

          .then((response) => {
            const { registrationKey } = response.data;
            localStorage.setItem("registrationKey", registrationKey);
            localStorage.getItem("registrationKey");

            

            const { token } = response.data;
            localStorage.setItem("token", token);
            localStorage.getItem("token");
            // dispatch={setKey}
            console.log(registrationKey);
            console.log("Hello");
            setIsSignupSuccess(true);
            localStorage.setItem('role', role);
            localStorage.setItem("email",values.email);
            localStorage.setItem("name",values.name);
            navigate("/Otp", { state: { role: role, registrationKey } });
          });
      } catch (error) {
        console.log(error);
        // if (error.result && error.result.data && error.result.data.message) {
        //   setBackendError(error.result.data.message);
        // } else {
        //   setBackendError("An error occurred while submitting the form.");
        // }
      }
    },
  });

  // const dispatch=useDispatch();
  // const navigate=useNavigate();
  // const navigateToOtp=()=>{
  //   navigate('/Otp');
  // }
  return (
    <div className="main-signup">
      <div className="left-container-signup">
        <img src={plantIcon}></img>
      <p className="left-container-signup-p">Start your journey with Nine Seeders Today!</p>
      </div>
      <div className="container-signup">
        {/* <h2 className="title-signup">Create Account</h2> */}
        <div className="container-left">
          <img src={photo} alt="Unable to load"></img>
        </div>
        <div className="app-wrapper-signup">
          <h2 className="title-signup">Create Account</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div onClick={handleChanged}>
              <input
                type="radio"
                className="role"
                id="1"
                value="1"
                checked={role === "1"}
                onChange={handleChanged}
              />
              Investor
              <input
                type="radio"
                className="role"
                id="2"
                value="2"
                checked={role === "2"}
                onChange={handleChanged}
              />
              StartUp
            </div>
            <div className="input-block-signup">
              <label className="label-signup">Name</label>
              <input
                className="txtForm-signup"
                type="name"
                name="name"
                id="name"
                placeholder="Name"
                autoComplete="off"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="form-error">{errors.name}</p>
              ) : null}
            </div>
            <div className="input-block-signup">
              <label className="label-signup">Email</label>
              <input
                className="txtForm-signup"
                type="email"
                name="email"
                id="emails"
                placeholder="Email"
                autoComplete="off"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </div>
            <div className="input-block-signup">
              <label className="label-signup">Password</label>
              <input
                className="txtForm-signup"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>
            <div className="input-block-signup">
              <label className="label-signup">Confirm Password</label>
              <input
                className="txtForm-signup"
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Confirm Password"
                autoComplete="off"
                value={values.confirmpassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
           
            <div className="bottom-signup-btn">
              <button className="submit-button-signup" type="submit" onClick={handleSubmit}>
                Signup
              </button>
            </div>
            <div className="bottom-signup">
            {backendError && <p className="form-error">{backendError}</p>}
            <p className="Or-sg">or</p>
            <div className="Sso-signup">
              {/* <Sso /> */}
            </div>
            <div className="Para">
              <p className="anchor-tag">
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="side-container">
        <p></p>
      </div> */}
    </div>
  );
}
export default Signup;