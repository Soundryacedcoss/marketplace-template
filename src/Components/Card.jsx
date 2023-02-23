import React from "react";
import "./card.css";
import poster from "../Images/Image.png";
import like from "../Images/Avatar.png";
export const Card = () => {
  return (
    <div className="Card">
      <div>
        <span className="offer">-56%</span>
        <span style={{ float: "right" }}>
          <img src={like} alt="" className="wishlist" />
        </span>
      </div>
      <img src={poster} className="cardimg" alt="" />
      <div>
        <div style={{ display: "flex" }}>
          <p className="Audio">Audio Device</p>
          <p className="cardtxt">₦600,000</p>
        </div>
        <p className="desc">Nokia Essential Wireless Headphones 120CM BLACK</p>
        <div style={{ display: "flex", columnGap: "50px", marginTop: "40px" }}>
          <div className="addCart">Add to cart</div>
          <button className="btn buybutton">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
