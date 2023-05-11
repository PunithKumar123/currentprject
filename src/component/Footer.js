import React from "react";
import "../css/Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="sb_footer_section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>for Business</h4>
            <a href="/employer">
              <p>Employee</p>
            </a>
            <a href="/Hp">
              <p>Invest</p>
            </a>
            <a href="/pp">
              <p>Fundraise</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Resourses</h4>
            <a href="/resourse">
              <p>center</p>
            </a>
            <a href="/resourse">
              <p>testimonials</p>
            </a>
            <a href="/resourse">
              <p>other</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Partners</h4>
            <a href="/story">
              <p>Story</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/contact">
              <p>contanct</p>
            </a>
            <a href="/career">
              <p>career</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>social media</h4>
            {/* <div className="socialmedia"> */}
            <a href="/about">
              <p>Instagram</p>
            </a>
            <a href="/contact">
              <p>LinkedIn</p>
            </a>
            <a href="/career">
              <p>facebook</p>
            </a>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="sb_footer-below">
        <div className="sb_footer-copyright">
          <p>@{new Date().getFullYear()} All rigts reserved.</p>
        </div>
        <div className="sb_footer-below-links">
          <a href="/terms">
            <div>
              <p>Terms and conditions</p>
            </div>
          </a>
          <a href="/p">
            <div>
              <p>Privacy</p>
            </div>
          </a>
          <a href="/s">
            <div>
              <p>security</p>
            </div>
          </a>
          <a href="/c">
            <div>
              <p>Cookie</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default Footer;