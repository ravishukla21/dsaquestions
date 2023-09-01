import React, { useState } from "react";
import { addUser } from "./Redux/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = { name, email };
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>ADD NEW USER</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name"
              onChange={(e) => setname(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="enter email"
              onChange={(e) => setemail(e.target.value)}
            ></input>
          </div>
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
