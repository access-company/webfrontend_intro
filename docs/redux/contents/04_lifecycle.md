# 4. reduxライフサイクル

- *Up: [目次](../index.md)*
- *Back: [3. reduxの特徴](./03_feature.md)*
- *Next: [5. counterアプリ](./05_counter_app.md)*

## 概要

reduxライフサイクルの詳細を説明する。

## 構成要素

- `action`: UIのイベント
- `reducer`: UIの状態遷移
- `store`
  - `dispatch`: イベントを実行するメソッド
  - `getState`: UIの状態を取得するメソッド
  - `state`: UIの状態（`getState`でしか取得できない）
- `view`: (React)コンポーネント

## 全体の流れ

reduxでは、依存関係は一方向にのみ伝達される。

![](./redux_lifecycle.png)

- a. `view`でイベントが発生する。
- b. redux内部が更新される。
  - b-1. `action`が実行される（[注1](#注1)）。
    - `store.dispatch(action)` が呼ばれる。
  - b-2. `store.dispatch`は実行された`action`を`reducer`に渡す。
  - b-3. `reducer`は`action`と「古い`store state`」を受け取り、「新しい`store state`」を返す。
  - b-4. `store state`が更新される。
- c. `view`が更新される。

###### 注1

viewだけがactionを実行するわけではない。

`store.dispatch`と`action`に特殊な性質を与えることで、

`action`の実行を遅らせたり、複数の`action`を連鎖的に実行したりすることができる。

詳しくは[middleware](./12_middleware.md)を参照。
