# reduxライフサイクル - store

*Back: [reduxライフサイクル - reducer](./lifecycle_reducer.md)*
-
*Next: [reduxライフサイクルの実例](./lifecycle_example.md)*

`store`はUIの状態の全てを知っている (Single source of truth)。

`store`の主な要素
- UIの状態
  - `state`（直接取得することはできない）
- UIの状態にアクセスするためのインターフェース
  - `store.dispatch`: イベントを実行するためのメソッド
  - `store.getState`: UIの状態(`state`)を取得するためのメソッド

`dispatch`/`getState`を`view`と連携させることで、UIの状態管理が可能になる。

ただし、`dispatch`/`getState`を直接呼ばずに、スタンダードな方法を用いた方が良い。

## 実装例

```
const counterReducer = (state = 0, action) => {...}
const rootReduer = combineReducer(counterReducer)
const store = createStore(rootReducer)
```
