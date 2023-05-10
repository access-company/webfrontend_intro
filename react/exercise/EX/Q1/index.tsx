import { FC, useReducer, useState, useCallback } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

type ActionTypes = { [P in "toggle" | "on" | "off" | "reset"]: string };
const actionTypes: ActionTypes = {
  toggle: "TOGGLE",
  on: "ON",
  off: "OFF",
  reset: "RESET",
};

const TOO_MANY_CLICKS = 4;
const initialState = { on: false, cnt: 0 };

const toggleSwitchReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.toggle:
      return { ...state, on: !state.on };
    case actionTypes.on:
      return { ...state, on: true };
    case actionTypes.off:
      return { ...state, on: false };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
};

function useToggleSwitch({ reducer = toggleSwitchReducer } = {}): [
  boolean,
  number,
  () => void,
  () => void,
  () => void,
  () => void
] {
  const [{ on, cnt }, dispatch] = useReducer(reducer, initialState);

  const toggle = () => dispatch({ type: actionTypes.toggle });
  const setON = () => dispatch({ type: actionTypes.on });
  const setOFF = () => dispatch({ type: actionTypes.off });
  const reset = () => dispatch({ type: actionTypes.reset });

  return [on, cnt, toggle, setON, setOFF, reset];
}

type Props = {
  on: boolean;
  onClick: () => void;
  disabled: boolean;
};

const ToggleSwitch: FC<Props> = (props) => {
  const { on, onClick, disabled } = props;
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
        disabled={disabled}
      />
      <span className={toggleStyle}></span>
    </label>
  );
};

const TestApp: FC = () => {
  const [clicksSinceReset, setClicksSinceReset] = useState<number>(0);

  const [on, cnt, toggle, setON, setOFF, reset] = useToggleSwitch({
    reducer: (state, action) => {
      switch (action.type) {
        case actionTypes.toggle:
          return { on: !state.on, cnt: state.cnt + 1 };
        case actionTypes.on:
          return { ...state, on: true };
        case actionTypes.off:
          return { ...state, on: false };
        case actionTypes.reset:
          return { ...state, cnt: 0 };
        default:
          throw new Error(`unknown action type: ${action.type}`);
      }
    },
  });

  const handleClick = useCallback(() => {
    toggle();
    setClicksSinceReset(clicksSinceReset + 1);
  }, [clicksSinceReset]); // useCallbackは、「第11章 値の同一性を理解する」で説明。

  return (
    <>
      <p className="formGroup">
        <button onClick={setOFF}>OFF</button>
        <button onClick={setON}>ON</button>
        {cnt >= TOO_MANY_CLICKS && <button onClick={reset}>Reset</button>}
      </p>

      <p className="toggleGroup">
        <ToggleSwitch
          on={on}
          onClick={handleClick}
          disabled={cnt >= TOO_MANY_CLICKS}
        />
      </p>
    </>
  );
};

createRoot(document.getElementById("root")!).render(<TestApp />);
