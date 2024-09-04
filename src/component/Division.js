import React from "react";
import Wrraper from "./Wrraper";

const Division = () => {
  return (
    <Wrraper>
      <h1>Division</h1>
      <p>Information about divisions will be displayed here.</p>
      <p>
        For more details, visit the external site by clicking the button below:
      </p>
      <a
        href="https://legalaffairs.gov.in/about-us/whos-who" // Replace with the actual URL
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>View Division Details</button>
      </a>
    </Wrraper>
  );
};

export default Division;
