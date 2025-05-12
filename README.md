# Web Frontend introduction

[Web Frontend の研修資料](<(https://access-company.github.io/webfrontend_intro/)>) 作成リポジトリです。

# 注意

Public リポジトリなので社内の情報をコミットしないでください。

# 研修資料のビルドとデプロイ方法

## React 研修資料のビルド

以下の手順で React 研修資料をビルドします。

1. `/react/docs` ディレクトリに移動
2. 次のコマンドを実行

  ```shell
  npm run copy
  ```

## GitHub Pages へのデプロイ

GitHub Pages に資料をデプロイするには、以下の手順を実行します。

1. `./docs_src` ディレクトリに移動
2. 必要に応じて、`jekyll` などの依存関係をインストール

  ```shell
  bundle install
  ```

3. 次のコマンドを実行してビルド

  ```shell
  bundle exec jekyll build
  ```

4. `/docs` ディレクトリに生成されたファイルを `master` ブランチにコミット
