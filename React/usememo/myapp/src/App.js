import logo from "./logo.svg";
import "./App.css";
import ParentTwo from "./components/ParentTwo";
import { useCallback, useState } from "react";
import ChildA from "./usecallback/ChildA";

function App() {
  const [add, setadd] = useState(0);
  const [count, setcount] = useState(0);
  const learning = useCallback(() => {
    //learning functions called
  }, [count]);
  return (
    <div className="App">
      <h1>hello world hi i am ravi shukla</h1>
      <h1>usememo</h1>
      {/* <ParentTwo /> */}
      <h1>usecallback</h1>
      <ChildA learning={learning} count={count} />
      {add}
      <button onClick={() => setadd(add + 1)}>ADDITION</button>
      {count}
      <button onClick={() => setcount(count + 2)}>usecallback</button>
    </div>
  );
}

export default App;
