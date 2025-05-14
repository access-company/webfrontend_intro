# React Training

## 研修資料のセットアップ手順

### 1. インストール

以下の手順で Node.js とプロジェクトの依存関係をインストールします

1. Node.jsのインストールと設定

  ```shell
  $ asdf install nodejs 22.15.0
  $ asdf set nodejs 22.15.0
  ```

2. docs ディレクトリへ移動し、依存パッケージのインストール

  ```shell
  $ cd docs
  $ npm install
  ```

### 2. ローカルサーバでサイトを起動

以下のコマンドでローカルサーバを起動してください

```shell
$ npm run start
```

起動後、ブラウザで以下の URL にアクセスして資料を確認できます:
[http://localhost:8000](http://localhost:8000)

## 研修課題の実行手順

### 1. インストール

exercise ディレクトリへ移動し、依存パッケージのインストール

```shell
$ cd exercise
$ npm install
```

### 2. 課題の実行

```shell
$ TARGET={対象課題ディレクトリ名} npm run dev

# 例
$ TARGET=C01/Q1 npm run dev
```
