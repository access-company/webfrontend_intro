// C9/Q1
// 2つのcountの状態（`count1`、`count2`）をincrement, decrement, reset する`reducer`を実装してください。
// [ヒント]
// * spread構文を使う（`...state`）
//
import { useReducer } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

type State = {
  count1: number;
  count2: number;
};
type Action = {
  type:
    | "increment1"
    | "decrement1"
    | "reset1"
    | "increment2"
    | "decrement2"
    | "reset2";
};

const initialState: State = {
  count1: 0,
  count2: 0,
};

function reducer(state: State, action: Action) {
  const { count1, count2 } = state;
  switch (action.type) {
    case "increment1":
      return { ...state, count1: count1 + 1 };
    case "decrement1":
      return { ...state, count1: count1 - 1 };
    case "reset1":
      return { ...state, count1: initialState.count1 };
    case "increment2":
      return { ...state, count2: count2 + 1 };
    case "decrement2":
      return { ...state, count2: count2 - 1 };
    case "reset2":
      return { ...state, count2: initialState.count2 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <p>Count1: {state.count1}</p>
        <button onClick={() => dispatch({ type: "reset1" })}>Reset</button>
        <button onClick={() => dispatch({ type: "decrement1" })}>-</button>
        <button onClick={() => dispatch({ type: "increment1" })}>+</button>
      </div>
      <div>
        <p>Count2: {state.count2}</p>
        <button onClick={() => dispatch({ type: "reset2" })}>Reset</button>
        <button onClick={() => dispatch({ type: "decrement2" })}>-</button>
        <button onClick={() => dispatch({ type: "increment2" })}>+</button>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<Counter />);
