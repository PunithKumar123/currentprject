import React, { useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { LoginSocialGoogle } from 'reactjs-social-login';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Sso() {
    const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    console.log("token", accessToken);
  }, [accessToken]);

  const handleResolve = ({ provider, data }) => {
    // console.log("token")     
    console.log(provider, data);
    setAccessToken(data.access_token);

    // const handleClick = () => {
        console.log("clicked")
        // console.log("token"+accessToken)
        console.log("token"+data.access_token)
        if (data.access_token) {
            console.log("token"+accessToken)
          axios.post('http://192.168.1.128:8080/api/v1/get-email',{
            headers: 
                data.access_token,
              
          })
          
            .then((response) => {
            //   console.log("response"+response.data);
                const { token, role,  } = response.data;
                localStorage.setItem("token", token);
                localStorage.getItem("token");
                localStorage.setItem("role", role);
                console.log(response);
                navigate('/homePage', { state: { userId: response.data.userId }});
        
              })
            .catch((error) => {
              console.log(error);
            });
        // }
      };
  };

  const handleReject = (err) => {
    console.log(err);
  };

  

  return (
    <div>
      <LoginSocialGoogle
        client_id="114622682127-rfdcda1lrpqhh5so5dc9bg4j4e1q7vgl.apps.googleusercontent.com"
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={handleResolve}
        onReject={handleReject}
      >
        <div className="Sso" >
          <FaGoogle />
          <p>login with Google</p>
        </div>
      </LoginSocialGoogle>
    </div>
  );
}

export default Sso;