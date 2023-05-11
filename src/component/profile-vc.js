import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/profilestartup.css";
import Footer from "./Footer";
import SideNav from "./SideNav";
import Navbar from "./Navbar";
import { useLocation } from 'react-router-dom';

function ProfilePagevc() {
  const [profileData, setProfileData] = useState(true);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showOverviewDetails, setShowOverviewDetails] = useState(true);
  const [roleType, setRoleType] = useState(null);

  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);

  // const startupId = searchParams.get('startupId');

  // useEffect(() => {
  //   const signupType = localStorage.getItem("role");
  //   setRoleType(signupType);
  //   let apiUrl;
  //   if (roleType === "1") {
  //     apiUrl = "https://dummyjson.com/investors/50";
  //   } else if (roleType === "2") {
  //     apiUrl = "https://dummyjson.com/entrepreneurs/40";
  //   }
  //   if (apiUrl) {
  //     axios
  //       .get(apiUrl)
  //       .then((response) => {
  //         setProfileData(response.data);
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }, [roleType]);

  const handleInterestedClick = () => { };
  const handleMoreDetailsClick = (event) => {
    event.preventDefault();
    setShowMoreDetails(true);
    setShowOverviewDetails(false);
  };
  const handleOverviewDetailsClick = (event) => {
    event.preventDefault();
    setShowOverviewDetails(true);
    setShowMoreDetails(false);
  };
  return (
    <>
      <Navbar />
      <div>
        <div className='Admin-Profile-header'>
          <h4>Venture Capitalist Profile</h4>
        </div>
        <div className="body-profile">

          <div className='Side-Cont'>
            {/* <SideNav /> */}
          </div>

          <div className="profile-container-st">
            <div className="Bg-color">
              <div className="profile-picture">
                {/* <img src={startupId === null ? (profileData.startupimage && profileData.startupDetails.startUpName) : (profileData && profileData.startUpName)} alt="Profile Image" /> */}
                <img src='https://cdn3.iconfinder.com/data/icons/user-group-black/100/user-process-512.png' />
              </div>
              {/* <h1>{startupId === null ? profileData.startUpName : profileData.email}</h1> */}

              {/* <h5>NAME{startupId === null ? (profileData.startupDetails && profileData.startupDetails.startUpName) : (profileData && profileData.startUpName)}</h5>
              <h7>City{startupId === null ? (profileData.startupDetails && profileData.startupDetails.startupCity) : (profileData && profileData.startupCity)}</h7> */}
              <h5>NAME</h5>
              <h7>City</h7>
            
          </div>
          <div className="Link-BG">
            <div className="Links">
              <a href="/" onClick={handleOverviewDetailsClick}>Overview</a>
              <a href="/" onClick={handleMoreDetailsClick}>More Info</a>
            </div>
          </div>
          {showMoreDetails && (
            <div className="more-info-container">
              <div className="location-pf">
                <h2>location</h2>
                {/* <p>street : {startupId === null ? (profileData.startupDetails && profileData.startupDetails.street) : (profileData && profileData.street)}</p>
            <p>City : {startupId === null ? (profileData.startupDetails && profileData.startupDetails.startupCity) : (profileData && profileData.startupCity)}</p>
            <p>State : {startupId === null ? (profileData.startupDetails && profileData.startupDetails.startupState) : (profileData && profileData.startupState)}</p>
            <p>Country : {startupId === null ? (profileData.startupDetails && profileData.startupDetails.startupCountry) : (profileData && profileData.startupCountry)}</p>
            <p>Pin Code : {startupId === null ? (profileData.startupDetails && profileData.startupDetails.startupPin) : (profileData && profileData.startupPin)}</p> */}
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
                  <p>{profileData.summary}</p>
                </div>
                <div className="StartupProfile-domain">
                  <h2>Expertise</h2>
                  <p className="domain">{profileData.expertise}</p>
                </div>
              </div>
              <div className="profilerow2">
                <div className="bio-container-st">
                  <h2>Bio</h2>
                  <p className="bio">{profileData.bio}</p>
                </div>
                <div className="StartupProfile-Overview">
                  <h2>Overview</h2>
                  {/* <p className="other"><b>Current Valuation :</b> {startupId === null ? (profileData.startupDetails && profileData.startupDetails.currentValuation) : (profileData && profileData.currentValuation)}</p>
              <p className="other"><b>Stage :</b>{startupId === null ? (profileData.startupDetails && profileData.startupDetails.stage) : (profileData && profileData.stage)}</p>
              <p className="other"><b>Funding Type :</b> {startupId === null ? (profileData.startupDetails && profileData.startupDetails.fundingType) : (profileData && profileData.fundingType)}</p>
              <p className="other"><b>Target :</b> {startupId === null ? (profileData.startupDetails && profileData.startupDetails.target) : (profileData && profileData.target)}</p>
              <p className="other"><b>Minimum Fund :</b> {startupId === null ? (profileData.startupDetails && profileData.startupDetails.minimumFund) : (profileData && profileData.startUpName)}</p> */}
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
export default ProfilePagevc;