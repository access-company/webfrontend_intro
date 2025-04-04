import { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

const heavyCalculation = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  // キャッシュしない場合
  const value = heavyCalculation();

  // キャッシュする場合
  // const value = useMemo(heavyCalculation, []);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>{value}</div>
    </>
  );
};

createRoot(document.getElementById("root")!).render(<Counter />);
