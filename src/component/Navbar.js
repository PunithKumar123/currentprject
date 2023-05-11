import React, { useRef } from 'react'
import { FaTimes, FaBars } from "react-icons/fa";
import "../css/Navbar.css";
import plant from "../Assets/plant.png";

function Navbar(props) {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  }

  return (
    <div className='container'>
      <div className='logo'>
        <img src={plant} className="logo" alt="logo" />
        <p>Nineseeders</p>
      </div>
      <nav ref={navRef}>
        <a href="/guestPage">Home</a>
        <a href="/">About Us</a>
        <a href="/">contact Us</a>
        {props.showLogin && <a href="/login">Log In</a>}
        {props.showSignup && <a href="/signup">Sign Up</a>}
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  )
}

export default Navbar;