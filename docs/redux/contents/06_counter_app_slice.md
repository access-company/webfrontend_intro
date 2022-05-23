# 6. counterアプリ - slice

- *Up: [目次](../index.md)*
- *Back: [5. counterアプリ](./05_counter_app.md)*
- *Next: [7. counterアプリ - store](./07_counter_app_store.md)*

## 概要

`slice`は、`redux-toolkit`というライブラリの機能。

`action`と`reducer`をまとめて定義するためのオブジェクト。

## 構成要素

- name: データの種類
- initialState: 初期状態
- reducers: actionとreducerの定義
  - (key): action名
  - (value): reducer

## 使用例

- counterアプリ
  - [sliceの定義](https://codesandbox.io/s/counter-0k1109?file=/src/slice.ts)
