import React from "react";
import "./Homehead.css";
import Navbar from "../Navigation/Navbar";
import Typical from "react-typical";
import Footer from "../Footer";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";

function Homehead() {
  // const { text } = useTypewriter({
  //   words: [" Developer.", " Learner.", " Coder.", " Self Believer."],
  //   loop: 5,
  //   typeSpeed: 70,
  //   deleteSpeed: 50,
  //   delaySpeed: 1000,
  // });

  const [text] = useTypewriter({
    // words: ["I Can Sir", "You Can Sir", "We Can Sir"],
    words: ["I Can Sir", "You Can Sir", "We Can Sir"],
    loop: 0,
    // delaySpeed: 2000,
    // loop: 5,
    // typeSpeed: 70,
    // deleteSpeed: 50,
    // delaySpeed: 1000,
  });

  return (
    <div>
      <div className="homehead">
        <Navbar />
        <div className="homehead__social">
          {/* <div className="social">
            <a href="https://www.instagram.com/i_cansir/">
              <img
                src="https://w7.pngwing.com/pngs/69/315/png-transparent-computer-icons-facebook-inc-logo-facebook-blue-text-rectangle.png"
                alt="fb"
              />
            </a>
          </div>

          <div className="social">
            <a href="https://www.instagram.com/i_cansir/">
              <img
                src="https://image.similarpng.com/very-thumbnail/2020/05/Glossy-Instagram-logo-PNG.png"
                alt="insta"
              />
            </a>
          </div> */}
        </div>

        <div className="homehead__wrapper">
          <div className="homehead__headText">
            <h2>WE ENVISION AN INDIA EMPOWERED TO</h2>
            <h1>
              {text}
              <Cursor />
            </h1>

            <p>
              We are a non-profit organization, on a mission to empower all
              people to fight cancer through awareness, prevention, early
              detection, patient support and survivor empowerment.
            </p>

            <div className="homehead__btn">
              <a href="/donatee" className="homehead__join">
                Join Us
              </a>
              <a href="/donate-us" className="homehead__learn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* // </div> */}
    </div>
  );
}

export default Homehead;

// <div className="slider-frame">
//   {/* <div className="slide-images"> */}
//   <img
//     className="home__image"
//     src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
//     alt=""
//   />
//   {/* </div> */}
//   {/* <div className="slide-images"> */}
//   <img
//     className="home__image"
//     // src="https://techstory.in/wp-content/uploads/2021/07/Amazon-Prime-Day-Sale-Banner-1536x864.jpg"
//     src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/OnePlus/OnePlus6T/PriceDrop/D9867094_IN_WLME_OnePlus_PriceDrop_NewKV_PC_LP_1500x600._CB465812565_.jpg"
//     alt=""
//   />
//   {/* </div> */}
//   {/* <div className="slide-images"> */}
//   <img
//     className="home__image"
//     src="https://m.media-amazon.com/images/G/01/IMDb/design/specs/examples/mobile/mobilebanner_btfaft._CB1579219873_._TTW_.jpg"
//     alt=""
//   />
//   <img
//     className="home__image"
//     src="https://m.media-amazon.com/images/S/aplus-media/vc/5021a677-1b20-4e8f-911b-f5ac16a678ce.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
//     alt=""
//   />
{
  /* <img
          className="home__image"
          // src="https://techstory.in/wp-content/uploads/2021/07/Amazon-Prime-Day-Sale-Banner-1536x864.jpg"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/OnePlus/OnePlus6T/PriceDrop/D9867094_IN_WLME_OnePlus_PriceDrop_NewKV_PC_LP_1500x600._CB465812565_.jpg"
          alt=""
        /> */
}
{
  /* </div> */
}
