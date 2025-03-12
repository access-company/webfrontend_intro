import { FC, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  console.log(`RENDER：${count}`);

  useEffect(() => {
    // セットアップ処理
    document.title = `You clicked ${count} times`;
    console.log(`SET UP：${count}`);

    return () => {
      // クリーンナップ処理
      console.log(`CLEAN UP：${count}`);
    };
  }, [count]);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
};

createRoot(document.getElementById("root")!).render(<Counter />);
