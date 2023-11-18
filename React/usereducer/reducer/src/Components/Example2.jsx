import React, { useReducer, useState } from "react";
const ACTIONS = {
  Increment: "increment",
  Decrement: "decrement",
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.Increment:
      return { count: state.count + 1 };
    case ACTIONS.Decrement:
      return { count: state.count - 1 };

    default:
      return state;
  }
}
const Example2 = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  console.log(state, "state");
  return (
    <div>
      <button onClick={() => dispatch({ type: ACTIONS.Increment })}>
        Increment1
      </button>

      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: ACTIONS.Decrement })}>
        Decrement1
      </button>
    </div>
  );
};

export default Example2;
