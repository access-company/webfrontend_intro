// C1/Q1
// * 任意の赤色の物の名前, 緑色の物の名前, 青色の物の名前を TSX 内に追加
//  * それぞれが赤色, 青色, 緑色となるようにスタイルを指定
//  * 並びや位置関係、厳密に物の色が正しいかどうかは不問
//
import { FC } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const ChildComponent: FC = () => {
  return (
    <div>
      <p className="red">red</p>
      <p className="green">green</p>
      <p className="blue">blue</p>
    </div>
  );
};

const App: FC = () => {
  return (
    <div>
      <ChildComponent />
    </div>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
