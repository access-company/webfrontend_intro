# 1 日目(午後) TypeScript 基礎演習

TypeScript で簡単なコードを書いてみよう

演習問題はグループで取り組んでみてください。（別途グループ情報は展開します）

## 準備

リポジトリの `/typescript` ディレクトリに移動し、 TypeScript の開発環境を用意し、実際に TypeScript を書いてみましょう。

```shell
# /typescript ディレクトリへ移動
$ cd typescript
# パッケージをインストール
$ yarn
```

演習問題は、 `/typescript/src/standard` にあります。  
`exercise1` から順番に問いていってみてください。

## 動作確認方法

TypeScript を JavaScript にトランスパイルし、トランスパイルされた JavaScript を実行して動作確認を行います。

```shell
# トランスパイル
$ yarn build  # tsc 実行
# node で実行
$ node ./dist/standard/{対象の.jsファイル名} # 相対パスで指定
```

わからない点や質問したい点があれば `#ncg2023-question` でグループ名を添えて投稿してください。  
スレッドで回答 or meet に参加します。

解説はこの後に行います。
