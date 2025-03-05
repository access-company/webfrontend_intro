---
title: '第8章　state'
---

今まで習ってきたことを復習すると、propsと呼ばれる引数を受け取りJSXを返す関数コンポーネントを組み合わせることによって、UIを構築できました。propsは読み取り専用で変更できないため、propsが同じであれば、必ず同じJSXを返します。

これで気づくのですが、これでは画面の表示内容を変更することができません。Reactは、画面の表示内容を変更するための機能として、画面表示で変化する値をState（状態）として保持し、Stateを更新することで画面の表示も更新できる仕組みを提供しています。

# useState

State を扱うには、`useState`という API を利用します。

```javascript
// useStateを使う準備
import { useState } from 'react';

// const [状態変数, 状態更新関数] = useState(状態変数の初期値)
const [state, setState] = useState(initialState);
```

後で説明しますが、すべての Hooks API はコンポーネント内で呼び出す必要があります。
また、`if`文や`for`文などから呼び出してはいけません。関数の中のトップレベルから Hooks API の呼び出しが許されています。

`useState`は、「現在の state（変数）」と「state を更新する関数」を返します。
このとき、実装者は、「現在の state」と「state を更新する関数」の名前を自由に決めることができます。`initialState`は初期状態です。

状態更新関数が実行され、Stateの更新されると、コンポーネントの再レンダリングがトリガーされ、コンポーネントが実行され、更新後のStateを元に画面の更新が行われます。

注意事項として、Stateの更新の検知はObject.is()関数によって行われます。Object.is()関数によって、状態更新関数の実行前と実行後でStateが同一であると判定された場合、再レンダリングはトリガーされず、画面の更新も行われません。

![useState](./08_useState.png)

# 例: カウントアップ

下記コードは、カウントアップに `useState`を使った例です。

```typescript
import React, { FC, useState } from 'react';
import { createRoot } from 'react-dom';

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<Counter />);
```

```bash
# react/exercise にて
$ TARGET=C08/Sample1 npm run dev
```

## 【課題 8-1】increment/decrement ボタンを作る

`Counter`コンポーネントを修正して、以下の要件を満たしてください。

- increment(+)ボタンと decrement(-)ボタンを用意する
- increment(+)ボタンを押下すると、count が 1 上がる
- decrement(-)ボタンを押下すると、count が 1 下がる
- count が 0 のとき、decrement(-)ボタンを disabled（ボタン押下できない状態）にする
  - [ヒント] button 要素に `disabled` 属性（boolean）を付与する

```bash
# react/exercise にて
$ TARGET=C08/Q1 npm run dev
```

編集対象ファイル: `react/exercise/C08/Q1/index.tsx`

# 複数の state を扱う

複数の `state`を扱うこともできます。下記のように複数の state を
並べていくことで状態を分割管理できます。

```javascript
const [count, setCount] = useState(0);
const [comment, setComment] = useState('');
const [date, setDate] = useState(Date.now());
```

![複数のstate](08_multi_state.svg)

## 【課題 8-2】Counter の偶数判定

課題 8-1 のコードをベースに、以下の要件を満たしてください。

- カウントの値が偶数のとき、「Counter: X」の部分の文字色を赤色に変更する
  - [ヒント] CSS に `.evenNumber { color: red; }` を定義すること
  - [ヒント] スタイルを適用したい要素に `className={evenNumber}` を指定すると文字色が赤色になる
  - [ヒント] 偶数・奇数の判定は、[剰余(%)演算子](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder)を使う
  - [ヒント] `count`が偶数かどうかの状態を持つ `useState` を定義する

## 【課題 8-3】イベントとの紐付け

以下の要件を満たしてください。

- 変数 `power` を State 化する
  - `boolean` 型として 初期値 `false` とする
- `Switch` コンポーネントをクリックした際に power の値が切り替わるようにする
  - `true` -> `false`, `false` -> `true`
  - [ヒント] `Switch` コンポーネントの `props` にある `onClick` にイベントハンドラを渡すと、`Switch` コンポーネントをクリックした時の振る舞いを定義できる。

```bash
# react/exercise にて
$ TARGET=C08/Q3 npm run dev
```

編集対象ファイル: `react/exercise/C08/Q3/index.tsx`

# 次のステップ (Optional)

研修では時間の都合上説明できませんが、useStateに関する重要な説明が公式ドキュメントに書かれています。

- [インタラクティビティの追加](https://ja.react.dev/learn/adding-interactivity)
- [stateの管理](https://ja.react.dev/learn/managing-state)
- [useState](https://ja.react.dev/reference/react/useState)
