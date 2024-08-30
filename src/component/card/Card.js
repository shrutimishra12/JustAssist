import React from "react";
import "./Card.css"; // Ensure this is the path to your CSS file
import { FaCalendar, FaHourglassHalf } from "react-icons/fa";

const Card = ({ color, count, label, cal }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <div className="card-content">
        <div>
          <p className="count-text">{count}</p>
          <p className="label-text">{label}</p>
        </div>
        <div className="icon-container">
          {cal ? (
            <FaCalendar className="calc-icon" />
          ) : (
            <FaHourglassHalf className="rotating-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
