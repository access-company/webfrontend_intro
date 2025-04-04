// C9/Q1
// 2つのcountの状態（`count1`、`count2`）をincrement, decrement, reset する`reducer`を実装してください。
// [ヒント]
// * spread構文を使う（`...state`）
//
import { useReducer } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

type State = {};
type Action = {};

const initialState: State = {
  count1: 0,
  count2: 0,
};

function reducer(state: State, action: Action) {
  const { count1 } = state;
  switch (action.type) {
    case 'increment1':
      return { count1: count1 + 1 };
    case 'decrement1':
      return { count1: count1 - 1 };
    case 'reset1':
      return initialState;
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
        <button onClick={() => dispatch({ type: 'reset1' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'decrement1' })}>-</button>
        <button onClick={() => dispatch({ type: 'increment1' })}>+</button>
      </div>
      <div>
        <p>Count2: {state.count2}</p>
        <button onClick={() => dispatch({ type: 'reset2' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'decrement2' })}>-</button>
        <button onClick={() => dispatch({ type: 'increment2' })}>+</button>
      </div>
    </>
  );
}

createRoot(document.getElementById('root')!).render(<Counter />);
