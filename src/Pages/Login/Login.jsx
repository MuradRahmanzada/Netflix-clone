import React from "react";
import "./Login.scss";
import {Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt=""
            className="logo"
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number"/>
          <input type="password" placeholder="Password" />
          <Link className="registerButton" to="/main">
            Sign In
          </Link>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page in protected by Googl reCAPTCHA to ensure you're not a
            bot. <b>Learn More</b>
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login;
