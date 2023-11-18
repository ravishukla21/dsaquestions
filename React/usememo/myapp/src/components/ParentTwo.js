import React, { useState } from "react";
import { MemoizedChildern } from "./ChildTwo";

const ParentTwo = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("vishwas");
  console.log("parent two render");
  return (
    <div>
      <button onClick={() => setcount((c) => c + 1)}>Count-{count}</button>
      <button onClick={() => setname("codeevolution")}>Change name</button>
      <MemoizedChildern name={name} />
    </div>
  );
};

export default ParentTwo;
