import React, { useState } from "react";
import AddRemoveInputField from "../component/AddRemoveInputField.js";
import "../css/registerStartup.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl, registrationent } from "../Api.js";
function Register ({formData,setFormData}){
  return (
    <>
      <div className="startup">
        <form action="">
         <div className="startup-row1">
          <div id="startupName-st">
            <label htmlFor="startUpName">Startup Name</label>
            <input
              type="text"
              autoComplete="off"
              value={formData.startUpName}
              onChange={
                (event)=>setFormData({...formData, startUpName:event.target.value})
              }
              name="startUpName"
              className="txtForm"
            />
          </div>
          <div id="linkedin-st">
            <label htmlFor="linkedin">Linkedin</label>
            <input
              type="url"
              autoComplete="off"
              value={formData.linkedin}
              onChange={
                (event)=>setFormData({...formData, linkedin:event.target.value})
              }
              name="linkedin"
              className="txtForm"
            />
          </div>
          </div>
          <div id="Websiteurl">
            <label htmlFor="Websiteurl">Website url</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={formData.websiteurl}
              onChange={
                (event)=>setFormData({...formData, websiteurl:event.target.value})
              }
              name="Websiteurl"
              className="txtForm"
            />
          </div>
          <div id="startupSummary-st-s">
            <label htmlFor="startupSummary">Summary</label>
            <br></br>
            <input
              type="textArea"
              autoComplete="off"
              value={formData.summary}
              onChange={
                (event)=>setFormData({...formData, summary:event.target.value})
              }
              name="startupSummary"
              id="startupSummary-st"
              className="txtForm"
            />
          </div>
          <div id="bio-st-up">
            <label htmlFor="bio">Bio</label>
            <input
              type="textarea"
              autoComplete="off"
              value={formData.bio}
              onChange={
                (event)=>setFormData({...formData, bio:event.target.value})
              }
              name="bio"
              id="bio-st"
              className="txtForm"
            />
          </div>
          <div className="startup-row5">
          <div id="currentValuation">
            <label htmlFor="currentValuation">Current Valuation</label>
            <input
              type="textarea"
              autoComplete="off"
              value={formData.currentValuation}
              onChange={(event)=>setFormData({...formData, currentValuation:event.target.value})}
              name="currentValuation"
              className="txtForm"
            />
          </div>
          <div id="seriesOfFunding">
            <label htmlFor="seriesOfFunding">Series Of Funding</label>
            <input
              type="textarea"
              autoComplete="off"
              value={formData.fundingType}
              onChange={(event)=>setFormData({...formData, fundingType:event.target.value})}
              name="seriesOfFunding"
              className="txtForm"
            />
          </div>
          </div>
          <div id="pitchDeck">
            <label htmlFor="pitchDeck">Pitch Deck</label>
            <input
              type="textarea"
              autoComplete="off"
              value={formData.pitchDeck}
              onChange={
                (event)=>setFormData({...formData, pitchDeck:event.target.value})
              }
              name="pitchDeck"
              id="pitchDeck-st"
              className="txtForm"
            />
          </div>
          <div id="domain">
            <label htmlFor="domain">Domain</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={formData.domain}
              onChange={
                (event)=>setFormData({...formData, domain:event.target.value})
              }
              name="domain"
              className="txtForm"
            />
          </div>
          <div className="startup-row-target">
          <div id="target">
            <label htmlFor="domain">Target</label>
            <input
              type="text"
              autoComplete="off"
              value={formData.target}
              onChange={
                (event)=>setFormData({...formData, target:event.target.value})
              }
              name="target"
              className="txtForm"
            />
          </div>
          <div id="minimumFund">
            <label htmlFor="domain">Minimum Fund</label>
            <input
              type="text"
              autoComplete="off"
              value={formData.minimumFund}
              onChange={
                (event)=>setFormData({...formData,minimumFund:event.target.value})
              }
              name="minimumFund"
              className="txtForm"
            />
          </div>
          </div>
          <div id="stage">
            <label htmlFor="domain">Stage</label>
            <input
              type="text"
              autoComplete="off"
              value={formData.stage}
              onChange={
                (event)=>setFormData({...formData, stage:event.target.value})
              }
              name="stage"
              className="txtForm"
            />
          </div>
          <div>
            <label id="buildingNo-st-txt" htmlFor="location">Location</label>
            <div className="startup-row6">
            <div  id="buildingNo-st">
            <input
              type="text"
              autoComplete="off"
              value={formData.buildingNo}
              onChange={
                (event)=>setFormData({...formData, buildingNo:event.target.value})
              }
              name="buildingNo"
              placeholder="BuildingNo"
              className="txtForm"
            />
            </div>
            <div id="street-st">
            <input
              type="text"
              autoComplete="off"
              value={formData.street}
              onChange={
                (event)=>setFormData({...formData, street:event.target.value})
              }
              name="street"
              placeholder="street"
              className="txtForm"
            />
            </div>
            <div id="city-st">
            <input
              type="text"
              autoComplete="off"
              value={formData.startupCity}
              onChange={
                (event)=>setFormData({...formData, statupCity:event.target.value})
              }
              name="city"
              placeholder="city"
              className="txtForm"
            />
            </div>
            </div>
            <div className="startup-row7">
            <div id="state-st">
            <input
              type="text"
              autoComplete="off"
              value={formData.startupState}
              onChange={
                (event)=>setFormData({...formData, startupState:event.target.value})
              }
              name="state"
              placeholder="state"
              className="txtForm"
            />
            </div>
            <div id="pin-st">
            <input
              type="text"
              autoComplete="off"
              value={formData.startupPin}
              onChange={
                (event)=>setFormData({...formData, startupPin:event.target.value})
              }
              name="pin"
              placeholder="pin"
              className="txtForm"
            />
            </div>
            <div id="country-st">
            <input
              type="text"
              autoComplete="off"
              value={formData.startupCountry}
              onChange={(event)=>setFormData({...formData, startupCountry:event.target.value})}
              name="country"
              placeholder="country"
              className="txtForm"
            />
            </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;