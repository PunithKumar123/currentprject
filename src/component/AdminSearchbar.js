import React, { useState, useEffect } from "react";
import "../css/SearchButton.css";

import AdminsearchResults from "/home/nineleaps/project1/src/component/StartupCardadmin.js";
import Search from "/home/nineleaps/project1/src/Assets/search.png";
import axios from "axios";
import "/home/nineleaps/project1/src/css/filter.css";
import Navbar from "./Navbar";
import Filter from "../Assets/filter.png";


function AdminsearchBar() {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [adminsearchResults, setAdminsearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [allData, setAllData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    fetch(`http://192.168.1.128:8080/api/v1/search/startups`)
      .then((response) => response.json())
      .then((data) => {
        setAllData(data);
        setAdminsearchResults(data);
        setError(null);
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }, []);
  const handleInputChange = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filteredData = allData.filter((item) => {
      const itemStartUpName = item.startUpName.toLowerCase();
      const itemSummary = item.summary.toLowerCase();
      return (
        itemStartUpName.includes(searchQuery) ||
        itemSummary.includes(searchQuery)
      );
    });
    setSearchQuery(event.target.value);
    setAdminsearchResults(filteredData);
  };

  const handleDropdown = (event) => {
    const { name, value } = event.target;
    if (name === "Valuation" || name === "target") {
      const [minValue, maxValue] = value.split("-");
      setSelectedFilters((prevState) => ({
        ...prevState,
        [`min${name}`]: minValue,
        [`max${name}`]: maxValue,
      }));
    } else {
      setSelectedFilters((prevState) => ({ ...prevState, [name]: value }));
    }
  };
  const handleFilterApply = () => {
    console.log("Selected Filters:", selectedFilters);
    axios
      .get("http://192.168.1.128:8080/api/v1/startupsget?", {
        params: selectedFilters,
      })
      .then((response) => {
        console.log("API response:", response.data);
        setAdminsearchResults(response.data); // Set the startup list state with the retrieved data
        setIsOpen(false);
      })
      .catch((error) => {
        console.log("API error:", error);
      });
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="adminsearchparent">
        <div className="mainsearch">
          <div className="Searchbutton-1">
            <input
              className="Searchbutton"
              type="text1"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Type to Search..."
            />
            <img src={Search} />
          </div>
          <button className="Filterbutton" onClick={() => setIsOpen(!isOpen)}>
            Filter <img src={Filter} />
          </button>
        </div>
        <div className="filter-button">
          {isOpen && (
            <div className="dropdown">
              <div>
                <span className="filterspancv">Current valuation: </span><br></br>
                <select name="Valuation" onChange={handleDropdown}>
                  <option value="2000-9000">0 - Ten Lakh</option>
                  <option value="1000001-50000000">
                    Ten Lakh - Five crore
                  </option>
                  <option value="50000001-100000000">
                    Five crore - Ten crore
                  </option>
                </select>
              </div>
              <div>
                <span className="filterspan">Funding Type: </span><br></br>
                <select name="fundingType" onChange={handleDropdown}>
                  <option value="A">Type A</option>
                  <option value="B">Type B</option>
                  <option value="C">Type C</option>
                  <option value="D">Type D</option>
                </select>
              </div>
              <div>
                <span className="filterspan">Target: </span><br></br>
                <select name="target" onChange={handleDropdown}>
                  <option value="100-200">0 - 100000</option>
                  <option value="100001-500000">100001 - 500000</option>
                  <option value="500001-1000000">500001 - 1000000</option>
                </select>
              </div>
              <div>
                <span className="filterspan">Sector</span><br></br>
                <select name="domain" onChange={handleDropdown}>
                  <option value="Technology">Technology</option>
                  <option value="Health">Healthcare</option>
                  <option value="E-commerce">E-commerce:</option>
                  <option value="Education">Education</option>
                  <option value="Financial services">Financial services</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Real estate">Real estate</option>
                  <option value="Media and entertainment">
                    Media and entertainment
                  </option>
                  <option value="Energy and sustainability">
                    Energy and sustainability
                  </option>
                </select>
              </div>
              <div>
                <span className="filterspan">Pitch Deck: </span><br></br>
                <select name="withPitchDeck" onChange={handleDropdown}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="Filterinput">
                <span className="filterspan">City: </span>
                <input type="text1" name="city" onChange={handleDropdown} />
              </div>
              <div className="Filterinput">
                <span className="filterspan">State: </span>
                <input type="text1" name="state" onChange={handleDropdown} />
              </div>
              <button
                className="Filterbutton-apply"
                onClick={handleFilterApply}
              >
                Apply
              </button>
            </div>
          )}
        </div>
        {error && <div>{error}</div>}
        <AdminsearchResults adminsearchResults={adminsearchResults} />
      </div>
      </div>
      
     
    </>
  );
}

export default AdminsearchBar;