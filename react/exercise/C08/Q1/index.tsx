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

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(<Counter />);
