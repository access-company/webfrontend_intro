// C13/Q1
// `useState`を使ったボタンと`useRef`を使ったボタンのカウンタを作成してください。
// カウントはボタンのラベルに表示します。
// 期待する挙動は以下の通り。
// * `useState`を使ったボタンは、ボタン押下ごとにカウントアップする。
// * `useRef`を使ったボタンは、ボタン押下でカウントアップしない。再描画時にカウントを反映する。
//
import { useCallback, useState, useRef, FC } from "react";
import { createRoot } from "react-dom/client";

const ChildComponent: FC = () => {
  // TODO

  const onClickState = () => {
    // TODO
  };
  const onClickRef = () => {
    // TODO
  };

  return (
    <>
      <p>useState & useRef</p>
      <button onClick={onClickState}>{`state: `}</button>
      <button onClick={onClickRef}>{`ref: `}</button>
    </>
  );
};

function App() {
  return <ChildComponent />;
}

createRoot(document.getElementById("root")!).render(<App />);
