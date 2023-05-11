import React, { useState } from 'react'
import LoadingSpinner from './LoadingSpinner';
import axios from 'axios';

const BiddingStartups = () => {
    
    const [data, setData] = useState([]);


  React.useEffect(() => {
    axios.get('https://dummyjson.com/quotes')
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

    <div className='main-FeedsDisplay-container'>
      {data.quotes && data.quotes.length > 0 ? (
        data.quotes.map(item => (
          <div className='Feeds-Main'>

            <div className='Feeds-Photo'>
              <img src="https://scontent.fblr2-2.fna.fbcdn.net/v/t39.30808-6/326718397_524698639759373_9212873424182205737_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mxCWiAvE9-AAX8licR5&_nc_ht=scontent.fblr2-2.fna&oh=00_AfACoTSJjXtFede1XzthKz196OGNt37NRWz6IJ6qnNNzsg&oe=644518DC" alt='user' />
            </div>
            <div className="Feeds-Name-Time">
              <div className='Feeds-Name'>{item.author}</div>
              <div className='Feeds-Time'>monday 16-11-1998</div>
            </div>
            <div className='Feeds-Cont'>{item.quote}</div>
          </div>
        ))
      ) : (
        <LoadingSpinner/>
      )}
    </div>
  );
}

export default BiddingStartups