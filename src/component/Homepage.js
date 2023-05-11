import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import SideNav from './SideNav'
import StartupCard from './StartupCard'
import '../css/Home.css';
import FeedsPage from './FeedsPage';
import FeedsDisplay from './FeedsDisplay';
import Footer from './Footer';
import { useLocation, useParams } from 'react-router-dom';
// import VcBiddingCard from './VcBiddingCard';

const HomePage = (props) => {

  const [pageType, setPageType] = useState(null);

 const location = useLocation();
  const userId = location.state ? location.state.userId : null;
  console.log("user id:"+userId)



  useEffect(() => {
    const roleType = localStorage.getItem("role");
    setPageType(roleType);
  }, []);

  const renderHomePage = () => {
    if (pageType === "VC") {
      return (
        <FeedsDisplay />
      );
    } else if (pageType === "ENTREPRENEUR") {
      return (
        <FeedsPage />)
    }

    else {
      return (
        <StartupCard />
      );
    }
  }



  return (
    <>
      <Navbar />
      <div className='Main-Cont'>
        <div className='Side-Cont'>
          {/* <SideNav userId={userId} /> */}
        </div>


        <div className='Home-Container'>
          {renderHomePage()}
          {/* <FeedsPage/> */}
          {/* <StartupCard/> */}
          {/* <FeedsDisplay/> */}
          {/* <VcBiddingCard/> */}
        </div>

      </div>
      <Footer />
    </>
  )
}

export default HomePage;



