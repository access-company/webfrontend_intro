---
title: '第13章　その他のHooks関数'
---

これまで説明してきた Hook 関数の他に有用な Hook 関数を紹介します。

# useRef

```tsx
const ref = useRef(initialVal);
```

`useRef` は、引数`initialVal`に初期化されたミュータブルな`current`プロパティを持つ `MutableRefObject` を返します。`MutableRefObject`は、コンポーネントの生存期間でミュータブルな変数として存在します。

```
NOTE: ミュータブル（mutable）とイミュータブル（immutable）とは？
ミュータブルは、変更可能な変数、イミュータブルは変更不可な変数の意味で使われます。
```

```tsx
// e.g.

const ref = useRef<boolean>(false);
console.log(ref.current); // false

ref.current = true;
console.log(ref.current); // true
```

## どういう場面で使うのか？

- DOM の要素の情報にアクセスしたいとき
- 一時的に情報保持したいが、再描画を発生させたくないとき

## 【課題 13-1】 ボタン表示の挙動が異なるボタン

`useState`を使ったボタンと`useRef`を使ったボタンのカウンタを作成してください。
カウントはボタンのラベルに表示します。

期待する挙動は以下の通り。

- `useState`を使ったボタンは、ボタン押下ごとにカウントアップする。
- `useRef`を使ったボタンは、ボタン押下でカウントアップしない。再描画時にカウントを反映する。

```bash
# react/exercise にて
$ TARGET=C13/Q1 npm run dev
```

```tsx
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
```

```
NOTE:
useRefで宣言した値を変更しても再レンダリングされないため、useRefで宣言した値を画面表示で使うことはバグの原因になります。
```

## 【課題 13-2】 CountDown

Start ボタンを押すと、
カウント（初期値 10）が 1000ms 間隔で 10、9、8、...、1、0 と表示が変化するカウンタを実装してください。
また、カウントを 10 に戻す Reset ボタンも追加してください。

注意： `let`は使わないでください。

```tsx
const INIT_COUNT = 10;

function CountDown() {
  const [count, setCount] = useState(INIT_COUNT);

  // TODO: useRef を使う

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

createRoot(document.getElementById("root")!).render(<CountDown />);
```

```bash
# react/exercise にて
$ TARGET=C13/Q2 npm run dev
```

編集対象ファイル: `react/exercise/C13/Q2/index.tsx`

**ヒント**

カウントを下げる場合は、`setCount(count => count - 1);` を使います。
