// C8/Q3
// 以下の要件を満たしてください。
// * 変数 `power` を State 化する
//   * `boolean` 型として 初期値 `false` とする
// * `Switch` コンポーネントをクリックした際に power の値が切り替わるようにする
//   * `true` -> `false`, `false` -> `true`
//   * [ヒント] `Switch` コンポーネントの `props` にある `onClick` にイベントハンドラを渡すと、`Switch` コンポーネントをクリックした時の振る舞いを定義できる。
//
import { FC, useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

// ボタンを押した時に電球が光って、世界が明るくなるようにしましょう

declare type LightBulbProps = {
  power: boolean;
};

declare type SwitchProps = {
  power: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const LightBulb: FC<LightBulbProps> = (props) => {
  const { power } = props;
  return (
    <div>
      {power ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
          <line x1="9.7" y1="17" x2="14.3" y2="17" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
          <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
          <line x1="9.7" y1="17" x2="14.3" y2="17" />
        </svg>
      )}
    </div>
  );
};

const Switch: FC<SwitchProps> = (props) => {
  const { power, onClick } = props;
  return (
    <div className="switch" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={power ? '#2c3e50' : '#ffffff'}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 6a7.75 7.75 0 1 0 10 0" />
        <line x1="12" y1="4" x2="12" y2="12" />
      </svg>
    </div>
  );
};

const ChildComponent: FC = () => {
  const power = false;

  const onClickSwitch = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // onClickSwitch を実装
    },
    [power]
  );

  return (
    <div className={power ? 'subContainer' : 'subContainer off'}>
      {/* 下記の2つのコンポーネントに必要な物を渡す */}
      <LightBulb />
      <Switch />
      {/* ================================ */}
      <p>SVG Icons by Tabler Icons (https://tablericons.com/)</p>
    </div>
  );
};

const App: FC = () => {
  return <ChildComponent />;
};

createRoot(document.getElementById('root')!).render(<App />);
