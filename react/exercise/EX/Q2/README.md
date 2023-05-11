# Number-Matching-Game

## ルール

ランダムで指定された数字を複数回の試行の末に当てる、Woldle もどきのゲームです。
入力後、セルは以下のように変化します。

* 答えに含まれていない数字 -> 暗転
* 答えに含まれているが位置が正しくない -> 黄色
* 答えに含まれていて位置も正しい -> 緑色

規定回数内にランダムで設定された数字の並びを当てられたら勝ちです

## 要件

* 0-9 のボタンと、Reset、Delete、Guess ボタンが存在している
  * 0-9 のボタンを押すと、入力値 `inputValues` へ数字が追加される
  * Reset ボタンを押すと、すべての状態を初期化し、解答 `answer` を再生成する
  * Delete ボタンを押すと、入力値の内容を一つ削る
  * Guess ボタンを押すと、入力値 `inputValues` と解答 `answer` を比較し、結果を `Tile` に反映する
  * 一部キー入力でクリックと同じ振る舞いをする
      * '0-9' の数字キー -> それぞれの数字ボタン
      * 'r' キー -> Reset ボタン
      * 'Enter' キー -> Guess ボタン
      * 'Backspace' キー -> Delete ボタン


## ディレクトリ構成

* src: ソースファイル
    * constants: ゲームバランス調整等の定数
    * lib: ゲームのロジック面の実装
    * view: コンポーネント実装
        * components: 部品のコンポーネント
            * コンポーネント名.tsx: コンポーネントの実装本体
            * コンポーネント名.stories.tsx: Storybook 用の実装。ゲームの動作とは直接関係ない。
            * コンポーネント名.test.tsx: ユニットテスト用の実装。テストモジュール入れてないので今は動きません。
        * containers: container コンポーネント（ページ）
            * コンポーネント名.tsx: コンポーネントの実装本体
            * コンポーネント名.stories.tsx: Storybook 用の実装。ゲームの動作とは直接関係ない。
        * layouts: レイアウトの指定をするコンポーネント

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