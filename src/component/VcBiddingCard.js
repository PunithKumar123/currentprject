import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/VcBiddingCard.css";
import SideNav from './SideNav';
import Navbar from './Navbar';

const VcBiddingCard = () => {
  const [data, setData] = useState([]);
  const [selectedInvestmentWindowId, setSelectedInvestmentWindowId] = useState(null);

  useEffect(() => {
    axios.get('http://192.168.1.128:8080/api/v1/openinvestment')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleBidClick = (investmentwindowId) => {
    setSelectedInvestmentWindowId(investmentwindowId);
    console.log('Selected Investment Window Id:', investmentwindowId);
  };

  return (
    <>
      <Navbar />
      <div className='Main-Cont'>
        <div className='Side-Cont'>
          <SideNav />
        </div>
        <div className='Home-Container'>
          {data.length > 0 ? (
            data.map(item => (
              <div className="Bidding-parent" key={item.id}>
                <div className="Bidding-child">
                  <div className="Bidding-child-left">
                    <h1>{item.windowName}</h1>
                  </div>
                  <div className="Bidding-child-right">
                    <div className="Bidding-child-date-time">
                      <h5> Starts on : {item.startDate}</h5>
                      
                    </div>
                    <div className="Bidding-child-date-time">
                      <h5> Ends on : {item.endDate}</h5>
                    </div>
                    <div className="Bidding-child-sector">Sector : {item.sector}</div>
                    <div className="Bidding-child-description"> Description : {item.discreption}</div>
                    <div className="Bidding-child-button">
                      <button className='Bidding-button' onClick={() => handleBidClick(item.investmentwindowId)}>Bid Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
              <div>Loading data...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default VcBiddingCard;