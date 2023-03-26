// import React from "react";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import EmailIcon from "@material-ui/icons/Email";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
// import PhoneIcon from "@material-ui/icons/Phone";
// import TelegramIcon from "@material-ui/icons/Telegram";
// import WcIcon from "@material-ui/icons/Wc";
// import "./Contact.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
    location: "",
    no: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, message, location, no } = user;

    const res = await fetch("/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        location,
        no,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("invalid registration");
    } else {
      window.alert("Posted Successfully");
      console.log("SuccessFul RegistratioN");

      history.push("/");
    }
  };

  return (
    <div classname="contact_container">
      <div className="contact_card">
        <div className="contant_us">
          <h1>
            Please Submit it...
            <br />
            We Will Contact You
          </h1>
        </div>

        <form className="form">
          <div className="group_input">
            {/* <AccountCircleIcon className="icon" />{" "} */}
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputs}
              placeholder="Enter your name"
            />
          </div>
          <div className="group_input">
            {/* <EmailIcon className="icon" /> */}
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputs}
              placeholder="Gmail@gmail.com"
            />
          </div>

          <div className="group_input">
            {/* <PhoneIcon className="icon" /> */}
            <input
              type="text"
              name="no"
              value={user.no}
              onChange={handleInputs}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="group_input">
            {/* <LocationOnIcon className="icon" /> */}
            <input
              type="text"
              name="location"
              value={user.location}
              onChange={handleInputs}
              placeholder="Enter your  location"
            />
          </div>

          <div className="group_input">
            {/* <TelegramIcon className="icon" /> */}
            <textarea
              type="message"
              name="message"
              value={user.message}
              onChange={handleInputs}
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* <input type="Submit" value="Submit" /> */}
          <button
            type="submit"
            value="register"
            className="login__signInButton"
            onClick={PostData}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
