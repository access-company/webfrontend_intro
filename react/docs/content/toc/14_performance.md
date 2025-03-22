---
title: 第14章　描画パフォーマンスの最適化
---

(Optional)

React は、コンポーネントの再レンダリング回数を必要最小限にするための API として `React.memo` と `useCallback` 、計算結果をキャッシュするためのAPIとして`useMemo`を用意しています。

# React.memo

React はデフォルトでは親コンポーネントが再レンダリングされると子コンポーネントも再レンダリングします。

コンポーネントを `React.memo` でラップすることで、親コンポーネントが再レンダリングされても、自身の props が変更されていない限り再レンダリングされなくなり、最後のレンダーの結果を再利用します。

```tsx
const MemoizedMyComponent = React.memo(function MyComponent(props) {
  /* render using props */
}, opt_areEqual);
```

ここで注意しなければいけない点は、 `props` の値の変更のみを `React.memo` はチェックするということです。`React.memo` でラップしている関数コンポーネント内で `useState` で定義した state が更新されたときには再レンダリングされます。

参照: https://ja.react.dev/reference/react/memo

# useCallback

`useCallback` は、レンダー間で関数定義をキャッシュできるようにする Hooks です。

- 第1引数: キャッシュしたい関数
- 第2引数: 第1引数のコード内で参照される依存値リスト。配列内の値が変更されたときにだけ関数の再定義が行われる。

```tsx
const cachedFn = useCallback(fn, dependencies)
```

参照: https://ja.react.dev/reference/react/useCallback

# React.memo と useCallback を使ったパフォーマンス改善例

レンダー中に重い計算をしている`Button` コンポーネントの再レンダリング回数を最小限にすることを目標とします。

## パフォーマンス改善前のコード


```bash
# react/exercise にて
$ TARGET=C14/Sample1 npm run dev
```

```tsx
import { useState, memo, useCallback } from "react";
import { createRoot } from "react-dom/client";

const heavyCalculation = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
};

interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  console.log("button render");
  heavyCalculation();
  return <button onClick={onClick}>click</button>;
};

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <p>カウント: {count}</p>
      <Button onClick={handleIncrement} />
    </>
  );
};
createRoot(document.getElementById("root")!).render(<App />);
```

## パフォーマンス改善

1. Button コンポーネントを React.memo でラップすることによって、 props が同じだった場合は再レンダリングをスキップされるようにします。
2. propsとして渡している handleIncrement 関数を useCallback を使ってキャッシュします。第2引数が空配列であるため、一度定義されると再レンダリングをしても再定義されなくなります。

```tsx
import { useState, memo, useCallback } from "react";
import { createRoot } from "react-dom/client";

const heavyCalculation = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
};

interface ButtonProps {
  onClick: () => void;
}

// 1. memoを使ってButtonコンポーネントをキャッシュする
const Button = memo(({ onClick }: ButtonProps) => {
  console.log("button render");
  heavyCalculation();
  return <button onClick={onClick}>click</button>;
});

const App = () => {
  const [count, setCount] = useState(0);

  // 再レンダリングのたびに再定義される
  // const handleIncrement = () => {
  //   setCount((prev) => prev + 1);
  // };

  // 2. useCallbackで関数定義をキャッシュする
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <p>カウント: {count}</p>
      <Button onClick={handleIncrement} />
    </>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
```

# useMemo

useMemoは、レンダー間で計算結果をキャッシュするためのHooksです。

- 第1引数: キャッシュしたい値を計算する関数
- 第2引数: 第1引数のコード内で参照される依存値リスト。配列内の値が変更されたときにだけ再計算が行われる。

```tsx
const cachedValue = useMemo(calculateValue, dependencies)
```

```tsx
const heavyCalculation = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  // キャッシュしない場合
  // const value = heavyCalculation();

  // キャッシュする場合
  const value = useMemo(heavyCalculation, []);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>{value}</div>
    </>
  );
};
```

参照: https://ja.react.dev/reference/react/useMemo

# (optional) React Compiler

[React Compiler](https://ja.react.dev/learn/react-compiler) とは、React.memo、useCallback、useMemoを使わなくても、自動的に無駄なコンポーネントの再レンダリングや値の再計算を抑制してくれる機能です。ただし、現在ベータ版であることに注意が必要です。

# 【課題 14-1】 描画パフォーマンスを改善しよう！

はじめに、Chrome Dev Tools を開き、Console の項目（コンソールログ）を表示してください。
Start ボタン押下するとカウントを開始します。Stop ボタンを押下すると、カウントを一時停止します。
HTML 出力画面の count= xxxxx の数字とコンソールログの Counter と CounterButton の数字を
確認してください。

**課題内容**

Counter と CounterButton のコンソールログのカウント数を最適化してください。

```bash
# react/exercise にて
$ TARGET=C14/Q1 npm run dev
```

編集対象ファイル: `react/exercise/C14/Q1/index.tsx`
