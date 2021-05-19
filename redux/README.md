# Redux

Redux演習用のTODOアプリです。

## 準備

webfrontend_intro からこのフォルダに移動し、
パッケージをインストールする。

```sh
cd redux/
yarn
```

## 動作確認

http://0.0.0.0:3000 が自動的に開き TODO アプリが表示されます。
以降は hot reloading により、コードの修正が即座に反映されます。

```sh
yarn start
```

## ブランチの内容

master: 修正前のアプリ

redux_delete_answer: 基礎課題1の答え

redux_thunk_answer: 基礎課題2の答え

## ファイルレイアウト

Todo: TODOリストのアイテム
VisibilityFilter: TODOの検索条件

```
src
├── actions - redux action
│   ├── todo.ts
│   └── visibilityFilter.ts
├── components - Reactコンポーネント(representative component)
│   ├── AddTodo.tsx - TODO追加フォーム
│   ├── ImportTodo.tsx - TODOインポートボタン
│   ├── TodoItem.tsx - TODOリストのアイテム
│   ├── TodoList.tsx - TODOリスト
│   └── VisibilityFilters.tsx - TODOの検索条件
├── constants.tsx - 定数(日本語表記)
├── index.tsx - (エントリーポイント)
├── models - リソースの型
│   ├── Todo.ts
│   └── VisibilityFilter.ts
├── pages - ページ or Reactコンポーネント(container component)
│   └── TodoApp.tsx
├── react-app-env.d.ts
├── reducers - redux reducer
│   ├── index.ts
│   ├── todos.ts
│   └── visibilityFilter.ts
├── selectors - redux selector
│   ├── todo.ts
│   └── visibilityFilter.ts
├── store.ts - redux store
└── styles.css - スタイルシート
```

## React component

![](./react_components.png)
