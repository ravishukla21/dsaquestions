import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Customer from "./Components/Customer";
import Users from "./Components/Users";

function App() {
  return (
    <div className="App">
      <h1>react typescript</h1>
      <Customer name="ravi" title={"javscript"} age={25} />
      <Users userid={12} />
    </div>
  );
}

export default App;
