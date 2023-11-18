import React from "react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./MainPagecss.css";
function MainPage() {
  const [login, setlogin] = useState(true);
  const [signup, setsignup] = useState("");
  return (
    <div className="App">
      <div className="container">
        <div className="top_button">
          <div className="button-box">
            <div id="btn"> </div>
            <button
              className={`toggle-btn
                ${login ? "active" : ""}
                `}
              onClick={() => setlogin(true)}
            >
              Login
            </button>
            <button
              className={`toggle-btn
              ${login ? "" : "active"}
              `}
              onClick={() => setlogin(false)}
            >
              Signup
            </button>
          </div>
        </div>
        <div className="login_main">{login ? <Login /> : <Signup />}</div>
        <div></div>
      </div>
    </div>
  );
}

export default MainPage;
