import React from "react";
import "./Collab.css";

function Collab() {
  return (
    <div className="collab">
      <div className="collab__wrapper">
        <div className="collab__top">
          <p>
            Our mission is to empower all people to defeat cancer through
            awareness, early detection, patient support and survivor
            empowerment. We cannot do this alone, we believe that strategic
            collaboration is at the heart of the fight against cancer.
          </p>
          <br />
          <p>
            Strategic collaborations that involve civil society, companies,
            cities, international organisations and agencies, research and
            academic institutions are the strongest ways to help expand
            awareness and support, convert political will into action and
            deliver comprehensive and cohesive solutions. Joining efforts leads
            to powerful action at every level.
          </p>
          <br />
          <p>
            Literally, anyone who wants to commit to a world free of cancer can
            connect and collaborate with us! We believe that good collaborations
            make you think wider, and greater while adding value to life and
            social change in many small yet significant ways.
          </p>
        </div>

        <div className="collab__mid">
          <div className="collab__header">
            <h2>Still wondering how we can collaborate?</h2>
            <h2> Here are few examples:</h2>
          </div>

          <div className="collab__para">
            <div className="collab__paraWrapper">
              <div className="collab__paraLeft">
                <li className="list-items">
                  Are you a patient group that’s looking to partner with
                  like-minded organisations?
                </li>
                <li className="list-items">
                  Are you an NGO, which is open to pooling resources to maximise
                  impact?
                </li>
                <li className="list-items">
                  Are you a hospital which wants to work together towards
                  paediatric cancer treatment?
                </li>
              </div>
              <div className="collab__paraRight">
                <li className="list-items">
                  Are you a city or state government, looking to create better
                  awareness amongst your citizens?
                </li>
                <li className="list-items">
                  Are you part of a college that wants to invite us to your
                  fest?
                </li>
                <li className="list-items">
                  Are you a group of change makers that has an innovation they
                  want to share on our social media platforms?
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collab;
