// C9/Q2
// `useReducer` で車のアニメーションを実装しましょう。
//
// 以下の 4 つの状態を `useState` で管理しています。
//
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
		    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-car" width="56" height="56" viewBox="0 0 24 24" strokeWidth="1.5" stroke={fulfilled ? '#009988' : '#999999'} fill="none" strokeLinecap="round" strokeLinejoin="round">
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
declare type CurrentMode = 0 | 1 | 2 | 3;
declare type ChildComponentState = {
	fuelAmount: number;
	mode: CurrentMode;
}

const MODE_INITIAL = 0;
const MODE_FULFILLED = 1;
const MODE_OPENED = 2;
const MODE_LAUNCHED = 3;

// 必要なActionは全部でいくつ？
declare type ChildComponentActions = {
	type: 'SET_FUEL_AMOUNT'; // これ以外にもActionのtypeは必要です。
	payload?: number;
}

const SET_FUEL_AMOUNT = 'SET_FUEL_AMOUNT'; // これ以外にもActionのtypeは必要です。

// reducer の本体
const reducer = (state: ChildComponentState, action: ChildComponentActions): ChildComponentState => {
	// 実装を追加しましょう
	switch(action.type) {
		case SET_FUEL_AMOUNT: {
			return state;
		}
		default:
			return state;
	}
}

// reducer 用の初期値を入れましょう
const initialState = {};

const ChildComponent: FC = () => {
	// useState が乱立しているので useReducer を用いてまとめましょう
	// Range Control
	const [fuelAmount, setFuelAmount] = useState<number>(0);
	// State
	const [fulfilled, setFulfilled] = useState<boolean>(false);
	const [opened, setOpened] = useState<boolean>(false);
	const [launched, setLaunched] = useState<boolean>(false);
	
  // Event Handler
	// 各関数の実装を useReducer を用いるものに変更しましょう
	const onChangeFuel = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Input Range control
		const amount = Number(e.target.value);
		setFuelAmount(amount);
		
		// Set State
		if (amount > 99) {
			setFulfilled(true);
		}
	};
	
	const onClickLaunch = () => {
		setLaunched(true);
	};
	
	const onClickOpen = () => {
		setOpened(true);
	};
	
	const onClickReset = () => {
		setFuelAmount(0);
		setFulfilled(false);
		setOpened(false);
		setLaunched(false);
	};
	
	// Disalbled flags
	// useReducer の state を活用するようにしましょう
	const fuelRangeDisabled = fulfilled;
	const openButtonDisalbled = !fuelRangeDisabled || opened;
	const launchButtonDisabled = !fuelRangeDisabled || !openButtonDisalbled || launched;
	const resetButtonDisabled = !fuelRangeDisabled;
	
	// Fuel Range Label
	// useReducer の state を活用するようにしましょう
	const fuelLabelText = `Fuel: ${String(fuelAmount).padStart(3, '0')}%`;

	// Render
	// 変更内容を適用するようにしましょう
	return (
		<div className="subContainer">
		  <CarIndicator
		    fulfilled={fulfilled}
        opened={opened}
        launched={launched}
      />
      <input
         type="range"
         id="fuel"
         name="fuelTank"
         min="0"
         max="100"
         step="1"
         value={fuelAmount}
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
