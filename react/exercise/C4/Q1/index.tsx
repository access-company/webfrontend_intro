// C4/Q1
// 以下の要件を満たしてください
// * 画面上の `<button>` `<div>` にそれぞれ下記を満たす click イベントのハンドラを追加する
//   * `<button>` をクリックした際には `Clicked Button` とコンソールに表示する
//   * `<div>` をクリックした際には `Clicked Div` とコンソールに表示する
//
import { FC } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

// ’Clicked Button’ とコンソールに表示するイベントハンドラー 'onClickButton' を実装

// 'Clicked Div' とコンソールに表示するイベントハンドラー 'onClickDiv' を実装

// Button を押したら 'Clicked Button', Div を押したら 'Clicked Div' と表示されるようにする

const onClickButton = () => {
  console.log("Clicked Button");
};

const onClickDiv = () => {
  console.log("Clicked Div");
};

const ChildComponent: FC = () => {
  return (
    <div className="subContainer">
      <button className="button" onClick={onClickButton}>
        Button
      </button>
      <div className="area" onClick={onClickDiv}>
        Div
      </div>
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
