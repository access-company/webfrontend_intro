// C8/Q1
// `Counter`コンポーネントを修正して、以下の要件を満たしてください。
// * increment(+)ボタンとdecrement(-)ボタンを用意する
// * increment(+)ボタンを押下すると、countが1上がる
// * decrement(-)ボタンを押下すると、countが1下がる
// * countが 0 のとき、decrement(-)ボタンを disabled（ボタン押下できない状態）にする
//   * [ヒント] button要素に `disabled` 属性（boolean）を付与する
//
import { FC, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

// useStateを追加する場合
const Counter: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [evenNumber, setEvenNumber] = useState<boolean>(true);
  const increment = () => {
    setCount(count + 1);
    setEvenNumber((count + 1) % 2 === 0);
  };
  const decrement = () => {
    setCount(count - 1);
    setEvenNumber((count + 1) % 2 === 0);
  };

  return (
    <div>
      <p className={evenNumber ? "evenNumber" : undefined}>Counter: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement} disabled={count === 0}>
        -
      </button>
    </div>
  );
};

// useStateを追加しない場合
// const Counter: FC = () => {
//   const [count, setCount] = useState<number>(0);
//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);

//   return (
//     <div>
//       <p className={count % 2 === 0 ? "evenNumber" : ""}>Counter: {count}</p>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement} disabled={count === 0}>
//         -
//       </button>
//     </div>
//   );
// };

createRoot(document.getElementById("root")!).render(<Counter />);
