# Redux

Redux演習用のTODOアプリ

## 環境構築

### Yarn

- このレポジトリ(`webfrontend_intro/`)に移動しmasterを取得する。
```sh
cd webfrontend_intro/
git checkout master
git pull origin master
```

- このディレクトリ(`redux/`)に移動する。
```sh
cd redux/
```

- パッケージをインストールする。
```sh
yarn
```

### Redux DevTools

- Chromeに[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)をインストールする。

## 動作確認

- webpack dev serverを起動する。
```sh
yarn start
```

- http://0.0.0.0:3000 が自動的に開き、TODOアプリが表示される。

- 以降は`hot reloading`により、コードの修正が即座に反映される。

## ファイルレイアウト

- src/
  - [actions/](./src/actions/) - action - UIのイベントを表すオブジェクト
  - [components/](./src/components/) - Reactコンポーネント
  - [constants.tsx](./src/constants.tsx) - 日本語の文字列
  - [index.tsx](./src/index.tsx) - webアプリのroot
  - [models/](./src/models/) - リソース(Todo, 検索条件)の型
  - [pages/](./src/pages/) - ページ
  - [reducers/](./src/reducers/) - reducer - storeの次の状態を生成するための関数
  - [selectors/](./src/selectors/) - selector - storeから状態を取得するための関数
  - [store.ts](./src/store.ts) - store - UIの状態を保持するオブジェクト
  - [styles.css](./src/styles.css) - スタイルシート

## リソース名

`Todo`: TODOリストのアイテム

`VisibilityFilter`: TODOの検索条件

## アプリの構成

![](./react_components.png)

- ImportTodo: インポートボタンを押すと、リモートからTODOリストのアイテムを取得できる。（未実装）
- AddTodo: 追加ボタンを押すと、TODOリストのアイテムを追加できる。
- TodoItem
  - Xをクリックすると、アイテムを削除できる。（未実装）
  - テキスト部分をクリックすると、アイテムの状態（完了/未完了）を切り替えられる。
- VisibilityFilter: TODOリストの検索条件（全て/完了/未完了）を切り替えられる。

## ブランチの内容

`master`: 修正前のアプリ

`redux_delete_answer`: [React/redux演習](../docs/redux/contents/react_redux_exercise.md)の答え

`redux_thunk_answer`: [非同期処理演習](../docs/redux/contents/async_exercise.md)の答え
