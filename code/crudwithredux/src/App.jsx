import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Update from "./Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/edit/:id" element={<Update />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
