This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Calculator

React + Typescript 環境を学習するための簡単な電卓です。

## 構成

```
├─ .storybook: Storybook の設定
├─ src : ソースファイルです
│  ├─ components: component のソースファイル
│  ├─ containers: container component のソースファイル
│  ├─ helper: 動作に必要なヘルパー
│     └── FormilaCalculator: 式をパースし計算する機構
└─ README.md: このファイルです
```

## コマンド

### `npm start`

webpack-dev-server を起動してビルドしたコンテンツを http://localhost:3000 に表示します。  
コードを変更すると自動的に更新されます。

### `npm test`

ユニットテストを実行します。

### `npm run build`

ソースファイルをビルドします。

### `npm run storybook`

Storybook を起動します。

### `npm run lint`

ESLint と prettier によるコードスタイルのチェックが実行されます。