import React, { useState } from "react";
import "/home/nineleaps/project1/src/css/personalinfo.css"
import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
function Entreprenur({ formData, setFormData }){
  const emaildata=localStorage.getItem("email");
  const namedata=localStorage.getItem("name");
  return (
    <>
      <div>
        <form action="" >
          <div>
            <label htmlFor="profileImage">Photo</label>
            <br></br>
            <input
              type="file"
              autoComplete="off"
              value={formData.profileImage}
              onChange={
                (event)=>setFormData({...formData, profileImage:event.target.value})
            }
              name="profileImage"
              id="profileImage"
              className="txtForm"
            />
          </div>
          <div className="pi-row1">
          <div id="fname">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              autoComplete="off"
             value={namedata}
             onChange={
              (event)=>setFormData({...formData, name:event.target.value})
          }
          readOnly
              name="name"
              className="txtForm"
            />
          </div>
          <div id="email-pi">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              autoComplete="off"
              value={emaildata}
              onChange={
                (event)=>setFormData({...formData, email:event.target.value})
            }
            readOnly
              name="email"
              className="txtForm"
            />
          </div>
          </div>
          <div  id="phone-pi">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              autoComplete="off"
              minLength="10"
              maxLength="10"
              value={formData.phone}
              onChange={(event)=>setFormData({...formData, phone:event.target.value})}
              name="phone"
              className="txtForm"
            />
          </div>
          <div className="pi-row3">
          <div id="city-pi">
            <label htmlFor="location">Location</label>
            <input
              type="text-6"
              autoComplete="off"
              value={formData.city}
              onChange={(event)=>setFormData({...formData, city:event.target.value})}
              name="city"
              placeholder="city"
              className="txtForm"
            />
            </div>
            <div id="state-pi">
            <input
              type="text-6"
              autoComplete="off"
              value={formData.state}
              onChange={(event)=>setFormData({...formData, state:event.target.value})}
              name="state"
              placeholder="state"
              className="txtForm"
            />
            </div>
            </div>
            <div id="country-pi">
            <input
              type="text"
              autoComplete="off"
              value={formData.country}
              onChange={(event)=>setFormData({...formData, country:event.target.value})}
              name="country"
              placeholder="country"
              className="txtForm"
            />
            </div>
    </form>
  </div>
</>
);
};
export default Entreprenur;