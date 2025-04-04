---
title: '第9章　state の更新ロジックを抽出する'
---

実際の Web アプリの開発では、 state の更新ロジックが複雑になることがあります。たとえば、ある配列の state に対して、「追加」「更新」「削除」のように更新の方法が複数あるケースです。そのような場合でも、 `useState` を使って実装できることには変わりありません。

しかし、 `useState` を使って実装すると、コンポーネント内部に複雑なロジックを持つことになり、保守性の低下やコンポーネントの単体テストの難易度の増加に繋がります。

上記のようなケースでは、`useReducer` API を使って、複雑な更新ロジックをコンポーネントの外部に切り出しましょう。

# useReducer API の導入

```tsx
// const [新しいstate, アクションを発火する関数] =
//   useReducer(「現在のstate」と「アクション」を受け取って、「新しいstate」を返す関数, stateの初期値)
const [currentState, dispatch] = useReducer(reducer, initialState);
```

- 入力引数
  - `initialState`は、「state の初期値」
  - `reducer`は、「現在の state」と「アクション」を受け取って「新しい state」を返す関数。純粋関数である必要があります。
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

```tsx
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

`useState`でも機能的には実現できますが、以下のようなケースでは`useReducer`を使うことを選択肢に入れましょう。

- アクションの数が多いとき
- 多くのプロパティを持つオブジェクトを state としているとき
- 更新のロジックが複雑なとき

# (optional) なぜ Reducer と呼ばれるのか？

JavaScriptの配列のメソッドである [Array.prototype.reduce()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) という操作にちなんで名付けられています。詳細は [なぜリデューサと呼ばれるのか？](https://ja.react.dev/learn/extracting-state-logic-into-a-reducer#why-are-reducers-called-this-way)で説明されています。

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
