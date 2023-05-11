import React, { useState } from 'react'
import "../css/Startupcard.css"
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import SideNav from './SideNav';
import Navbar from './Navbar';


const StartupCard = () => {

  const [data, setData] = useState({});
  const role = localStorage.getItem('role');
  const navigate = useNavigate();

  // const handleMore=(id)=>{
  //   navigate(`/profileStartup/${id}`)

  // }
  const handleSelect=()=>{

  }




  React.useEffect(() => {
    // axios.get('baseUrl.baseUrl + showcards.showcards')
    axios.get("http://192.168.1.128:8080/api/v1/showcards")
    
      .then(response => {
        setData(response.data);
        // console.log(data)
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);




  return (
    <>
    <Navbar/>
     <div className='Main-Cont'>
   <div className='Side-Cont'>
      <SideNav />
    </div>

    <div className='main-container'>

    
      {data && data.length > 0 ? (
        data.map(item => (

          <div className='card-container' key={item.id}>
            <div className='card-photo'>
              {/* <img src="https://scontent.fblr2-2.fna.fbcdn.net/v/t39.30808-6/326718397_524698639759373_9212873424182205737_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mxCWiAvE9-AAX8licR5&_nc_ht=scontent.fblr2-2.fna&oh=00_AfACoTSJjXtFede1XzthKz196OGNt37NRWz6IJ6qnNNzsg&oe=644518DC" alt='user' /> */}
            </div>
            <div className='cunt'>
              <div className='card-name'>
                <h7><b>{item.startUpName}</b></h7>
              </div>
              <div className='card-location'>
                <h9>{item.startupCity}</h9>
              </div>
            </div>
            <div className='card-bio'>{item.startUpName}</div>

            {/* <div className='card-btn-cont'>
              <button className='card-button' onClick={handleMore}><b>Know More</b></button>
            </div> */}

            <div className='card-btn-cont'>
            <button className='card-button' onClick={() => navigate(`/profileStartup/${item.startupId}`) }><b>Know More</b></button>

              {/* <button className='card-button' onClick={handleMore(item.id)}><b>Know More</b></button> */}
              {/* <button className='card-button' onClick={() => navigate(`/profileStartup/${item.id}`)}><b>Know More</b></button> */}
            </div>

  
            {role === 'ADMIN' && (
              <div className='card-btn-cont'>
                <button className='card-button' onClick={handleSelect}><b>select</b></button>
              </div>
            )}
          </div>


        ))
      ) : (
        <LoadingSpinner />
      )}
    </div>
    </div>
    </>
  
  )
}

export default StartupCard

