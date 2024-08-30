import React from "react";

const Wrraper = ({ children }) => {
  return (
    <div
      style={{
        marginLeft: "32px",
        marginTop: "24px",
        marginRight: "32px",
        marginBottom: "24px",
      }}
    >
      {children}
    </div>
  );
};

export default Wrraper;
