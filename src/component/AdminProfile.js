import React,{ useState, useEffect } from 'react'
import axios from "axios";
import '../css/AdminProfile.css'
import Footer from './Footer'
import Navbar from './Navbar'
import SideNav from './SideNav'
import { useLocation } from 'react-router-dom';


const AdminProfile = () => {

    const [profileData, setProfileData] = useState(true);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('userId');
    console.log("uID-" + userId)

    const role = localStorage.getItem("role");
    useEffect(() => {
    console.log(role)

    let url = "";
    if (role === "ADMIN") {
        console.log("startupid")
        // url = `http://192.168.1.128:8080/api/v1/completeinfo?id=${startupId}`;
    } else if (role === "ENTREPRENEUR") {
        console.log("userid")
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
}, [role, userId]);

return (
    <>
        <Navbar />
        <div className='Admin-Profile-main'>
            <div className='Admin-Profile-header'>
                <h4>User profile</h4>
            </div>

            <div className='Admin-Profile-body'>
                <div className='Side-Cont'>
                    <SideNav />
                </div>
                <div className="Admin-parent">
                    <div className="Admin-child">
                        <div className="Admin-child-left">
                            <img src='https://cdn3.iconfinder.com/data/icons/user-group-black/100/user-process-512.png' />
                        </div>
                        <div className="Admin-child-right">
                            <div className="Admin-child-data">
                                <p><b>Name :</b>  {profileData.name}</p>
                                <p><b>email :</b>  {profileData.email}</p>
                                <p><b>Phone :</b>  {profileData.phone}</p>
                                <p><b>Position :</b>  Admin</p>
                                <p><b>Address :</b>  Bangalore, Karnataka, India  Bangalore, Karnataka, India Bangalore, Karnataka, India Bangalore, Karnataka, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
)
}

export default AdminProfile;