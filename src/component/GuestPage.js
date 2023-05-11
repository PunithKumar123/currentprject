import React from 'react'
import CardStartup from '../card/cardStartup'
import CardVC from '../card/cardVC.js'
import Navbar from './Navbar'
import Footer from './Footer'
import Banner from './Banner'
import "/home/nineleaps/project1/src/css/Guestpage.css"

const GuestPage = () => {
  return (

    <>
    
    <Navbar showLogin={true} showSignup={true} />

        <Banner /><div className="card-container1">
        <h4 className="title-gp">
          Total investments <p>Rs 23Billion</p>
        </h4>
        <h4 className="title-gp">
          Total Funded deals <p> 1234</p>
        </h4>
        <h4 className="title-gp">
          current Opportunities<p>157</p>
        </h4>
        
      </div>

      <div>
        <CardStartup />
      </div>
      <div>
        <CardVC />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default GuestPage