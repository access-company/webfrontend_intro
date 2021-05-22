# React/reduxの実例

redux/src以下の代表的なファイルを見ていく。

必要なモジュールを参照していることを確認する。

## ファイルレイアウト

- src/
  - [index.tsx](#index.tsx) - webアプリのroot
  - redux側
    - [store.ts](#store.ts) - store - UIの状態を保持するオブジェクト
    - [actions/](#actions/) - action - UIのイベントを表すオブジェクト
    - [reducers/](#reducers/) - reducer - storeの次の状態を生成するための関数
    - [selectors/](#selectors/) - selector - storeから状態を取得するための関数
    - [models/](#models/) - リソース(Todo, 検索条件)の型
  - React側
    - [pages/](#pages/) - ページ
    - [components/](#components/) - Reactコンポーネント
    - [constants.tsx](#constants.tsx) - 日本語の文字列
    - [styles.css](#styles.css) - スタイルシート

## [index.tsx](../../../redux/src/index.tsx)

主に以下の要素からなる。
- store
  - UIの状態を保持するオブジェクト
- react-reduxのProvider
  - storeとReactコンポーネント全体を渡し、状態を監視している。
- TodoApp
  - TODOリストのページ

## redux側

### [store.ts](../../../redux/src/store.ts)

UIの状態を保持するオブジェクト。

createStoreに以下の要素を渡し、storeを生成している。
- reducer
- 非同期処理のためのthunkMiddleware(後述)

storeには以下の要素があるが、直接は見えていない。
- `state`: UIの状態
- `store.dispatch`: `action`を実行するためのメソッド
- `store.getState`: `state`を取得するためのメソッド

### [actions/todo.ts](../../../redux/src/actions/todo.ts)

UIのイベントを表すオブジェクト。
actionを生成する関数であるaction creatorが並んでいる。
actionは`{ type, payload }`という構造でイベントの内容を記述している。

### [reducers/todo.ts](../../../redux/src/reducers/todo.ts)

`store`の次の状態を生成するための関数。

`action`と「古い`state`」を受け取り、「新しい`state`」を返す。

ここでいう`state`は、`state`全体の中では一部分にすぎない。

`createStore`での定義に従い、`state.todo`以下に格納される。

### [selectors/todo.ts](../../../redux/src/selectors/todo.ts)

storeから状態を取得するための関数。

storeを受け取り、必要なデータを抽出している。

Reactコンポーネントの側でuseSelectorが呼び出される段階で実際のstoreと関連づけられる。

### [models/Todo.ts](../../../redux/src/models/Todo.ts)

リソースの型。

interfaceまたはenumで定義されている。

## React側

### [pages/TodoApp.jsx](../../../redux/src/pages/TodoApp.tsx)

Todoリストのページ。

各コンポーネントが読み込まれている。

### [components/TodoList.jsx](../../../redux/src/components/TodoList.tsx)

Todoリスト本体。

useSelectorでTODOの一覧を取得している。

### [components/AddTodo.jsx](../../../redux/src/components/AddTodo.tsx)

Todo追加フォーム。

useDispatchでdispatchを生成し、dispatchを使ってイベントハンドラを実装している。

### [constants.tsx](../../../redux/src/constants.tsx)

各種定数。

今回は日本語の文字列を格納している。

多言語対応(i18n)については、stackoverflow_clone本体の構成の方が正しい。

### [styles.css](../../../redux/src/styles.css)

スタイルシート。
