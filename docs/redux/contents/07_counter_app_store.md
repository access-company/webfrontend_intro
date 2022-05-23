# 7. counterアプリ - store

- *Up: [目次](../index.md)*
- *Back: [6. counterアプリ - slice](./06_counter_app_slice.md)*
- *Next: [8. counterアプリ - hooks](./08_counter_app_hooks.md)*

## 概要

`store`は、reduxの基本となるオブジェクト。

UIの状態を一元管理する。

全体で一つしか存在しない (Single source of truth)。

## 構成要素

- UIの状態
  - `state`（直接取得することはできない）
- UIの状態にアクセスするためのインターフェース
  - `store.dispatch`: イベントを実行するためのメソッド
  - `store.getState`: UIの状態(`state`)を取得するためのメソッド

`dispatch`/`getState`を`view`と連携させることで、UIの状態管理が可能になる。

ただし、`dispatch`/`getState`を直接呼ぶことは少ない（後述）。

## 使用例

- counterアプリ
  - [storeの定義](https://codesandbox.io/s/counter-0k1109?file=/src/store.ts)
