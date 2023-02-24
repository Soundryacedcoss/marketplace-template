import React from "react";
import "./Subscribe.css";
export const Subscribe = () => {
  return (
    <div className="Subscribe_conainer">
      <p className="subscribe_head">Subscribe to Our Newsletter</p>
      <p className="subtxt">Don't miss out on our top deals! Dont worry we will not spam you.</p>
      <div className="inputButton">
      <input type="text" className="input" placeholder="Enter your Email Here " />
    <button className="rounded-pill button">Subscribe</button>
      </div>
   
    </div>
  );
};
