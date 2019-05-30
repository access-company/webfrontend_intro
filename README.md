# Web Frontend introduction

[Web Frontend の研修資料](<(https://access-company.github.io/webfrontend_intro/)>) 作成リポジトリです。  
下記は資料を作成・更新するための情報です。研修を受講するにあたって必要な手順ではないので注意。

## 環境構築

```sh
$ npm install -g gitbook-cli
$ gitbook install contents
```

## ドキュメントの表示確認

下記コマンドで開発用 Web サーバが立ち上がるので、ブラウザで `http://localhost:4000` を開く。  
また、ドキュメントを更新すると自動でリビルドされ、ブラウザもライブリロードされる。

```sh
$ npm start
```

## ドキュメントのコミット

`/contents` 配下の資料を更新後、`npm run build` を実行し、生成された `/docs` 配下の HTML をまとめてコミットする。

```sh
$ npm run build
$ git add contents docs
$ git commit -v 'Update documents'
$ git push origin HEAD
```

## 備考

- 既に `gitbook-cli` は deprecated であり、依存ライブラリに多数の脆弱性がある。  
  `devDependencies`とはいえ、利用を避けたかったが、GitHub Pages や Gatsby.js に Table Of Contents をサイドペインに表示可能な適当な theme がなかったため採用した。
- Gatsby.js + Netlify に移行したい。
