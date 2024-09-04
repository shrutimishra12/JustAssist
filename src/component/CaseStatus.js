import React from "react";
import Wrraper from "./Wrraper";

const CaseStatus = () => {
  return (
    <Wrraper>
      <h1>Case Status</h1>
      <p>
        Click the button below to check your case status on the official eCourts website:
      </p>
      <a
        href="https://services.ecourts.gov.in/ecourtindia_v6/"
        
        rel="noopener noreferrer"
      >
        <button>Check Case Status</button>
      </a>
    </Wrraper>
  );
};

export default CaseStatus;
