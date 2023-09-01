import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./Redux/UserReducer";

const Home = () => {
  const users = useSelector((state) => state.users);
  console.log(users, "users");
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id, "id");
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div className="container">
      <h2>crud app with json server</h2>

      <Link className="btn btn-success my-3" to="/create">
        Create +
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-sm btn-danger ms-2"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
