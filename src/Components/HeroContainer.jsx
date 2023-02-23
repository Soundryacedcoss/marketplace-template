import React from "react";
import "./Hero.css";
import hero from "../Images/Rectangle 10342.png";

export const HeroContainer = () => {
  return (
    <div className="Hero_container">
      <div className="Content">
        <span style={{ fontFamily: "Moderat", fontWeight: "700" }}>
          WE’RE STILL
        </span>
        <p className="Hightlight">Filling up the spaces.</p>
        <button
          className="btn"
          style={{
            fontFamily: "Moderat",
            background: "#413DEE",
            color: "white",
            padding: "2% 5%",
          }}
        >
          Explore Marketplace
        </button>
        <span style={{ marginLeft: "10px", fontFamily: "Moderat" }}>
          See Top deals
        </span>
      </div>
      <img src={hero} alt="" className="heroImg" />
    </div>
  );
};
