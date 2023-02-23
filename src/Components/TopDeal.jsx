import React from "react";
import arrow from "../Images/Vector.png";
export const TopDeal = (props) => {
  return (
    <div className="TopDeal_container">
      <div className="TopDeal">
        <p>{props.topDeal}</p>
        <p>
          Explore <img src={arrow} alt="" />{" "}
        </p>
      </div>
    </div>
  );
};
