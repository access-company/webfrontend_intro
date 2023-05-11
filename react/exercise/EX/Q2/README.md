# Number-Matching-Game

## ルール

ランダムで指定された数字を複数回の試行の末に当てるゲームです。
入力後、セルは以下のように変化します。

* 答えに含まれていない数字 -> 暗転
* 答えに含まれているが位置が正しくない -> 黄色
* 答えに含まれていて位置も正しい -> 緑色

## 実行

### dev

```shell
# src を忘れずに!!!
TARGET=EX/Q2/src npm run dev
```

### Storybook

```shell
TARGET=EX/Q2 npm run storybook
```