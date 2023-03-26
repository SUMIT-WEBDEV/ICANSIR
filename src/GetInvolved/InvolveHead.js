import React from "react";
import Navbar from "../Navigation/Navbar";
import "./InvolveHead.css";

function InvolveHead() {
  return (
    <div>
      <div className="involved__head">
        <Navbar />
        <div className="involved__headText">
          <h2>
            Your support, that's what <br />
            keeps us going!
          </h2>
          {/* <h2>keeps us going!</h2> */}
        </div>
      </div>
    </div>
  );
}

export default InvolveHead;
