import React, { useState, useEffect } from "react";
import "../css/SideNav.css";

import plantIcon from "../Assets/plant.png";
import Profile from "../Assets/Icons/Profile.png";
import Portfolio from "../Assets/Icons/portfolio.png";
import Explore from "../Assets/Icons/Explore.png";
import Bidding from "../Assets/Icons/Bidding.png";
import Logout from "../Assets/Icons/Logout.png";
import StartUp from "../Assets/Icons/Startup.png";
import Funds from "../Assets/Icons/Funds.png";
import { Link, Navigate } from "react-router-dom";

const SideNav = ({userId}) => {
    console.log("sideNav:"+userId)
    const [isExpended, setExpendState] = useState(false);

    const [pageType, setPageType] = useState(null);

    useEffect(() => {
        const signupType = localStorage.getItem("role");
        setPageType(signupType);
    }, []);

    const handleLogout=()=>{
        localStorage.clear();
        Navigate("/login");
    }

    // const location = useLocation();

    const VcItems = [
        {
            text: "Profile",
            Icons: Profile,
            // link: `profileStartup/${userId}`,
        },
        {
            text: "Portfolio",
            Icons: Portfolio,
            link: " ",
        },
        {
            text: "Explore",
            Icons: Explore,
            link: "startupCard",
        },
        {
            text: "Bid Now",
            Icons: Bidding,
            link: "vcBiddingCard",
        },
        {
            text: "Logout",
            Icons: Logout,
            link: "",
            onClick: handleLogout,
        },
    ];

    const StartupItems = [
        {
            text: "Profile",
            Icons: Profile,
            link: `AdminProfile?userId=${userId}`,
        },
        {
            text: "My StartUp",
            Icons: StartUp,
            link:  `profileStartup?userId=${userId}`,
            // /profileStartup?startupId=${item.startupId}
        },
        // {
        //     text: "Explore",
        //     Icons: Explore,
        //     link: "explore",
        // },
        {
            text: "Funds",
            Icons: Funds,
            link: "funds",
        },
        {
            text: "Logout",
            Icons: Logout,
            link: "",
            onClick: handleLogout,
        },
    ];

    const AdminItems = [
        {
            text: "Profile",
            Icons: Profile,
            // link: "profileStartup",
        },
        {
            text: "Bidding",
            Icons: Bidding,
            link: "startup",
        },
        {
            text: "Explore",
            Icons: Explore,
            link: "StartupCard",
        },
        // {
        //     text: "Funds",
        //     Icons: Funds,
        //     link: "funds",
        // },
        {
            text: "Logout",
            Icons: Logout,
            link: "",
            onClick: handleLogout,
        },
    ];

    const NavItems = () => {
        if (pageType === "VC") {
            return VcItems;
        }
        else if (pageType === "ENTREPRENEUR") {
            return StartupItems;
        }
        else {
            return AdminItems;
            // return VcItems;
            // return StartupItems;
        }

        //  else {
        //     return StartupItems;
        // }
    }


    return (
        <div
            className={
                isExpended
                    ? "side-nav-container"
                    : "side-nav-container side-nav-container-nx"
            }>
            <div className="nav-upper">
                <div className="nav-heading">
                    {isExpended && (
                        <div className="nav-brand">
                            <img src={plantIcon} alt="loding"></img>
                            <h2>Nine Seeders</h2>
                        </div>
                    )}
                    <button
                        className={
                            isExpended ? "hamburger hamburger-in" : "hamburger hamburger-out"
                        }
                        onClick={() => setExpendState(!isExpended)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <div className="nav-menu">
                   
                    {NavItems().map(({ text, Icons, link, onClick }) => (
                        // <a className={isExpended ? "menu-Item":"menu-Item menu-Item-nx"}
                        //     href={`/${link}`}>

                        <Link className={isExpended ? "menu-Item":"menu-Item menu-Item-nx"} to={link} key={text} onClick={onClick ? onClick : null}> 
                         {/* <Link className="menu-Item" to={`/${link}`} key={text}>  */}

                        {/* <Link className={`menu-item ${location.pathname === `/${link}` ? "active" : ""}`} to={`/${link}`} key={text}> */}





                    <img className="menu-item-icon" src={Icons} alt="" srcset="" />
                    {isExpended && <p>{text}</p>}

                </Link>
                
                     //</a> 

                    ))}
                    
                   
        </div>

            </div >

        </div >
    );
};

export default SideNav;