import React from "react";
import Wrraper from "./Wrraper";

const PendingCases = () => {
  return (
    <Wrraper>
      <h1>Pending Cases</h1>
      <p>List of pending cases will be displayed here.</p>
      <p>
        For more details, you can visit the external site by clicking the button below:
      </p>
      <a
        href="https://njdg.ecourts.gov.in/njdgnew/?p=main/pend_dashboard" // Replace with the actual URL
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>View More Pending Cases</button>
      </a>
    </Wrraper>
  );
};

export default PendingCases;
