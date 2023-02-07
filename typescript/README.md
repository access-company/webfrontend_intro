# TypeScript 演習

## 事前準備

```shell
// install dependencies
$ npm i
```

## ディレクトリ構成

- `/src`  
  演習問題用のファイルを配置しています。  
  コンパイルが通らないファイルも用意しているため、すべてのファイルでコメントアウトしています。  
  演習に使うときにコメントを外してください。
  - standard: 基礎演習
  - advanced: 応用演習
  - sp: 時間が余ったよう総復習問題

## 動作確認

```shell
$ npm run build

$ node ./dist/standard|advanced/{対象の.jsファイル名} # 相対パスで指定
```
