import { FC, useReducer, useState, useCallback } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

type ActionTypes = { [P in "toggle" | "on" | "off"]: string };
const actionTypes: ActionTypes = {
  toggle: "TOGGLE",
  on: "ON",
  off: "OFF",
};

const TOO_MANY_CLICKS = 4;
const initialState = { on: false };

const toggleSwitchReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.toggle:
      return { on: !state.on };
    case actionTypes.on:
      return { on: true };
    case actionTypes.off:
      return { on: false };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
};

function useToggleSwitch({ reducer = toggleSwitchReducer } = {}): [
  boolean,
  () => void,
  () => void,
  () => void
] {
  const [{ on }, dispatch] = useReducer(reducer, initialState);

  const toggle = () => dispatch({ type: actionTypes.toggle });
  const setON = () => dispatch({ type: actionTypes.on });
  const setOFF = () => dispatch({ type: actionTypes.off });

  return [on, toggle, setON, setOFF];
}

type Props = {
  on: boolean;
  onClick: () => void;
};

const ToggleSwitch: FC<Props> = (props) => {
  const { on, onClick } = props;
  const toggleStyle = ["toggleBtn", on ? "toggleBtnOn" : "toggleBtnOff"]
    .filter(Boolean)
    .join(" ");

  return (
    <label aria-label="Toggle">
      <input
        type="checkbox"
        checked={on}
        className="toggleInput"
        onClick={onClick}
      />
      <span className={toggleStyle}></span>
    </label>
  );
};

const TestApp: FC = () => {
  const [clicksSinceReset, setClicksSinceReset] = useState<number>(0);

  const [on, toggle, setON, setOFF] =
    useToggleSwitch(/*{
    reducer(currentState, action) {
      // 課題: reducerをカスタマイズしてください
      // TODO: トグルアクションが TOO_MANY_CLICKS 回以上のとき、on状態を固定化する
      // TODO: ON, OFFアクション時は、制限なしとする
    }
  }*/);

  const handleClick = useCallback(() => {
    toggle();
    setClicksSinceReset(clicksSinceReset + 1);
  }, [clicksSinceReset]); // useCallbackは、「第11章 値の同一性を理解する」で説明。

  return (
    <>
      <p className="formGroup">
        <button onClick={setOFF}>OFF</button>
        <button onClick={setON}>ON</button>
        {/* TODO: TOO_MANY_CLICKS 回以上のとき Reset ボタンを表示する */}
      </p>

      <p className="toggleGroup">
        <ToggleSwitch on={on} onClick={handleClick} />
      </p>
    </>
  );
};

createRoot(document.getElementById("root")!).render(<TestApp />);
