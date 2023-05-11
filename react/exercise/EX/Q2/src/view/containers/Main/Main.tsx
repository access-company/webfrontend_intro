import { FC, useCallback, useMemo, useReducer } from 'react';
import styles from './Main.module.css';
// ゲームに関係する定数
import { DIGITS, RADIX, MAX_ATTEMPTS } from '../../../constants';
// マッチング処理
import {
  generateAnswer,
  compare,
  isFullMatched,
  updateButtonState,
} from '../../../lib/behaviors';
import MainGrid from '../../layouts/MainGrid';
import TileGrid from '../../layouts/TileGrid';
import Tile from '../../components/Tile';
import NumberButtonGrid from '../../layouts/NumberButtonGrid';
import NumberButton from '../../components/NumberButton';
import ControlButtonGrid from '../../layouts/ControlButtonGrid';
import ControlButton from '../../components/ControlButton';

/* reducer の型定義 */
type GameState = {
  message: string;
  inputValues: Array<string>;
  answer: Array<string>;
  buttonState: Array<MatchType>;
  results: Array<Array<MatchResult>>;
  isGameOver: boolean;
};

const ACTIONS = {
  ADD_NUMBER: 'ADD_NUMBER',
  DELETE_NUMBER: 'DELETE_NUMBER',
  GUESS: 'GUESS',
  RESET: 'RESET',
} as const;

type GameActionType = {
  type: typeof ACTIONS[keyof typeof ACTIONS];
  payload?: string;
};

/* 初期値 */
const initialButtonState = [...new Array<MatchType>(RADIX)].fill('default');
const initialGameState: GameState = {
  message: 'Wordleもどきです。',
  inputValues: [],
  answer: generateAnswer(),
  buttonState: initialButtonState,
  results: [],
  isGameOver: false,
};

/* reducer 関数 */
const reducer = (state: GameState, action: GameActionType): GameState => {
  const { answer, results, inputValues, buttonState, message } = state;
  switch (action.type) {
    case ACTIONS.ADD_NUMBER: {
      if (inputValues.length < DIGITS && action.payload) {
        return {
          ...state,
          inputValues: [...inputValues, action.payload],
        };
      }
      return state;
    }
    case ACTIONS.DELETE_NUMBER: {
      if (inputValues.length > 0) {
        const newInputValue = inputValues.slice(0, inputValues.length - 1);
        return {
          ...state,
          inputValues: newInputValue,
        };
      }
      return state;
    }
    case ACTIONS.GUESS: {
      if (inputValues.length === DIGITS) {
        const lastResult = compare(inputValues, answer);
        const newResults = [...results, lastResult];
        const newButtonState = updateButtonState(lastResult, buttonState);
        const isGameOver =
          newResults.length === MAX_ATTEMPTS ||
          isFullMatched(newResults[newResults.length - 1] || []);
        const gameOverMessage = `正解は ${state.answer.join('')} でした`;
        return {
          ...state,
          inputValues: [],
          results: newResults,
          buttonState: newButtonState,
          isGameOver,
          message: isGameOver ? gameOverMessage : message,
        };
      }
      return state;
    }

    case ACTIONS.RESET: {
      return {
        ...initialGameState,
        answer: generateAnswer(),
      };
    }
  }
};

/* key 生成 */
const generateKey = (col: number, row: number) => `c${col}r${row}`;

const numKeyValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Tile コンポーネントに描画したい内容を(列/行)で取得するためのメソッド
const getTileInfo = (col: number, row: number, results: Array<Array<MatchResult>>, inputValues: Array<string>): MatchResult => {
  // results に存在していれば results から
  if (results.length > row) {
    return results[row][col];
  }
  // inputValues から取れそうであれば inputValues から
  if (results.length === row) {
    return {
      value: inputValues[col] || undefined,
    };
  }
  // まだ未操作ものであれば空を
  return {};
};

const Main: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialGameState);
  const { results, inputValues, buttonState, isGameOver, message } = state;

  /* Methods */
  // Guess ボタンを押した時
  const onPushGuess = useCallback(() => {
    dispatch({ type: ACTIONS.GUESS });
  }, []);

  // デリートボタンを押した時
  const onPushDelete = useCallback(() => {
    dispatch({ type: ACTIONS.DELETE_NUMBER });
  }, []);

  // リセットボタンを押した時
  const onPushReset = useCallback(() => {
    dispatch({ type: ACTIONS.RESET });
  }, []);

  // Tile コンポーネントをまとめて生成
  const tiles = [...new Array(DIGITS * MAX_ATTEMPTS)].map((_, index) => {
    const col = index % DIGITS;
    const row = Math.floor(index / DIGITS);
    const { value, type } = getTileInfo(col, row, results, inputValues);
    const selected = results.length === row && inputValues.length === col;
    return (
      <Tile
        text={value}
        type={type}
        key={generateKey(col, row)}
        selected={selected}
      />
    );
  });

  // Button コンポーネントをまとめて生成
  const numButtons = useMemo(() => {
    return numKeyValues.map((value) => (
      <NumberButton
        assignedKey={`${value}`}
        key={value}
        onPush={() => dispatch({ type: ACTIONS.ADD_NUMBER, payload: `${value}` })}
        type={buttonState[value]}
        disabled={isGameOver}
      />
    ));
  }, [isGameOver, buttonState]);

  return (
    <div className={styles.container}>
      <MainGrid>
        <div>{message}</div>
        <TileGrid>{tiles}</TileGrid>
        <NumberButtonGrid>{numButtons}</NumberButtonGrid>
        <ControlButtonGrid>
          <ControlButton
            assignedKey="r"
            text="Reset"
            onPush={onPushReset}
          />
          <ControlButton
            assignedKey="BackSpace"
            text="Delete"
            onPush={onPushDelete}
            disabled={isGameOver || !inputValues.length}
          />
          <ControlButton
            assignedKey="Enter"
            text="Guess"
            onPush={onPushGuess}
            disabled={isGameOver || inputValues.length < DIGITS}
          />
        </ControlButtonGrid>
      </MainGrid>
    </div>
  );
};

export default Main;
