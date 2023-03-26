import React, { useLayoutEffect } from "react";
import "./Header.css";
import Navbar from "./Navigation/Navbar";

function Header() {
  // useLayoutEffect(() => {
  // window.scrollTo(0, 0)
  // },[]);

  return (
    <>
      <Navbar />
      <div className="header">
        <div className="header__Wrapper">
          {/* <div className="header__text"> */}
          <h2>
            We Envision an India <br />
            Empowered to Defeat Cancer
          </h2>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Header;
