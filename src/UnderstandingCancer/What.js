import React from "react";
import Navbar from "../Navigation/Navbar";
import "./What.css";

function What() {
  return (
    <div className="what">
      <div className="what__head">
        <Navbar />
        <div className="whatHead__text">
          <h1>Understanding Cancer</h1>
        </div>
      </div>
    </div>
  );
}

export default What;
