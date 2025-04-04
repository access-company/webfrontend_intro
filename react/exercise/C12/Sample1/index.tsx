import { FC, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const Counter: FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // エフェクト処理
    document.title = `You clicked ${count} times`;

  },[count]); // エフェクトの依存値リスト

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
};
createRoot(document.getElementById("root")!).render(<Counter />);
