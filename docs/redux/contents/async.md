# 非同期処理

## 非同期処理とは

同期処理: 前の処理を待って実行される処理 (blocking)

非同期処理: 前の処理を待たずに並行して実行される処理 (non-blocking)

webアプリにおける非同期処理 ≒ サーバーとの通信

## redux-thunk

reducで非同期処理を実現するためのライブラリ

### thunkとは

`dispatch`を受け取って実行する関数 = `action`を実行する関数

### 役割

action creatorの自由度を増やす。

#### 同期処理の場合

`action creator`は`action`を返す

`dispatch`を知らないので、その場で実行されてしまう

#### 非同期処理

`action creator`は`thunk`を返す
`Promise`や`async/await`と組み合わせることで、他の処理を待って実行(`dispatch`)することができる

### 原理

redux-thunkの実体はmiddlewareである。<br/>
middlewareは、dispatchを受け取って別のdispatchを返す関数。<br/>
dispatchの性質を変化させることで、同期処理と非同期処理の違いを意識せずに済む。

### 例

```js
// 同期処理
const increment = () => ({
  type: 'INCREMENT'
})

// 非同期処理
const incrementAsync = () => async dispatch => {
  setTimeout(() => { return dispatch(increment()) }, 2000)
}
```
