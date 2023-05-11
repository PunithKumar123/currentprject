import React from "react";
//import Profile from './component/Profile';
// import './App.css';
// import Card from './component/cardStartup';
import GuestPage from "./component/GuestPage";
// import AddRemoveInputField from './component/AddRemoveInputField';
// import Footer from './component/Footer';
//  import Login from './component/Login';
//import Navbar from './component/Navbar';
// import Otp from './component/OtpVerification';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//  import SignupForm from '/home/nineleaps/project/src/component/Signup.js';
//import Sso from './component/Sso';
import Ulogin from "./component/Login";
import Register from "./Registration/Register";
import Registervc from "./Registration/RegisterVC";
import { FormProvider } from "./component/Context/FormContext";
import Form from "./component/Form";
//import ButtonPage from './component/SignupOpt';
import Signup from "./component/BsignIn.js";
// import LinkedInSSO from './component/LinkedInSSO';
//import RandomApi from './TestApi';
import Otp from "./component/OtpVerification";
// import LinkedInPage from './component/LinkedinTest';
//import Entreprenur from './component/personalinfo';
// import Otp from "/home/nineleaps/project/src/component/OtpVerification";

import UserProfile from "./component/Userprofile";
import ProfilePage from "./component/profile-vc";

import PostForm from "./component/Postform";
import Entreprenur from "./component/personalinfo";
import FeedsPage from "./component/Feeds";
import FeedsDisplay from "./component/FeedsDisplay";
import ProfilePagest from "./component/profileStartup";
import HomePage from "./component/Homepage";

import StartupCard from "./component/StartupCard";
import SideNav from "./component/SideNav";
import VcBiddingCard from "./component/VcBiddingCard";
// import LoadingSpinner from "./component/LoadingSpinner";
import Sso from "./component/Sso";
import ContactUs from "./component/ContactUs";
// import ProfilePagest from "./component/profileStartup";
import Signout from "./component/signout";
import AdminProfile from "./component/AdminProfile";
import ForgotPassword from "./component/forgotPassword";
import ProfilePagevc from "./component/profile-vc";
import InvestmentForm from "./component/Investmentwindow";
import AdminsearchBar from "./component/AdminSearchbar";








function App() {
  return (
    <>
    {/* <InvestmentForm />
    <AdminsearchBar /> */}
    {/* <ForgotPassword/> */}
    {/* <ProfilePage/> */}
    {/* <profile */}
    {/* <Signout/> */}
    {/* <ContactUs/> */}
    {/* <AdminProfile/> */}
    {/* <VcBiddingCard/> */}
     {/* <StartupCard/> */}
    {/* <ProfilePagest/> */}
      {/* <FeedsPage /> */}
      {/* <NewFeeds/> */}
     {/* <LoadingSpinner/> */}
      {/* <HomePage/> */}
      {/* <FeedsDisplay/> */}
    
      {/* <FormProvider>
      <Form />
       </FormProvider> */}
      {/* <HomePage/> */}
      {/* <RandomApi/> */}
      {/* <LinkedInPage/> */}
      {/* <Signup /> */}
      {/* <Navbar/> */}

      {/* <Card/> */}
      {/* <Count/> */}
      {/* <Otp/> */}
      {/* <Footer /> */}
      {/* <AddRemoveInputField/> */}
      {/* <Register/> */}
      {/* <Registervc/> */}
      {/* <ButtonPage/> */}
      {/* <Sso/> */}
      {/* <Login/> */}
      {/* <Login/> */}
      {/* <GuestPage/> */}
      {/* <Profile/> */}
      {/* <Entreprenur/> */}
      {/* <LinkedInSSO/> */}
      {/* <SideNav/> */}
      {/* <Ulogin/> */}
    {/* <ProfilePagevc/> */}

      <div>
        <BrowserRouter>
          <Routes>
           <Route exact path="/" element={<GuestPage />} />
            <Route exact path="/login" element={<Ulogin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/otp" element={<Otp />} />
            <Route exact path="/homePage" element={<HomePage />} />
            <Route exact path="/startup" element={<Entreprenur />} /> 
            <Route exact path="/homePage/startupCard" element={<StartupCard/>} />
            <Route exact path="/homePage/startupCard" element={<AdminsearchBar/>} />
            <Route exact path="/homePage/adminProfile" element={<AdminProfile />} />
            <Route exact path="/vcBiddingCard" element={<VcBiddingCard/>} />
            <Route exact path="/forgotpassword?" element={<ForgotPassword/>} />
            <Route exact path="/handleLogout" element={<logout/>} />
            <Route exact path="/profileStartup/:startupId?" element={<ProfilePagest/>} />
            <Route exact path="/homePage/profileStartup/" element={<ProfilePagest/>} />
            <Route exact path="/homePage/profileVc/" element={<ProfilePagevc/>} />
            <Route exact path="/registrationvc" element={<Registervc />} />
            <Route exact path="/homePage" element={<HomePage />} />
            <Route exact path="/feeds" element={<FeedsPage/>}/>
            <Route exact path="/feedsDisplay" element={< FeedsDisplay />} />
            <Route exact path="/registrationEnt" element={<Form/>}/>
            <Route exact path="/userProfile"     element={<UserProfile/>}  />   
            <Route exact path="/getStartupProfile" element={<ProfilePagest/>}/>

            <Route exact path="/invest" element={<InvestmentForm />} />
               <Route exact path="/adminsearchbar" element={<AdminsearchBar />} />
               <Route
               exact
               path="/investmentform"
               element={<InvestmentForm />}
             />

          </Routes>
        </BrowserRouter>
      </div>
      
      {/* <div>
           <BrowserRouter>
             <Routes>
             
           </Routes>
         </BrowserRouter>
       </div> */}


   </>

  );
}

export default App;