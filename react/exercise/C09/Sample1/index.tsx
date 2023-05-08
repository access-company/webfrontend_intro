import { useReducer } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

type State = { count: number };
type Action = { type: "reset" | "decrement" | "increment" };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action) {
  const { count } = state;
  switch (action.type) {
    case "increment":
      return { count: count + 1 };
    case "decrement":
      return { count: count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<Counter />);
