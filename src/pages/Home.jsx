import React, { useState } from "react";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import "../pages/Home.css"

function Home() {
  const [started, setStarted] = useState(false);

  return (
    <div className="full-area">
      <div>
        {!started && (
          <button
            onClick={() => {
              setStarted(true);
            }}
            className="btn"
          >
            Start
          </button>
        )}
        {started && (
          <button
            onClick={() => {
              setStarted(false);
            }}
          >
            Stop
          </button>
        )}
      </div>
      {started && (
        <div className="camerafull">
        
          
        </div>
      )}

    </div>
  );
}

export default Home;
