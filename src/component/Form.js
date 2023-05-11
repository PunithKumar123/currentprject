import React, { useState } from "react";
import { baseUrl, registrationent } from "../Api";
import Entreprenur from "../component/personalinfo";
import Register from "../Registration/Register";
import AddRemoveInputField from "./AddRemoveInputField";
import "../css/personalinfo.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import plant from "../Assets/plant.png";
import Footer from "./Footer";
function Form() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    profileImage: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country: "",
    startUpName: "",
    linkedin: "",
    websiteurl: "",
    summary: "",
    bio: "",
    pitchDeck: "",
    fundingType: "",
    currentValuation: "",
    websiteUrl: "",
    domain: "",
    target: "",
    minimumFund: "",
    stage: "",
    street: "",
    startupCity: "",
    startupstate: "",
    startupCountry: "",
    buildingNo: "",
    startupPin: "",
    startupMemberDetailsDto: [
      {
        name: "",
        email: "",
        title: "",
      },
    ],
  });
  const FormTitles = ["Personal Info", "StartUp Details", "Cofounders Details"];
  const PageDisplay = () => {
    if (page === 0) {
      return <Entreprenur formData={formData} setFormData={setFormData} />;
    } else if(page===1){
      return <Register formData={formData} setFormData={setFormData} />;
    }
     else{
         return <AddRemoveInputField formData={formData} setFormData={setFormData}/>;
     }
  };
  return (
    <>
      <Navbar />
      <div className="Personalinfo-container">
        <div className="form-left">
          <img src={plant} />
          <b>One step away from becoming a part of Nineseeders</b>
        </div>
        <div className="form">
          <div className="progressbar">
            <div
              style={{
                width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
              }}
            ></div>
          </div>
          <div className="form-container">
            <div className="header">
              <h1>{FormTitles[page]}</h1>
            </div>
            <div className="body">{PageDisplay()}</div>
            <div className="footer">
              <button
                className="next"
                onClick={() => {
                  const token = localStorage.getItem("token");
                  if (page === FormTitles.length - 1) {
                   
                    // navigate("/HomePage",{state:{token}});
                    console.log(formData);
                    const registrationKeyEntrepreneur = localStorage.getItem(
                      "registrationKey"
                    );
                    axios
                      .post(baseUrl.baseUrl + registrationent.registrationent, {
                        registrationKeyEntrepreneur,
                        // profileImage:formData.profileImage,
                        name: formData.name,
                        startUpName: formData.startUpName,
                      })
                      .then((response) => {
                        console.log(response);
                        navigate("/HomePage", { state: { token } });
                      });
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === FormTitles.length - 1 ? "submit" : "Next"}
              </button>

              {page > 0 && (
                <button
                  className="next"
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                >
                  Prev
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Form;
