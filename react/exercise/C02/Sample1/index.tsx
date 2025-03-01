import { useState } from "react";
import { createRoot } from "react-dom/client";

function Multiplication() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);

  const result = num1 * num2;

  return (
    <div>
      <button onClick={() => setNum1(num1 + 1)}>{num1}</button>
      x
      <button onClick={() => setNum2(num2 + 1)}>{num2}</button>
      =
    {result}
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<Multiplication />);
