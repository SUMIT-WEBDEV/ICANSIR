import React from "react";
import Navbar from "../../Navigation/Navbar";
import "./DonateHead.css";

function DonateHead() {
  return (
    <div className="donateHead">
      <Navbar />
      <div className="donateHead__Text">
        <h1>Donate Us</h1>
      </div>
    </div>
  );
}

export default DonateHead;
