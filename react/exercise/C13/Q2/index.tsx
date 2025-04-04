// C13/Q2
// Start ボタンを押すと、 カウント（初期値10）が 1000ms 間隔で 10、9、8、...、1、0 と表示が変化するカウンタを実装してください。
// また、カウントを10に戻す Reset ボタンも追加してください。
// 注意： letは使わないでください。
//
import { useRef, useCallback, useState } from 'react';
import { createRoot } from 'react-dom/client';

const INIT_COUNT = 10;

function CountDown() {
  const [count, setCount] = useState(INIT_COUNT);

  // TODO: useRef を使う (型は NodeJS.Timer | null)

  const start = () => {
    // TODO： setInterval を使う
    // @see https://developer.mozilla.org/ja/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
  };

  const stop = () => {
    // TODO： clearInterval を使う
    // @see https://developer.mozilla.org/ja/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval
  };
  const reset = () => {
    stop();

    // TODO: カウントをINIT_COUNTにリセット
  };

  if (count === 0) {
    stop();
  }

  return (
    <>
      <p>{count}</p>
      <p>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
      </p>
    </>
  );
}

createRoot(document.getElementById('root')!).render(<CountDown />);
