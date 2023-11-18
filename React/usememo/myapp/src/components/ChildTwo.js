import React from "react";

export const ChildTwo = (props) => {
  console.log("child two render");
  return <div>ChildTwo-{props.name}</div>;
};

export const MemoizedChildern = React.memo(ChildTwo);
