import { FC, useState } from 'react';
import styles from './Main.module.css';
// ゲームに関係する定数
import { DIGITS, RADIX, MAX_ATTEMPTS } from '../../../constants';
// マッチング処理
import { generateAnswer, compare, isFullMatched, updateButtonState } from '../../../lib/behaviors';
import MainGrid from '../../layouts/MainGrid';
import TileGrid from '../../layouts/TileGrid';
import Tile from '../../components/Tile';
import NumberButtonGrid from '../../layouts/NumberButtonGrid';
import NumberButton from '../../components/NumberButton';
import ControlButtonGrid from '../../layouts/ControlButtonGrid';
import ControlButton from '../../components/ControlButton';

/* 型定義 */
type GameState = {
  message: string;
  inputValues: Array<string>;
  answer: Array<string>;
  buttonState: Array<MatchType>;
  results: Array<Array<MatchResult>>;
  isGameOver: boolean;
};

/* 初期値 */
const initialButtonState = [...new Array<MatchType>(RADIX)].fill('default');
const initialGameState: GameState = {
  message: 'Wordleもどきです。',
  inputValues: [],
  answer: [],
  buttonState: initialButtonState,
  results: [],
  isGameOver: false,
};

/* key 生成 */
const generateKey = (col: number, row: number) => `c${col}r${row}`;
const numKeyValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Main: FC = () => {
  /* State */
  const [message, setMessage] = useState<string>(initialGameState.message);
  const [inputValues, setInputValues] = useState<Array<string>>(initialGameState.inputValues);
  const [answer, setAnswer] = useState<Array<string>>(generateAnswer());
  const [buttonState, setButtonState] = useState<Array<MatchType>>(initialGameState.buttonState);
  const [results, setResults] = useState<Array<Array<MatchResult>>>(initialGameState.results);
  const [isGameOver, setGameOver] = useState<boolean>(initialGameState.isGameOver);

  /* Methods */
  // Guess ボタンを押した時
  const onPushGuess = () => {
    if (inputValues.length === DIGITS) {
      const lastResult = compare(inputValues, answer);
      const newResults = [...results, lastResult];
      const newButtonState = updateButtonState(lastResult, buttonState);
      const isGameOver =
        newResults.length === MAX_ATTEMPTS ||
        isFullMatched(newResults[newResults.length - 1] || []);
      const gameOverMessage = `正解は ${answer.join('')} でした`;

      setInputValues([]);
      setResults(newResults);
      setButtonState(newButtonState);
      setGameOver(isGameOver);
      setMessage(isGameOver ? gameOverMessage : message);
    }
  };

  // デリートボタンを押した時
  const onPushDelete = () => {
    if (inputValues.length > 0) {
      const newInputValue = inputValues.slice(0, inputValues.length - 1);
      setInputValues(newInputValue);
    }
  };

  // リセットボタンを押した時
  const onPushReset = () => {
    setMessage(initialGameState.message);
    setInputValues(initialGameState.inputValues);
    setAnswer(generateAnswer());
    setButtonState(initialGameState.buttonState);
    setResults(initialGameState.results);
    setGameOver(initialGameState.isGameOver);
  };

  // Tile コンポーネントに描画したい内容を(列/行)で取得するためのメソッド
  const getTileInfo = (col: number, row: number): MatchResult => {
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

  // Tile コンポーネントをまとめて生成
  const tiles = [...new Array(DIGITS * MAX_ATTEMPTS)].map((_, index) => {
    const col = index % DIGITS;
    const row = Math.floor(index / DIGITS);
    const { value, type } = getTileInfo(col, row);
    const selected = results.length === row && inputValues.length === col;
    return <Tile text={value} type={type} key={generateKey(col, row)} selected={selected} />;
  });

  // Button コンポーネントをまとめて生成
  const numButtons = numKeyValues.map((value) => (
    <NumberButton
      assignedKey={`${value}`}
      onPush={() => {
        if (inputValues.length < DIGITS) {
          setInputValues([...inputValues, `${value}`]);
        }
      }}
      type={buttonState[value]}
      disabled={isGameOver}
    />
  ));

  return (
    <div className={styles.container}>
      <MainGrid>
        <div>{message}</div>
        <TileGrid>{tiles}</TileGrid>
        <NumberButtonGrid>{numButtons}</NumberButtonGrid>
        <ControlButtonGrid>
          <ControlButton assignedKey="r" text="Reset" onPush={onPushReset} />
          <ControlButton
            assignedKey="BackSpace"
            text="Delete"
            onPush={onPushDelete}
            disabled={isGameOver}
          />
          <ControlButton
            assignedKey="Enter"
            text="Guess"
            onPush={onPushGuess}
            disabled={isGameOver}
          />
        </ControlButtonGrid>
      </MainGrid>
    </div>
  );
};

export default Main;
