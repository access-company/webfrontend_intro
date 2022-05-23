# 10. 非同期処理

- *Up: [目次](../index.md)*
- *Back: [09. 基本演習1 - counterアプリ](./09_exercise_01_counter_app.md)*
- *Next: [11. 基本演習2 - counterアプリ(非同期処理)](./11_exercise_02_counter_app_async.md)*

## 概要

reduxの非同期処理について説明する。

## ソース

[counterアプリ(非同期処理)](https://codesandbox.io/s/counter-async-w0nn0q)

## 非同期処理とは（復習）

同期処理: 前の処理を待って実行される処理 (blocking)

非同期処理: 前の処理を待たずに並行して実行される処理 (non-blocking)

webアプリにおける非同期処理 ≒ サーバーとの通信

## redux-thunk

reduxで非同期処理を実現するためのライブラリ

### thunkとは

`dispatch`を受け取って実行する関数 = `action`を実行する関数

### 役割

action creatorの自由度を増やすことで同期処理と非同期処理の両方を書けるようにする。

#### 同期処理の場合

`action creator`は`action`を返す関数である。

`action creator`は`dispatch`を知らず、`dispatch`された時点で完了してしまう。

#### 非同期処理

`action creator`は`thunk`を返す

`action creator`は`dispatch`を知っているため、「いつ」実行するかを決められる。

`Promise`や`async/await`と組み合わせることで、`dispatch`を遅らせることができる。

### 例

- counterアプリ(非同期処理)
  - [非同期actionの定義](https://codesandbox.io/s/counter-async-w0nn0q?file=/src/slice.ts)
  - [sliceへの適用](https://codesandbox.io/s/counter-async-w0nn0q?file=/src/slice.ts)
  - [viewへの適用](https://codesandbox.io/s/counter-async-w0nn0q?file=/src/App.tsx)

### 原理

redux-thunkの実体は[middleware](./11_middleware.md)である。<br/>
`dispatch`の性質を変化させることで、同期処理と非同期処理の違いを意識せずに済む。

redux-thunkの本体コードはとても短い。
少々難しいが、何が起こるか予測してみると面白いかもしれない。
https://github.com/reduxjs/redux-thunk/blob/master/src/index.js
