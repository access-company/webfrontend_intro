# 5. counterアプリ

- *Up: [目次](../index.md)*
- *Back: [4. reduxライフサイクル](./04_lifecycle.md)*
- *Next: [6. counterアプリ - slice](./06_counter_app_slice.md)*

## 概要

まずは最も簡単な例としてcounterアプリを扱う。

## ソース

[counterアプリ](https://codesandbox.io/s/counter-0k1109)

## ファイルレイアウト

- src/
  - index.ts - エントリーポイント
  - App.ts - `view`
  - slice.ts - `action`/`reducer`を定義するモジュール
  - store.ts - `store`

## 画面仕様

- 現在の数値
- +: 数値を1増やすボタン
- -: 数値を1減らすボタン

![](./counter.png)
