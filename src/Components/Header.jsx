import React from "react";
import "./Header.css";
import logo from "../Images/YOUR LOGO.png";
import cart from "../Images/Group 2609203.png";
import profile from "../Images/Ellipse 67.png";
export const Header = () => {
  return (
    <div className="header_container">
     
        <ul className="header_ul">
          <li>
            <img className="logo" src={logo} alt="" />
          </li>
          <li>MarketPlace</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            {" "}
            <img src={cart} alt="cart"  />
          </li>
          <li className="last_li">
            <img src={profile} alt="profile"  />
          </li>
        </ul>
    </div>
  );
};
