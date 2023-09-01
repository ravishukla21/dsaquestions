import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./Redux/UserReducer";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingusers = users.filter((el, index) => el.id == id);
  const { name, email } = existingusers[0];
  const [uname, setname] = useState(name);
  const [uemail, setemail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>UPDATE USER</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name"
              value={uname}
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
              value={uemail}
              onChange={(e) => setemail(e.target.value)}
            ></input>
          </div>
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
