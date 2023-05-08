import { FC, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const Counter: FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You cliked ${count} times`;
  });

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
};

createRoot(document.getElementById("root")!).render(<Counter />);
