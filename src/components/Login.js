import React from "react";
import { useState } from "react";
import "../components/Login.css";

function Login({ currentEvent }) {
  const [mail, setMail] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function mailHandler(e) {
    setMail(e.target.value);
  }
  function userHandler(e) {
    setUser(e.target.value);
  }
  function passHandler(e) {
    setPass(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const info = {
      mail: mail,
      user: user,
      pass: pass,
    };

    console.log(info);

    if (mail.length === 0 || user.length === 0 || pass.length === 0) {
      alert("Please Enter Valid Information");
    } else {
      currentEvent(true);
    }
  }

  return (
    <div className="login">
      <form action="submit">
        <input onChange={mailHandler} placeholder="Enter Email..."></input>
        <input onChange={userHandler} placeholder="Enter Username..."></input>
        <input onChange={passHandler} type="password" placeholder="Enter Password..."></input>
        <button onClick={submitHandler} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
