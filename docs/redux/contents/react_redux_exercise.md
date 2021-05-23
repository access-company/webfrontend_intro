# React/redux演習

- *Back: [React/reduxの実例](./react_redux_example.md)*
- *Next: [非同期処理](./async.md)*

削除機能を実装しよう

## 目的

「機能を追加するたびにreduxライフサイクルを一周する」というイメージを掴む。

Reactとreduxを接続するための処理を確認する。

## 期待動作

❎をクリックするとTODOが削除される

## 実装方針

- src/redux/actions/todo.js
  - `Type`に`DELETE_TODO`を追加する。
  - `deleteTodo` action creator を定義する。
    - deleteTodo action creator  の引数は `id` とする。
    - deleteTodo action の`type`は`DELETE_TODO`,`payload`は`{ id }`とする。
- src/redux/reducers/todos.js
  - `case DELETE_TODO:` を追加する。
    - `store.todos`からIDが一致するアイテムを除外する。
      - `store.todos`は`Todo`の配列である。
- src/components/Todo.js
  - `useCallback`を用いて`handleDeleteTodo`を定義する。
  - `<span>❎<span>`に`onClick`イベントを追加する。
