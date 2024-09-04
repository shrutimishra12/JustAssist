import React from "react";
import Wrraper from "./Wrraper";

const TrafficFine= () => {
  return (
    <Wrraper>
      <h1>Traffic Fine</h1>
      <p>
        Click the button below to watch live streaming on the official website:
      </p>
      <a
        href="https://echallan.parivahan.gov.in/index/accused-challan" // Replace with the actual URL
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Pay Traffic Fine</button>
      </a>
    </Wrraper>
  );
};

export default TrafficFine;
