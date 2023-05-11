import React from 'react';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import LinkedinImg from "../Assets/LinkedinImg.png";

const LinkedInSSO = () => {
    const handleSuccess = (data) => {
        console.log(data);
    };
    
    const handleFailure = (error) => {
        console.error(error);
    };

    return (
        <LinkedIn
            clientId="77ofap5jrxzba7"
            clientSecret="Bo0SkpLZEctNOQpo"
            redirectUri="https://www.linkedin.com/developers/tools/oauth/redirect"
            onSuccess={handleSuccess}
            onFailure={handleFailure}
        >
            <img src={LinkedinImg} alt="LinkedIn" />
            {/* <LinkedInLoginButton/> */}
        </LinkedIn>
    );
};

export default LinkedInSSO;
