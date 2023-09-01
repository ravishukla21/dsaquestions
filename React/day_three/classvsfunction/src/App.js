import logo from "./logo.svg";
import "./App.css";
import Class from "./Pages/Class";
import Function from "./Pages/Function";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        columnGap: "50px",
        border: "2px solid black",
        backgroundColor: "red",
        padding: "20px 20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Class />
      <Function />
    </div>
  );
}

export default App;
