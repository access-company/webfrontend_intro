---
title: '第4章　イベント処理'
---

React でのイベント処理は、 HTML のイベント処理と似ていますが、文法が少し異なります。

- HTML の場合
  - `<button onclick="handleClick">OK</button>`
- React の場合
  - `<button onClick={handleClick}>OK</button>`

React では、イベント属性名を camelCase にし、イベントハンドラは中括弧で囲む必要があります。

React コンポーネントで書いた例は下記の通りです。

```javascript
function OKButton() {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log('Clicked!');
  }

  return <button onClick={handleClick}>OK</button>;
}
```
`handleClick` の仮引数 `e` は、合成イベント（SyntheticEvent）と呼ばれるオブジェクトで、W3C の UI Events という仕様に準拠した API を提供します。
これは、 React がブラウザの標準のイベント（ネイティブイベント）をラップし、どのブラウザでも一貫した動作をするように設計されたものです。

- [W3C UI Events](https://www.w3.org/TR/DOM-Level-3-Events/)
- [SyntheticEvent](https://ja.react.dev/learn/typescript#typing-dom-events)

# 【DOM API】 preventDefault と stopPropagation について

いずれもイベントハンドラ関数内で呼び出すことのできる API です。
この API は、 React 独自のものではなく、 JavaScript の API（DOM API）です。
実習時にハマる可能性があるため、使い方をここで説明します。

## preventDefault

`preventDefault()` は、実行したイベントがキャンセルできる場合に、そのイベントのデフォルトの動作をキャンセルするための API です。

ここでいうイベントのデフォルト動作とは、

- `<form>` の送信
- `<checkbox>` のチェック切り替え
- `<a>` 要素のクリックによる画面遷移

などを指します。

`preventDefault()` をイベントハンドラ内で呼び出すと、以下の様な挙動になります。

- `<form>` の送信ボタンを押しても、フォームが送信されない
- `<checkbox>` のチェックが切り替わらなくなる
- `<a>` 要素をクリックしても、リンク先へ遷移しない

ただし、 `preventDefault()` は親要素（上位ノード）に対してのイベントの伝播（propagation)を止めるものではありません。イベント伝播を防ぎたい場合は、後述する `stopPropagation()` を使用する必要があります。

## stopPropagation

親要素（上位ノード）へのイベントの伝播を止めるには、 `stopPropagation()` を使います。

下記のような実装では、button を click すると、コンソールに "inner" と "outer" が表示されます。
これは、button のクリックイベントが親要素である div にも伝播するためです。

```javascript
function Counter() {
  const handleOuterClick = () => {
    console.log('outer');
  };
  const handleInnerClick = () => {
    console.log('inner');
  };
  return (
    <div className="outer" onClick={handleOuterClick}>
      <button className="inner" onClick={handleInnerClick}>
        click me
      </button>
    </div>
  );
}
```

`handleOuterClick` を実行したくない場合は、 `stopPropagation` を `handleInnerClick` 内で実行してください。

```typescript
function Counter() {
  const handleOuterClick = () => {
    console.log('outer');
  };
  const handleInnerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log('inner');
  };
  return (
    <div className="outer" onClick={handleOuterClick}>
      <button className="inner" onClick={handleInnerClick}>
        click me
      </button>
    </div>
  );
}
```

## preventDefault + stopPropagation

両方を呼び出すことで、イベントのキャンセルと伝播を止めることができます。

# 【課題 4-1】イベントハンドラを追加してみよう！

以下の要件を満たしてください。

- 画面上の `<button>` と `<div>` にそれぞれ下記を満たす click イベントのハンドラを追加する
  - `<button>` をクリックした際には `Clicked Button` とコンソールに表示する
  - `<div>` をクリックした際には `Clicked Div` とコンソールに表示する

```bash
# react/exercise にて
$ TARGET=C04/Q1 npm run dev
```

編集対象ファイル: `react/exercise/C04/Q1/index.tsx`

# 【課題 4-2】意図しない動き...

以下の要件を満たしてください。

- 画面上の 2 つの `<div>` にそれぞれ下記を満たす click イベントのハンドラを追加する
  - 赤い `<div>` をクリックした際には `Clicked Red` のみコンソールに表示する
  - 青い `<div>` をクリックした際には `Clicked Blue` のみコンソールに表示する

```bash
# react/exercise にて
$ TARGET=C04/Q2 npm run dev
```

編集対象ファイル: `react/exercise/C04/Q2/index.tsx`
