import React, { memo } from "react";

const ChildA = () => {
  console.log("child component");
  return <div>ChildA</div>;
};

export default memo(ChildA);
