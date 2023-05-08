// C4/Q2
// 以下の要件を満たしてください
// * 画面上の 2 つの `<div>` にそれぞれ下記を満たす click イベントのハンドラを追加する
//   * 赤い `<div>` をクリックした際には `Clicked Red` のみコンソールに表示する
//   * 青い `<div>` をクリックした際には `Clicked Blue` のみコンソールに表示する
//
import { FC } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

// ’Clicked Blue’ とコンソールに表示するイベントハンドラー 'onClickInner' を実装

// 'Clicked Red' とコンソールに表示するイベントハンドラー 'onClickOuter' を実装

// 赤い部分を押したら 'Clicked Red', 青い部分を押したら 'Clicked Blue' のみ表示されるようにする

const onClickInner = (e: React.MouseEvent<HTMLDivElement>) => {};

const onClickOuter = (e: React.MouseEvent<HTMLDivElement>) => {};

const ChildComponent: FC = () => {
  return (
    <div className="subContainer">
      <div className="outer" onClick={}>
        <div className="inner" onClick={}>
          Matryoshka
        </div>
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
