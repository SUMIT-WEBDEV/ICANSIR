import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    const res = await fetch("/logins", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    console.log(data);

    if (res.status === 400 || !data) {
      window.alert("Invalid credentials");
      console.log("Invalid credentials");
    } else {
      window.alert("Login successful");
      console.log("Login successful");
      history.push("/addArticle");
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <img className="login__logo" src="../png.png" alt="Admin Panel Logo" />

        <h1 className="login__title">Admin Panel</h1>

        <h2 className="login__subtitle">Control panel login</h2>

        <form className="login__form" method="POST">
          <label htmlFor="email" className="login__label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="login__input"
            value={user.email}
            onChange={handleInputs}
            required
          />

          <label htmlFor="password" className="login__label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="login__input"
            value={user.password}
            onChange={handleInputs}
            required
          />

          <button
            type="submit"
            value="login"
            className="login__button"
            onClick={loginUser}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
