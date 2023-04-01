import React from "react";
import "../css/dashboard.css";

function Card(props) {
  return (
    <div className="tour-card">
      <div className="card-overlay"></div>
      <div
        className=" d-flex dir-col justify-content-between height-100 over-1"
        style={{ display: "inline-flex" }}
      >
        <h2 className="host-name">by Aayush Patel</h2>
        <div className="card-details">
          <p className="tour-name p-0 m-0">Spain</p>
          <span className="team">34</span>
          <br />
          <p className="tour-date">23 Mar - 25 Mar</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
