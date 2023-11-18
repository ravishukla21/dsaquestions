import React, { useReducer } from "react";
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Count = () => {
  //const [count, setcount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };
  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };
  return (
    <div>
      <button disabled={state.count <= 0} onClick={decrement}>
        decrement
      </button>
      <h3>{state.count}</h3>

      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Count;
