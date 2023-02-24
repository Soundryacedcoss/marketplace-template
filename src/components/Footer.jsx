import React from "react";
import facebook from "../Images/Vector (copy 1).png";
import twitter from "../Images/Vector (1).png";
import linkdin from "../Images/Vector (3).png";
import insta from "../Images/Vector (2).png";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="Footer_container">
      <ul className="Footer_ul">
        <li className="bold">Your Company</li>
        <li className="footer_li">
          Our mission is to make gadjet purchase, accessible and affordable.
        </li>
      </ul>
      <ul className="Footer_ul">
        <li className="bold">Helpful Links</li>
        <li className="footer_li">Home</li>
        <li className="footer_li">About Us</li>
        <li className="footer_li">Marketplace</li>
        <li className="footer_li">Blog</li>
        <li className="footer_li">Contact Us</li>
      </ul>
      <ul className="Footer_ul">
        <li className="bold">Site map</li>
        <li className="footer_li">Our Mobile App</li>
        <li className="footer_li">Frequently asked question</li>
        <li className="footer_li">Help desk</li>
        <li className="footer_li">Privacy policy</li>
        <li className="footer_li">Term & condition</li>
      </ul>
      <ul className="Footer_ul">
        <li className="bold">Contact us</li>
        <span></span>
        <li className="footer_li">
          <img className="footer_logo" style={{marginLeft:"-5px"}} src={facebook} alt="" />
          <img className="footer_logo" src={twitter} alt="" />
          <img className="footer_logo" src={insta} alt="" />
          <img className="footer_logo" src={linkdin} alt="" />
        </li>
        <li className="footer_li">hello@yourcompany.com</li>
      </ul>
    </div>
  );
};
