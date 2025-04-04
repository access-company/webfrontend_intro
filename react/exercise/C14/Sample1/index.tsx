import { useState, memo, useCallback } from "react";
import { createRoot } from "react-dom/client";

const heavyCalculation = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
};

interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  console.log("button render");
  heavyCalculation();
  return <button onClick={onClick}>click</button>;
};

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <p>カウント: {count}</p>
      <Button onClick={handleIncrement} />
    </>
  );
};
createRoot(document.getElementById("root")!).render(<App />);
