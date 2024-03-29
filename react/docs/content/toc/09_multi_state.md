---
title: '第9章　複数のstateをまとめる'
---

実際の Web アプリの開発では、一つのコンポーネントに複数の状態を持たせたい場面に遭遇します。そのような場合でも、`useState`を使って実装できることには変わりありません。
しかし、`useState`を使って実装していると、コンポーネント実装の複雑度が上がり、実装の見通しが悪くなります。たとえば、ある state が別の state の状態変化に影響を与えるようなケースです。コンポーネントのユニットテストの実装の難易度も上がります。

state を持つため、不純関数であることには変わりないが、コンポーネントの実装はできるだけシンプルにしたいと考えることがあるでしょう。

上記のようなケースでは、`useReducer` API が適しています。

# 「reducer」とは？

「reduce」という単語は、「軽減する」「変える」という意味です。
React では、「reducer」を「state を変化させる関数」という意味で使われます。
また、reducer は、入力に state を受け取って、state を返す関数であり、かつ、純粋関数
でなければなりません。

_ポイント_: **Reducer は純粋関数である**

# useReducer API の導入

```javascript
// const [新しいstate, アクションを発火する関数] =
//   useReducer(「現在のstate」と「アクション」を受け取って、「新しいstate」を返す関数, stateの初期値)
const [currentState, dispatch] = useReducer(reducer, initialState);
```

- 入力引数
  - `initialState`は、「state の初期値」
  - `reducer`は、「現在の state」と「アクション」を受け取って「新しい state」を返す関数
  ```typescript
  const reducer = (state: State, action: Action) => {
    // TODO: actionから新しいstateを生成する
    return 「新しいstate」
  }
  ```
- 返り値

  - `currentState` は、「新しい state」
  - `dispatch`は、「アクションを発火する」関数

- シーケンス
  1. `dispatch(action)`を呼ぶ
  2. `reducer(state, action)`が実行される
  3. `currentState`が更新される

`useReducer`を使った `Counter` サンプルは下記の通りです。

```bash
# react/exercise にて
$ TARGET=C09/Sample1 npm run dev
```

```typescript
type State = { count: number };
type Action = { type: 'reset' | 'decrement' | 'increment' };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action) {
  const { count } = state;
  switch (action.type) {
    case 'increment':
      return { count: count + 1 };
    case 'decrement':
      return { count: count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}
```

`Counter`コンポーネント内に実装されていたロジックが `reducer`関数にまとめられ、
`Counter`コンポーネントの実装の見通しが良くなったことがわかります。
アクションを発火する`dispatch`関数の一つにまとめることで、イベント処理が明確になります。

```javascript
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Counter: {state.count}</p>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<Counter />);
```

# useReducer を使うときとは？

`useState`でも機能的には実現できます。`useReducer`を使って実装するタイミングは、以下の通りです。

- 一つのコンポーネントに複数の state を扱うようになったとき
- 異なる state が相互に影響を与えるとき
- コンポーネントの実装が肥大化してきたとき

複数の state を扱う場合は、`useReducer`を使う選択も考慮してください。

# 【課題 9-1】2 つの count 状態

2 つの count の状態（`count1`、`count2`）を increment, decrement, reset する`reducer`を実装してください。

[ヒント]

- spread 構文を使う（`...state`）

```bash
# react/exercise にて
$ TARGET=C09/Q1 npm run dev
```

編集対象ファイル: `react/exercise/C09/Q1/index.tsx`

# 【課題 9-2】 (optional) 車のアニメーション

`useReducer` で車のアニメーションを実装しましょう。

アニメーションは以下の順で遷移します。
- Fuel ゲージを満タンにする。
- Open the gate ボタンでゲートを開く。
- Launch ボタンで車を発進させる。
- Reset ボタンで初期状態に戻る。

以下の 4 つの状態を `useState` で管理しています。
- `fuelAmount`: 燃料ゲージ
- `fulfilled`: 燃料が満タンかどうか
- `opened`: ゲートが開いたかどうか
- `launched`: 車が発進したかどうか

`reducer` を実装し、 `useState` を `useReducer` に置き換えてください。

`action` は必要に応じて追加してください。

```bash
# react/exercise にて
$ TARGET=C09/Q2 npm run dev
```

編集対象ファイル: `react/exercise/C09/Q2/index.tsx`
