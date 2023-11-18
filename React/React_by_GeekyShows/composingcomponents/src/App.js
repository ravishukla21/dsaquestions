import logo from "./logo.svg";
import "./App.css";
import Functionvsclass from "./Components/Functionvsclass";

function App() {
  return (
    <div className="App">
      <Functionvsclass name="ravi" age={20 + 2} arr={[1, 2, 3]} und="" />
    </div>
  );
}

export default App;
