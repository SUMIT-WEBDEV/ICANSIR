import React from "react";
import Navbar from "../Navigation/Navbar";
import "./Work.css";

function WorkHead() {
  return (
    <div>
      <div className="work__head">
        <Navbar />
        <div className="work__headText">
          <h2>OUR WORK</h2>
          <p>
            Each year, 9.6 million people die from cancer around the world.
            That’s more than HIV/AIDS, malaria and tuberculosis combined. But
            together we can change this.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkHead;
