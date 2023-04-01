import React from "react";
import "../css/dashboard.css";

function Card({
  title,
  createdBy,
  startDate,
  endDate,
  memberCount,
  coverImage,
}) {
  return (
    <div
      className="tour-card"
      style={{
        backgroundImage: "url(" + coverImage[0] + ")",
      }}
    >
      <div className="card-overlay"></div>
      <div
        className=" d-flex dir-col justify-content-between height-100 over-1"
        style={{ display: "inline-flex" }}
      >
        <h2 className="host-name">by {createdBy}</h2>
        <div className="card-details">
          <p className="tour-name p-0 m-0">{title}</p>
          <span className="team">{memberCount}</span>
          <br />
          <p className="tour-date">
            {startDate} - {endDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
