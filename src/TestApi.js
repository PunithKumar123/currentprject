// import React, { useState, useEffect } from 'react';
// import axios from 'axios';



// // function RandomApi() {
//     const RandomApi= () => {
//         const [data, setData] = useState([]);
      
//         useEffect(() => {
//           const fetchData = async () => {
//             try {
//               const response = await axios.get('https://5aec-106-51-70-135.ngrok.io/api.venturecapitalist.com/GetAllStudentDetails');
//               setData(response.data);
//             } catch (error) {
//               console.error(error);
//             }
//           };
      
//           fetchData();
//         }, []);
      
//         return (
//             <div>
//             {/* {Array.isArray(data) && data.map((item) => (
//               <div key={item.id}>
//                 <h3>{item.title}</h3>
//               </div>
//             ))} */}
//           </div>
//         );
//       }
      
// export default RandomApi;
