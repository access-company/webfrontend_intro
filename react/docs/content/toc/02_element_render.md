---
title: '第2章　要素のレンダー'
---

# DOM (Document Object Model)

ブラウザの **DOM (Document Object Model)** とは、 Web ページの HTML をツリー構造として表現し、 JavaScript から要素の取得・変更・追加・削除を可能にする仕組みです。
ブラウザがページをレンダリングする際に生成され、動的な操作を通じて UI を更新できます。
このあと出てくる **仮想 DOM** という概念と対比して **実 DOM** と呼ばれることもあります。

## React 要素をルート DOM にレンダリングする

React 要素を DOM に描画するには、 react-dom ライブラリが提供する `ReactDOM.createRoot().render()` という API を利用します。

HTML ファイルにマークアップされた `id` 属性の値が `root` の `div` 要素に対して、「Hello, world!」を描画する例は以下の通りです。

```html
<div id="root"></div>
```

```javascript
ReactDOM.createRoot(document.getElementById("root")!).render(<h1>Hello, world!</h1>);
```

# 【課題 2-1】 自分の氏名を表示してみよう！

以下の要件を満たしてください。

- 画面に「Hello, FirstName LastName!」を出力する
  - （注: FirstName LastName は各自の名前）
- `ReactDOM.createRoot` の仮引数に対象の container を渡します
- `render` に氏名を格納した DOM を渡します

```bash
# react/exercise にて
$ TARGET=C02/Q1 npm run dev
```

編集対象ファイル: `react/exercise/C02/Q1/index.tsx`

# React は仮想 DOM により再描画が必要な箇所のみ更新する

ブラウザが提供する DOM API（Document Object Model API）を利用すると、 JavaScript から要素の取得・変更・追加・削除やイベント処理が可能になります。
ただし DOM API は、効率的な描画更新の仕組みは備えていません。
そのため、開発者自身が値の変更箇所を検知する仕組みを用意し、描画の更新を明示的にプログラミングしていく必要があります。

React では、明示的に要素の更新箇所を制御する必要はありません。仮想 DOM によって再描画が必要な箇所は、
React が面倒を見ます。結果、DOM API を扱うよりもパフォーマンスに優れた実装が可能となります。
もちろん、例外はありますが、多くのケースでは気にする必要はありません。

## 仮想 DOM

仮想 DOM は実 DOMをメモリ内に表現したものです。UI の表現はメモリ内に保持され、実 DOM と同期されます。

基礎となるデータが変更されるたびに、UI 全体が 仮想 DOM を再構築します。
そして以前の仮想 DOM と新しい仮想 DOM を比較し、差分（変更のあった部分）を検出します。
その後、検出した差分のみを実 DOM を反映します。

![仮想DOMのイメージ](./02_lesson2-1.png)

## 「掛け算の計算」のサンプルで確認してみよう

ブラウザの開発者ツールを使って、更新された要素のみ再描画されることを確認してみましょう。
ただし、 `useState` という React の API は「第8章 state」で詳しく説明するため理解は不要です。

```tsx
import { useState } from "react";
import { createRoot } from "react-dom/client";

function Multiplication() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);

  const result = num1 * num2;

  return (
    <div>
      <button onClick={() => setNum1(num1 + 1)}>{num1}</button>
      x
      <button onClick={() => setNum2(num2 + 1)}>{num2}</button>
      =
    {result}
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<Multiplication />);
```

```bash
# react/exercise にて
$ TARGET=C02/Sample1 npm run dev
```

<details><summary>Advanced</summary>

もしも React に頼らず vanillajs で記述すると、このようになります。

```javascript
function renderCalculator() {
  let num1 = 1;
  let num2 = 1;

  const root = document.getElementById("root");
  root.innerHTML = `
    <div>
      <button>${num1}</button>
      x
      <button>${num2}</button>
      =
      <span>${num1 * num2}</span>
    </div>
  `;

  const [button1, button2] = root.querySelectorAll("button");
  const resultSpan = root.querySelector("span");

  const update = () => {
    button1.textContent = num1;
    button2.textContent = num2;
    resultSpan.textContent = num1 * num2;
  };

  button1.addEventListener("click", () => {
    num1++;
    update();
  });

  button2.addEventListener("click", () => {
    num2++;
    update();
  });
}

renderCalculator();

```

</details>
