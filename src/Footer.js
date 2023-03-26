import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
// import logo1 from "/photos/logo1.png"

function Footer() {
  return (
    <div className="footer">
      <div className="footer__Wrapper">
        <div className="footer__Left">
          <img className="footer__Logo" src="/png.png" alt="" />
          <h1>ICANSIR</h1>
          {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
        </div>
        <div className="footer__Right">
          <div className="footer__first">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link
                className="footer__links"
                to="/https://www.w3schools.com/CSSref/css3_pr_box-shadow.asp"
              >
                adress
              </Link>
              <Link className="footer__links" to="/">
                2number
              </Link>
              <Link className="footer__links" to="/">
                2number
              </Link>
              <Link className="footer__links" to="/">
                mail
              </Link>
            </div>
            <div className="footer-link-items">
              <h2>Get Involved</h2>
              <Link className="footer__links" to="/sign-up">
                adress
              </Link>
              <Link className="footer__links" to="/">
                2number
              </Link>
              <Link className="footer__links" to="/">
                2number
              </Link>
              <Link className="footer__links" to="/">
                mail
              </Link>
            </div>
          </div>

          <div className="footer__second">
            <div className="footer-link-items">
              <h2>Others</h2>
              <Link className="footer__links" to="/sign-up">
                adress
              </Link>
              <Link className="footer__links" to="/">
                2number
              </Link>
              <Link className="footer__links" to="/">
                2number
              </Link>
              <Link className="footer__links" to="/">
                mail
              </Link>
            </div>
            <div className="footer-link-items">
              <h2>Privacy Policy</h2>
              <Link className="footer__links" to="/sign-up">
                adress
              </Link>
              <Link className="footer__links" to="/">
                2number
              </Link>
              <Link className="footer__links" to="/">
                2number
              </Link>
              <Link className="footer__links" to="/">
                mail
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
