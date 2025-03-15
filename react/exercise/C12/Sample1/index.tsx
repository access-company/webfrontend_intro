import { FC, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const Counter: FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // セットアップ処理
    document.title = `You clicked ${count} times`;

    // クリーンナップ処理は必要ないため省略
    
  }, [count]); // エフェクトの依存する変数リスト

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
};
createRoot(document.getElementById("root")!).render(<Counter />);
