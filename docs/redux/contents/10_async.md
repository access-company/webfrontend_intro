# 10. 非同期処理

- *Up: [目次](../index.md)*
- *Back: [09. counterアプリ - 実習](./09_counter_app_exercise.md)*
- *Next: [11. middleware](./11_middleware.md)*

## 説明

非同期なcounterアプリを用いて非同期処理の説明を行う。

## ソース

[非同期counterアプリ](https://codesandbox.io/s/runtime-breeze-k7ku4h)

右上の`fork`ボタンをクリックして、自分用のコピーを作成してください。

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

- [非同期actionの定義](https://codesandbox.io/s/redux-training-2022-counter-async-w0nn0q?file=/src/slice.ts:244-292)
- [sliceへの適用](https://codesandbox.io/s/redux-training-2022-counter-async-w0nn0q?file=/src/slice.ts:800-832)
- [viewへの適用](https://codesandbox.io/s/redux-training-2022-counter-async-w0nn0q?file=/src/App.tsx:460-531)

### 原理

redux-thunkの実体は[middleware](./11_middleware.md)である。<br/>
`dispatch`の性質を変化させることで、同期処理と非同期処理の違いを意識せずに済む。

redux-thunkの本体コードはとても短い。
少々難しいが、何が起こるか予測してみると面白いかもしれない。
https://github.com/reduxjs/redux-thunk/blob/master/src/index.js
