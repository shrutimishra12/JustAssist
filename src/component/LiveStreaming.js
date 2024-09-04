import React from "react";
import Wrraper from "./Wrraper";

const LiveStreaming = () => {
  return (
    <Wrraper>
      <h1>Live Streaming</h1>
      <p>
        Click the button below to watch live streaming on the official website:
      </p>
      <a
        href="https://www.sci.gov.in/live-streaming/" // Replace with the actual URL
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Watch Live Streaming</button>
      </a>
    </Wrraper>
  );
};

export default LiveStreaming;
