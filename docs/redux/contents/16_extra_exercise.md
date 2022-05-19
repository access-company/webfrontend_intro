# 16. 発展演習

- *Up: [目次](../index.md)*
- *Back: [15. 非同期処理演習](./15_async_exercise.md)*

## 演習1

TODOを色で区別できるようにしたい。

### 要件

- TODOアイテムに色を追加することができる。
- 色でフィルターすることができる。

### 実装方針

- 色の組み合わせを決める。
- TODOアイテムに色を設定できるようにする。
  - TodoItemに`<select/>`要素を追加する。
    - それぞれの色を`<option/>`要素で表す。
    - 空の値が存在することに注意。
- TODOアイテムが設定した色の背景色または文字色に見えるよう、スタイルを反映する。
- 色でフィルターできるようにする。
  - VisibilityFilterと似たような形で実装する。
  - 演習なので、統一性にこだわらず、ラジオボタンなどを試しても良い。

## 演習2

セッションごとにTODOリストがリセットされないようにしたい。

### 要件

- ブラウザ(タブ)を閉じても、次回開いたときに同じTODOリストが表示されること。

### 実装方針

[redux-persist](https://github.com/rt2zz/redux-persist#basic-usage)を用いて、reducerをlocalStorageと連動させる。

#### localStorageとsessionStorage

[web storage](https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API)はブラウザの記憶領域。

webアプリではユーザー側の状態を永続化するために用いられる。

reduxとの違いは、ページを離れても状態が持続することである。

web storageは、ホストごとにkey(string)とvalue(string)で格納される(key-value store)。

web storageは以下の2種類に分けられる。
- localStorage: ブラウザ(タブ)を閉じても有効
- sessionStorage: ブラウザ(タブ)を閉じると無効

### 確認事項

- 要件を満たしているか。
- Chrome dev toolのApplicationからlocalStorageを参照する。TODOの一覧が格納されているか。

## 演習3

「インポート」ボタンを連打できないようにしたい。

### 設計

以下の順序で実行する。
- ボタンを無効化する
- 通信が終わるのを待つ
- ボタンを有効化する

### 実装方針

以下のいずれかの方法で実現してください。
- a. storeの構造を修正し、「通信中かどうか」を管理する
```
store.todos: array[Todo]
=>
store.todos: { data: array[Todo], requesting: boolean }
```
- b. `useReducer`で個別のコンポーネントのために`[state, dispatch]`を生成する
- c. `useState`で個別のコンポーネントのために`[enabled, setEnabled]`を生成する

また、その方法を選んだ理由を示してください。

## 演習4（05/24当日追加）

TODOリストのアイテムを drag & drop して、順序を入れ替える機能を追加してください。

必要に応じてライブラリを導入してください。

（迷うようであれば、latest commitが最近で、GitHub starが多いものを推奨しておきます）

https://qiita.com/sugasaki/items/30e4725268a68c53e218

https://github.com/brillout/awesome-react-components#sortable-list
