import React, { useState } from "react";
import "./Loginone.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    let obj = {
      email,
      password,
    };

    console.log(obj, "login.jsx");

    axios
      .post("http://localhost:4500/", obj)
      .then((res) => {
        console.log(res);

        if (res.data == "exist") {
          history("/home", { state: { id: email } });
        } else if (res.data == "notexist") {
          alert("user have not sign up");
        }
      })
      .catch((err) => {
        alert("wrong details");
        console.log(err);
      });
    setemail("");
    setpassword("");
  };
  return (
    <div className="login_form">
      <form onSubmit={handleClick}>
        <div>
          <label htmlFor="name">Email</label>
          <input
            id="name"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
        </div>{" "}
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
