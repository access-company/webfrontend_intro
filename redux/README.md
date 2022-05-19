# Redux

Redux演習用のTODOアプリ

## 環境構築

### Redux DevTools

#### 説明

Redux DevToolsは、reduxの動作を可視化するためのChromeの拡張機能です。

#### 手順

[ドキュメント](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)に従ってインストールしてください。

### CodeSandbox

#### 説明

CodeSandboxは、オンラインで複数ファイルを含むwebアプリを実行できるサービスです。

#### 手順

[こちらのアプリ](https://codesandbox.io/s/runtime-breeze-k7ku4h)にアクセスしてください。

ログインしていない場合は、githubアカウントでログインorユーザー登録してください。
(googleでもできますが、開発ツールなのでgithubで統一した方が良いかもしれません)

右上の`fork`ボタンをクリックして、自分用のコピーを作成してください。

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

`redux_delete_answer`: [React/redux演習](../docs/redux/contents/11_react_redux_exercise.md)の答え

`redux_thunk_answer`: [非同期処理演習](../docs/redux/contents/14_async_exercise.md)の答え
