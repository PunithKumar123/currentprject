import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/profilestartup.css";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';
import SideNav from "./SideNav";
import Navbar from "./Navbar";

function ProfilePagest() {
  const [profileData, setProfileData] = useState({});
  const [showPitchDetails, setShowPitchDetails] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showOverviewDetails, setShowOverviewDetails] = useState(true);
  const token = localStorage.getItem('token');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const startupId = searchParams.get('startupId');
  // console.log("stID-"+startupId)

  const userId = searchParams.get('userId');
  console.log("uID-"+userId)

  // const userId  = props.match.params;
  // console.log(userId)

  const role = localStorage.getItem("role");

  const headers = {
    Authorization: `Bearer ${token}`
  };

  useEffect(() => {
    // const role = localStorage.getItem("role");

    console.log(role)
    let url = "";
    if (role === "ADMIN" || role === "VC") {
      // console.log("startupid")
      url = `http://192.168.1.128:8080/api/v1/completeinfo?id=${startupId}`;
    } else if (role === "ENTREPRENEUR") {
      console.log("ent"+userId)
      url = `http://192.168.1.128:8080/api/v1/getprofile?id=${userId}`;
    }

    axios
      .get(url)
      .then((response) => {
        setProfileData(response.data);
        console.log(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  }, [role, startupId, userId]);

  // console.log(profileData);

  // const handleInterestedClick = () => {};
  const handlePitchDetailsClick = (event) => {
    event.preventDefault();
    setShowPitchDetails(true);
    setShowMoreDetails(false);
    setShowOverviewDetails(false);
  };
  const handleMoreDetailsClick = (event) => {
    event.preventDefault();
    setShowMoreDetails(true);
    setShowPitchDetails(false);
    setShowOverviewDetails(false);
  };
  const handleOverviewDetailsClick = (event) => {
    event.preventDefault();
    setShowOverviewDetails(true);
    setShowPitchDetails(false);
    setShowMoreDetails(false);
  };

  // console.log(profileData.startupDetails.startUpName)
  console.log(profileData.startupDetails && profileData.startupDetails.startUpName);


  return (
    <>
    <Navbar/>
    <div>
    <div className='Admin-Profile-header'>
                <h4>Startup Profile</h4>
            </div>
    <div className="body-profile">
    
<div className='Side-Cont'>
          <SideNav userId={userId} />
        </div>

    <div className="profile-container-st">
      <div className="Bg-color">
      <div className="profile-picture">
        {/* <img src={startupId === null ? (profileData.startupimage && profileData.startupDetails.startUpName) : (profileData && profileData.startUpName)} alt="Profile Image" /> */}
        <img src='https://cdn3.iconfinder.com/data/icons/user-group-black/100/user-process-512.png' />
        </div>
        {/* <h1>{startupId === null ? profileData.startUpName : profileData.email}</h1> */}

        <h5>NAME{startupId === null ? (profileData.startupDetails && profileData.startupDetails.startUpName) : (profileData && profileData.startUpName)}</h5>
        <h7>City{startupId === null ? (profileData.startupDetails && profileData.startupDetails.startupCity) : (profileData && profileData.startupCity)}</h7>

      </div>
      <div className="Link-BG">
        <div className="Links">
          <a href="/" onClick={handleOverviewDetailsClick}>Overview</a>
          <a href="/" onClick={handlePitchDetailsClick}>
            Pitch Details
          </a>
          <a href="/" onClick={handleMoreDetailsClick}>More Info</a>
        </div>
        {/* <button className="button-interested" onClick={handleInterestedClick}>
          Interested
        </button> */}
      </div>
      {showMoreDetails && (
        <div className="more-info-container">
          <div className="location-pf">
            <h2>location</h2>
            <p>street : {startupId === null ? (profileData.startupDetails && profileData.startupDetails.street) : (profileData && profileData.street)}</p>
            <p>City : {startupId === null ? (profileData.startupDetails && profileData.startupDetails.startupCity) : (profileData && profileData.startupCity)}</p>
            <p>State : {startupId === null ? (profileData.startupDetails && profileData.startupDetails.startupState) : (profileData && profileData.startupState)}</p>
            <p>Country : {startupId === null ? (profileData.startupDetails && profileData.startupDetails.startupCountry) : (profileData && profileData.startupCountry)}</p>
            <p>Pin Code : {startupId === null ? (profileData.startupDetails && profileData.startupDetails.startupPin) : (profileData && profileData.startupPin)}</p>
          </div>
          <div className="FAQs-pf">
            <h2 className="FAQs">FAQs</h2>
          </div>
        </div>
      )}
      {showOverviewDetails && (
        <>
          <div className="profilerow1">
            <div className="StartupProfile-Summary">
              <h2>Summary</h2>
              <p>{startupId === null ? (profileData.startupDetails && profileData.startupDetails.summary) : (profileData && profileData.summary)}</p>
            </div>
            <div className="StartupProfile-domain">
              <h2>Domain</h2>
              <p className="domain"><p className="other">{startupId === null ? (profileData.startupDetails && profileData.startupDetails.domain) : (profileData && profileData.domain)}</p></p>
            </div>
          </div>
          <div className="profilerow2">
            <div className="bio-container-st">
              <h2>Bio</h2>
              <p className="bio">{profileData.bio}</p>
            </div>

            <div className="StartupProfile-Overview">
              <h2>Overview</h2>
              <p className="other"><b>Current Valuation :</b> {startupId === null ? (profileData.startupDetails && profileData.startupDetails.currentValuation) : (profileData && profileData.currentValuation)}</p>
              <p className="other"><b>Stage :</b>{startupId === null ? (profileData.startupDetails && profileData.startupDetails.stage) : (profileData && profileData.stage)}</p>
              <p className="other"><b>Funding Type :</b> {startupId === null ? (profileData.startupDetails && profileData.startupDetails.fundingType) : (profileData && profileData.fundingType)}</p>
              <p className="other"><b>Target :</b> {startupId === null ? (profileData.startupDetails && profileData.startupDetails.target) : (profileData && profileData.target)}</p>
              <p className="other"><b>Minimum Fund :</b> {startupId === null ? (profileData.startupDetails && profileData.startupDetails.minimumFund) : (profileData && profileData.startUpName)}</p>
            </div>
          </div>
        </>
      )}
      {showPitchDetails && (
        <>
          <div className="Pitchh">
            <div className="pitch-details-container">
              <h2>Pitch Details</h2>
              <p className="other"> {startupId === null ? (profileData.startupDetails && profileData.startupDetails.pitchDeck) : (profileData && profileData.startUpName)}</p>
            </div>
          </div>
        </>
      )}
      
    </div>
    </div>
    <Footer />
    </div>
    </>
  );
}
export default ProfilePagest;