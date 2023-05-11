import React, { useState } from "react";
import axios from "axios";
import "/home/nineleaps/project1/src/css/investmentwindow.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const InvestmentForm = () => {
  const [formData, setFormData] = useState({
    windowName: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    description: "",
    sector: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  // const handleCreateInvestmentWindow = () => {
  //   axios
  //     .post("http://192.168.1.128:8080/api/v1/createinvestment", formData)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const navigate=useNavigate()
  function gotoselect(){
    navigate("/adminsearchbar", {state:{  formData}})
  }

  return (
    <>
    <Navbar />
    <div className="main-window">
      {/* <img src='https://cdn.dribbble.com/users/2978235/screenshots/18246286/media/775e25386c6965f8306fa8edf6102764.jpg?compress=1&resize=400x300'/> */}
      <div className="investment-form">
        <div className="Windowname">
          <label htmlFor="windowname">Window Name</label>
          <input
            type="text"
            id="windowName"
            name="windowName"
            value={formData.windowName}
            onChange={handleChange}
          />
        </div>
        <div className="date">
          <div className="startdate">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>
          <div className="enddate">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="time">
          <div className="starttime">
            <label htmlFor="startTime">Start Time</label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
            />
          </div>
          <div className="endtime">
            <label htmlFor="endTime">End Time</label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <label htmlFor="sector">Sector</label>
        <input
          type="text"
          id="sector"
          name="sector"
          value={formData.sector}
          onChange={handleChange}
        />
<div className="InvestmentButton">
        <button onClick={gotoselect}>select Startups</button>

        {/* <button onClick={handleCreateInvestmentWindow}>
          Create Investment Window
        </button> */}
        </div>
      </div>
    </div>
    
    <Footer />
    </>
   
  );
  
};


export default InvestmentForm;