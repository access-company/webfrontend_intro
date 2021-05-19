---
title: "第9章　複数のstateをまとめる"
---

実際のWebアプリの開発では、一つのコンポーネントに複数の状態を持たせたい場面に遭遇します。そのような場合でも、`useState`を使って実装できることには変わりありません。
しかし、`useState`を使って実装していると、コンポーネント実装の複雑度が上がり、実装の見通しが悪くなります。たとえば、あるstateが別のstateの状態変化に影響を与えるようなケースです。コンポーネントのユニットテストの実装の難易度も上がります。

stateを持つため、不純関数であることには変わりないが、コンポーネントの実装はできるだけシンプルにしたいと考えることがあるでしょう。

上記のようなケースでは、`useReducer` APIが適しています。


# 「reducer」とは？

「reduce」という単語は、「軽減する」「変える」という意味です。
Reactでは、「reducer」を「stateを変化させる関数」という意味で使われます。
また、reducerは、入力にstateを受け取って、stateを返す関数であり、かつ、純粋関数
でなければなりません。

*ポイント*: **Reducerは純粋関数である**


# useReducer API の導入

```javascript
// const [新しいstate, アクションを発火する関数] = 
//   useReducer(「現在のstate」と「アクション」を受け取って、「新しいstate」を返す関数, stateの初期値)
const [currentState, dispatch] = useReducer(reducer, initialState)
```

* 入力引数
  * `initialState`は、「stateの初期値」
  * `reducer`は、「現在のstate」と「アクション」を受け取って「新しいstate」を返す関数
  ```javascript
  const reducer = (state, action) => {
    // TODO: actionから新しいstateを生成する
    return 「新しいstate」
  }
  ```
* 返り値
  * `currentState` は、「新しいstate」
  * `dispatch`は、「アクションを発火する」関数

* シーケンス
  1. `dispatch(action)`を呼ぶ
  2. `reducer(state, action)`が実行される
  3. `currentState`が更新される


`useReducer`を使った `Counter` サンプルは下記の通りです。（[CodePen](https://codepen.io/aseijiurushihara/pen/oNjePLb?editors=0010)）

```javascript
const initialState = { count: 0 }

function reducer(state, action) {
  const {count} = state
  switch (action.type) {
    case 'increment':
      return {count: count + 1}
    case 'decrement':
      return {count: count - 1}
    case 'reset':
      return initialState
    default:
      throw new Error()
  }
}
```

`Counter`コンポーネント内に実装されていたロジックが `reducer`関数にまとめられ、
`Counter`コンポーネントの実装の見通しが良くなったことがわかります。
アクションを発火する`dispatch`関数の一つにまとめることで、イベント処理が明確になります。

```javascript
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <>
      <p>Counter: {state.count}</p>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

ReactDOM.render(<Counter />, document.getElementById('main'))
```

# useReducerを使うときとは？

`useState`でも機能的には実現できます。`useReducer`を使って実装するタイミングは、以下の通りです。

* 一つのコンポーネントに複数のstateを扱うようになったとき
* 異なるstateが相互に影響を与えるとき
* コンポーネントの実装が肥大化してきたとき

複数のstateを扱う場合は、`useReducer`を使う選択も考慮してください。


# 【課題9-1】2つのcount状態

2つのcountの状態（`count1`、`count2`）をincrement, decrement, reset する`reducer`を実装してください。（[Fork](https://codepen.io/aseijiurushihara/pen/VwvEqpe?editors=0010)）

[ヒント]
* spread構文を使う（`...state`）