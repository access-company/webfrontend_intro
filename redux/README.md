# Redux

Redux演習用のTODOアプリ

## 環境構築

- このレポジトリ(`webfrontend_intro/`)に移動する。
```sh
cd webfrontend_intro/
git checkout master
git pull origin master
```

- このディレクトリ(`redux/`)に移動する。
```
cd redux/
```

- パッケージをインストールする。
```
yarn
```

- Chromeに[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)をインストールする。

## 動作確認

- webpack dev serverを起動する。
```sh
yarn start
```

- http://0.0.0.0:3000 が自動的に開き、TODOアプリが表示される。

- 以降は`hot reloading`により、コードの修正が即座に反映される。

## ブランチの内容

master: 修正前のアプリ

redux_delete_answer: 基礎課題1の答え

redux_thunk_answer: 基礎課題2の答え

## ファイルレイアウト

Todo: TODOリストのアイテム

VisibilityFilter: TODOの検索条件

```
src
├── actions - redux action - UIのイベントを表すオブジェクト
├── components - Reactコンポーネント
├── constants.tsx - 日本語の文字列
├── index.tsx
├── models - リソース(Todo, 検索条件)の型
├── pages - ページ
├── reducers - redux reducer - redux storeを更新するための関数
├── selectors - redux selector - redux storeからデータを取得するための関数
├── store.ts - redux store - UIの状態を保持するオブジェクト
└── styles.css - スタイルシート
```

## React component

![](./react_components.png)
