// C9/Q2
// `useReducer` で車のアニメーションを実装しましょう。
//
// アニメーションは以下の順で遷移します。
// - Fuel ゲージを満タンにする。
// - Open the gate ボタンでゲートを開く。
// - Launch ボタンで車を発進させる。
// - Reset ボタンで初期状態に戻る。
//
// 以下の 4 つの状態を `useState` で管理しています。
// - `fuelAmount`: 燃料ゲージ
// - `fulfilled`: 燃料が満タンかどうか
// - `opened`: ゲートが開いたかどうか
// - `launched`: 車が発進したかどうか
//
// `reducer` を実装し、 `useState` を `useReducer` に置き換えてください。
//
// `action` は必要に応じて追加してください。
//
import { FC, useReducer, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

declare type CarIndicatorProps = {
  fulfilled: boolean;
  opened: boolean;
  launched: boolean;
}

const CarIndicator: FC<CarIndicatorProps> = (props) => {
  const { fulfilled, opened, launched } = props;
  return (
    <div className="carIndicator">
      <div className={launched ? 'carLaunched' : 'carStopped'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-car"
          width="56"
          height="56"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke={fulfilled ? '#009988' : '#999999'}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
          <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
        </svg>
      </div>
      <div className={opened ? 'gateOpened' : 'gateClosed'} />
    </div>
  );
}

// ヒント: この WebApp の状態は全部で４段階
const CurrentMode = {
  INITIAL: 0,
  FULFILLED: 1,
  OPENED: 2,
  LAUNCHED: 3,
} as const

declare type ChildComponentState = {
  fuelAmount: number;
  mode: typeof CurrentMode[keyof typeof CurrentMode];
}

// 必要なActionは全部でいくつ？
declare type ChildComponentActions = {
  type: 'SET_FUEL_AMOUNT' | 'SET_OPENED' | 'SET_LAUNCHED' |'RESET';
  payload?: number;
}

// アクションは全部で4つあればよい
const SET_FUEL_AMOUNT = 'SET_FUEL_AMOUNT';
const SET_OPENED = 'SET_OPENED';
const SET_LAUNCHED = 'SET_LAUNCHED';
const RESET = 'RESET';

const reducer = (state: ChildComponentState, action: ChildComponentActions): ChildComponentState => {
  switch(action.type) {
    // 計４アクション分の返り値を定義
    case SET_FUEL_AMOUNT: {
      const fuelAmount = action.payload || 0;
      // 燃料が max になる時だけ、 mode を切り替える
      return {
        ...state,
        fuelAmount,
        mode: fuelAmount > 99 ? CurrentMode.FULFILLED : CurrentMode.INITIAL,
      };
    }
    case SET_OPENED: {
      return {
        ...state,
        mode: CurrentMode.OPENED,
      };
    }
    case SET_LAUNCHED: {
      return {
        ...state,
        mode: CurrentMode.LAUNCHED,
      };
    }
    // Reset 処理
    // initialState の定義位置を少し変えてここに渡しても良い
    case RESET: {
      return {
        fuelAmount: 0,
        mode: CurrentMode.INITIAL,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  fuelAmount: 0,
  mode: CurrentMode.INITIAL,
}

const ChildComponent: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  // 以下のように先に書いてしまって、state 内の値を使うのもあり。
  // const { mode, fuelAmount } = state;

  // e.target.value の値を渡すのを忘れずに
  const onChangeFuel = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SET_FUEL_AMOUNT,
      payload: Number(e.target.value),
    });
  };
  
  const onClickLaunch = () => {
    dispatch({
      type: SET_LAUNCHED,
    });
  };
  
  const onClickOpen = () => {
    dispatch({
      type: SET_OPENED,
    });
  };
  
  const onClickReset = () => {
    dispatch({
      type: RESET,
    });
  };
  
  // Disalbled flags
  // state.mode を使って簡略化
  // Destructuring していれば mode !== ... で書ける
  const fuelRangeDisabled = state.mode !== CurrentMode.INITIAL;
  const openButtonDisalbled = state.mode !== CurrentMode.FULFILLED;
  const launchButtonDisabled = state.mode !== CurrentMode.OPENED;
  const resetButtonDisabled = !fuelRangeDisabled;
  
  // Fuel Range Label
  // state.fuelAmount に変えるだけ
  // Destructuring していれば変更不要
  const fuelLabelText = `Fuel: ${String(state.fuelAmount).padStart(3, '0')}%`;

  // Render
  // CarIndicator に渡す値を state.mode を使って生成
  // input に state.fuelAmount を渡す
  // Destructuring していれば少しシンプルになる
  return (
    <div className="subContainer">
      <CarIndicator
        fulfilled={state.mode >= CurrentMode.FULFILLED}
        opened={state.mode >= CurrentMode.OPENED}
        launched={state.mode >= CurrentMode.LAUNCHED}
      />
      <input
         type="range"
         id="fuel"
         name="fuelTank"
         min="0"
         max="100"
         step="1"
         value={state.fuelAmount}
         onChange={onChangeFuel}
         disabled={fuelRangeDisabled}
      />
      <label htmlFor="fuel">
        {fuelLabelText}
      </label>
      <button
        onClick={onClickOpen}
        disabled={openButtonDisalbled}
      >
        Open the gate
      </button>
      <button
        onClick={onClickLaunch}
        disabled={launchButtonDisabled}
      >
        Launch
      </button>
      <button
        onClick={onClickReset}
        disabled={resetButtonDisabled}
      >
        Reset
      </button>
      <p>
        SVG Icons by Tabler Icons (https://tablericons.com/)
      </p>
    </div>
  );
};

const App: FC = () => {
  return <ChildComponent/>
}

createRoot(document.getElementById("root")!).render(<App />);
