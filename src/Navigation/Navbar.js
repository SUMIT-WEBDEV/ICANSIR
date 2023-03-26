import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  FaWhatsappSquare,
  FaInstagram,
  FaFacebookF,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  // const [show, handleShow] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const changeBackground = () => {
    if (window.scrollY > 40) {
      setNavbar(true);
    } else setNavbar(false);
  };

  window.addEventListener("scroll", changeBackground);

  // useEffect(() => {
  //     showButton()
  // },[])

  return (
    <>
      {/* <IconContext.Provider value={{ color: '#fff'}}> */}
      {/* <div className={`navbar ${show && "navbar__black" }`}> */}
      <div className={navbar ? "navbar navbar__black" : "navbar"}>
        <div className="navbar-container container">
          <li className="nav-image">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <h1>
                <span className="I">I</span>
                <span className="can">CAN</span>
                <span className="sir">SIR</span>
              </h1>
            </Link>
          </li>

          {/* --------------------------------- */}

          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FaTimes
                style={{
                  color: "#fff",
                  fontSize: "30px",
                  paddingRight: "100px",
                  paddingTop: "27px",
                }}
              />
            ) : (
              <FaBars
                style={{
                  color: "#fff",
                  fontSize: "30px",
                  paddingRight: "100px",
                  paddingTop: "27px",
                }}
              />
            )}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/work" className="nav-links" onClick={closeMobileMenu}>
                Our Work
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/what-is-cancer"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Understanding Cancer
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="get-involved"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Get Involved
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/blogs" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>

            <div className="nav-Social">
              <Link to="/" className="nav-Insta" onClick={closeMobileMenu}>
                <FaInstagram className="socialFa insta" />
              </Link>

              <Link to="/" className="nav-Whatsapp" onClick={closeMobileMenu}>
                <FaWhatsappSquare className="socialFa whatsapp" />
              </Link>

              <Link to="/" className="nav-fb" onClick={closeMobileMenu}>
                <FaFacebookF className="socialFa fb" />
              </Link>
            </div>
          </ul>

          {/* --------------------------------- */}

          <Link to="/donate-us" className="btn-Link" onClick={closeMobileMenu}>
            <button className="btn">DONATE NOW</button>
          </Link>
        </div>
      </div>
      {/* </IconContext.Provider> */}
    </>
  );
}

export default Navbar;
