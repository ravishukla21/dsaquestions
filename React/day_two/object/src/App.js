import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import Two from "./Two";

function App() {
  const [obj, setobj] = useState([
    {
      name: "ravi",
      address: {
        add1: "ram",
        add2: "shyam",
      },
    },
  ]);
  console.log(obj, "obj");
  return (
    <div className="App">
      objects manipulate
      <div>
        <Two obj12={obj} />
      </div>
    </div>
  );
}

export default App;
