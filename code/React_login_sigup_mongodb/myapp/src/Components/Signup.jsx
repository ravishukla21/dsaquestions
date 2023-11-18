import React, { useState } from "react";
import "./Loginone.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const history = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name,
      email,
      password,
    };

    console.log(obj, "signuppage");
    axios
      .post("http://localhost:4500/signup", obj)
      .then((res) => {
        console.log(res);

        if (res.data == "exist") {
          alert("user alredy exist");
        } else if (res.data == "notexist") {
          history("/home", { state: { id: name } });
          alert("user sign up succesfully");
        }
      })
      .catch((err) => {
        alert("wrong details");
        console.log(err);
      });
    setemail("");
    setname("");
    setpassword("");
  };
  return (
    <div className="login_form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Email </label>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            type="text"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
        </div>{" "}
        <div>
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
