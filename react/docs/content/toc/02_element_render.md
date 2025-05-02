---
title: '第2章　要素のレンダー'
---

# DOM (Document Object Model)

![HTMLとDOMの関係](./02_lesson2-1.png)

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

## 初期表示までの流れ

![初回のブラウザレンダリングの流れ](./02_lesson2-2.png)

ここでは、 Reactアプリが「まだ何も表示されていない状態から最初の画面が描かれるまで」を説明します。

1. コンポーネント（関数）は実行されたら、JSXを返します。
2. JSX から UI を表す仮想 DOM（JavaScript オブジェクト） が構築されます。UI の表現はメモリ内に保持されます。
3. React DOM が仮想 DOM を読み取り、document.createElement などで実 DOM を生成し、ツリーをブラウザに挿入します。
4. 実 DOM が完成すると、画面が描画されます。

## 仮想 DOM の差分検出

![画面の更新の流れ](./02_lesson2-3.png)

次は 「アプリが動き始めたあと、データが変わるたびに React が どこを・どれだけ描き直すかを決める仕組み」について説明します。こちらは、新しく構築された仮想 DOM と、以前構築された仮想 DOM を比較することで、必要最小限だけ更新する点がポイントになります。

1. 基礎となるデータが変更されるたびに、対応するコンポーネント関数が再実行され、新しい JSX を返します。
2. JSX から **新しい**仮想 DOM（JavaScript オブジェクト） が構築され、以前の仮想 DOM と新しい仮想 DOM を比較し、**差分（変更のあった部分）を検出します**。
3. 検出した差分**のみ**を実 DOM に反映します。
4. 実 DOM が更新されると、ブラウザが再度レンダリングパイプライン（レイアウト → ペイント → コンポジット）を実行し、**変更があった領域だけ** を再描画します。

## 「掛け算の計算」のサンプルで確認してみよう

ブラウザの開発者ツールを使って、更新された要素のみ再描画されることを確認してみましょう。
ただし、 `useState` という React の API は「第 8 章 state」で詳しく説明するため理解は不要です。

```tsx
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Multiplication() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);

  const result = num1 * num2;

  return (
    <div>
      <button onClick={() => setNum1(num1 + 1)}>{num1}</button>
      {'x'}
      <button onClick={() => setNum2(num2 + 1)}>{num2}</button>
      {'='}
      {result}
    </div>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(<Multiplication />);
```

```bash
# react/exercise にて
$ TARGET=C02/Sample1 npm run dev
```

<details>
<summary>Advanced</summary>

もしも React に頼らず vanillajs で記述すると、このようになります。

```javascript
function renderCalculator() {
  let num1 = 1;
  let num2 = 1;

  const root = document.getElementById('root');
  root.innerHTML = `
    <div>
      <button>${num1}</button>
      x
      <button>${num2}</button>
      =
      <span>${num1 * num2}</span>
    </div>
  `;

  const [button1, button2] = root.querySelectorAll('button');
  const resultSpan = root.querySelector('span');

  const update = () => {
    button1.textContent = num1;
    button2.textContent = num2;
    resultSpan.textContent = num1 * num2;
  };

  button1.addEventListener('click', () => {
    num1++;
    update();
  });

  button2.addEventListener('click', () => {
    num2++;
    update();
  });
}

renderCalculator();
```

</details>
