import { FC, useState } from "react";
import { createRoot } from "react-dom/client";

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(<Counter />);
