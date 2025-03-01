import { createRoot } from "react-dom/client";

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  createRoot(document.body).render(element);
}

setInterval(tick, 1000);
