import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__Wrapper">
        <h1>ABOUT US</h1>

        <div className="about__WrapperFirst">
          {/* 1st section */}
          <div className="first__Left">
            <img
              src="https://media.gettyimages.com/photos/man-with-cancer-picture-id170652904?s=612x612"
              alt=""
            />
          </div>

          <div className="first__Right">
            <h1>Journey: From 2011 World Cup to ICANSIR</h1>
            <p>
              The 2 biggest Cs in Yuvi’s life are his love for cricket and his
              battle against cancer. Watch his inspirational journey bbb of
              winning the 2011 ICC Cricket World Cup, fighting cancer and coming
              back and starting the YouWeCan movement!
            </p>
          </div>
        </div>

        <div className="about__WrapperSecond">
          <h1>IDEA OF STARTING ICANSIR</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
