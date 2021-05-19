---
title: "準備"
---

# 1. Documents

社内サーバへ接続します。VPNに接続してください。

1. 以下のサイトを開く
https://github.com/access-company/webfrontend_intro
2. 右上の「Fork」ボタンを押下
3. 自身のアカウントを選択

自身のアカウントへリポジトリがForkされます。任意のディレクトリに移動して、**Forkされたリポジトリ** （`https://github.com/[YourGitAccountName]/webfrontend_intro.git`）を git clone してください。clone後に依存モジュールをインストール（1回のみ）した後、yarn start コマンドを実行して、本研修資料を開いてください。

```bash
$ cd (任意のディレクトリ)
$ git clone https://github.com/[YourGitAccountName]/webfrontend_intro.git   // Your account repository
$ cd webfrontend-intro/react/docs
$ yarn install
$ yarn start

http://localhost:8000
```
git clone した後は、VPNを切断してください。


# 2. MindMap（任意）

MindMapの表示は、[MindMaster](https://www.edrawsoft.com/jp/mindmaster/) というソフトウェアを使っています。

[MindMasterのinstallerをダウンロード](https://drive.google.com/open?id=1txrzEQD-_DutWx6bciAL1vM8hMUAkRlV)

[React研修のMindMapファイル(react_training.emmx)](https://drive.google.com/open?id=1XNs1w0YVVRLVVV03vuULRP-_WNv6nM4-)

MindMapの内容を確認したい方は、MindMasterで react_training.emmx ファイルを開いてください。react_training.emmx の内容は、本研修資料と同じです。

研修中は、react_training.emmx の内容を主に画面共有します。受講生の方々は、本研修資料（ http://localhost:8000 ）を手元で見れるようにしてください。


# 3. CodePen

Reactの簡易的な動作確認では、CodePen（ https://codepen.io/ ）を使います。

CodePenの登録（**3-1.**）までを済ませてください。

3-2, 3-3 は現時点で不要な操作です。

## 3-1. Registration

1. https://codepen.io を開く
2. アカウントを登録する
3. アカウントの「Setting」を選択する
4. 「Preprocessor & Library Defaults」→「JS Preprocessor」を「 **TypeScript** 」へ変更する
5. 「Save All Settings」

## 3-2. New Pen

1. https://codepen.io を開く
2. 「New Pen」を選択する
3. 「Settings」ボタンを押下して、「JS」メニューを選択する
4. 「react」を検索して、 **"react"** と **"react-dom"** を追加する
  ```
  https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.production.min.js
  https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js
  ```
5. 「Save & Close」

## 3-3. Fork

1. 任意のCodePenサンプルを開く
2. 右下の「Fork」を選択
　→ マイアカウントにコピーされる

# 4. サンプル： 電卓アプリ

React のサンプルとして用意した電卓アプリ。

## 4-1. Setup

### 4-1-1. Install

Current directory が docs (webfrontend-intro/react/docs) の時、
```
cd ../sample
yarn install
```

### 4-1-2. Working check

各コマンドを打って動作するかチェック  

* `yarn test`
  * 初期状態ではテストケースがないため、jest だけが動作する
* `yarn start`
  * webpack-dev-server が起動し、ブラウザにコンテンツが表示される
* `yarn storybook`
  * storybook が起動し、3 種類のコンポーネントがリストに表示される
* `yarn lint`
  * ESLint と prettier が動作し waring が多数出る

## 4-2. yarn Commands

### yarn start

webpack-dev-server を起動してビルドしたコンテンツを http://localhost:3000 に表示します。  
コードを変更すると自動的に更新されます。

### yarn test

ユニットテストを実行します。

### yarn build

ソースファイルをビルドします。

### yarn storybook

Storybook を起動します。

### yarn lint

ESLint と prettier によるコードスタイルのチェックが実行されます。

## 4-3. Storybook

### What is Storybook?

Storybook は UI 上で用いるコンポーネントの一覧（カタログ）を作成するツールです.  
コンポーネント単位でのスタイルの確認や `props` による表示の変化等を確認する際に便利です.  
Addon も豊富で, 用途や目的に合わせて Storybook に様々な機能を追加できます.

### Stories file

各コンポーネントの表示内容を指定するファイル.今回はあらかじめ記述済み.  
表示内容はコンポーネントごとの `**/*.stories.tsx` にて定義しているので, 実際の記述が気になる人はチェック.

### Run storybook

1. `yarn install`  
(初回セットアップをしていない場合)
2. `yarn storybook`

##### NOTE

* ターミナル側で一度起動するとソースコードの変更に応じて, 自動的に再ビルドされます.  
ビルド後, Storybook を表示しているブラウザ側も自動的に更新されます.
  * ただし CSS のみの変更はフックされないので、変更した場合は手動でブラウザ側を更新してください.
  * ビルド時にビルドエラーが起きると, Storybook 側にもエラーが表示されます.  
  修正を行えば自動的に再ビルドされて自動更新されるため, Storybook 自体を再起動する必要はありません.
* 今回はポート番号を指定していないので, Storybook 起動ごとに異なるポート番号が指定されます.

### Features

当サンプルでの Storybook の機能を紹介します.

![./sb.png](./sb.png)

1. Shortcuts
  * メニューの表示非表示といった Storybook の操作とショートカットが表示されるメニュー
2. コンポーネント一覧
  * `*.stories.tsx` ファイルが存在するコンポーネントの一覧
  * クリックで表示するコンポーネントの切り替え
3. コンポーネント表示部
  * コンポーネントを表示するエリア
  * クリックやキー入力が効き, 特定のイベント発火を確認可能
4. Addon 表示部
  * Actions: `console.log` の結果やイベントの内容を出力
  * Knobs: `props` 等に渡す値を任意のものに変更
    * 例: `Button` に表示するテキストの変更, `Label` で表示する数値の変更 等