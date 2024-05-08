import { createRoot } from "react-dom/client";
import './index.css';
import Calculator from './view/containers/Calculator';

createRoot(document.getElementById("root")!).render(<Calculator />);