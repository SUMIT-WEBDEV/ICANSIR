import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Involved() {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, message } = user;

    const res = await fetch("/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("invalid registration");
    } else {
      window.alert("Registration Successful");
      console.log("SuccessFul RegistratioN");

      history.push("/");
    }
  };

  // function PostData()
  // {
  //   // console.warn({name,email,message});
  //     const { name, email, message } = user;
  //     let data = {name, email, message}

  //   fetch("/auth/register", {
  //     method: "POST",
  //     headers: {
  //       "Accept": 'application/json',
  //       "Content-Type" : "application/json"
  //     },
  //     body:JSON.stringify(data)
  //   }).then((result)=>{
  //     console.warn(result)
  //   })
  // }

  return (
    <div>
      <form method="POST">
        <h5>Name</h5>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputs}
        />

        <h5>Email</h5>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputs}
        />

        {/* <h5>Phone</h5> */}
        <h5>message</h5>
        <input
          type="message"
          name="message"
          value={user.message}
          onChange={handleInputs}
          // onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          value="register"
          className="login__signInButton"
          onClick={PostData}
        >
          Post Here
        </button>
      </form>
    </div>
  );
}

export default Involved;
