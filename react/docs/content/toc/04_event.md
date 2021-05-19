---
title: "第4章　イベント処理"
---

Reactでのイベント処理は、DOM要素のイベント処理と似ています。
ただし、ReactとHTMLは少し文法が異なります。

* HTMLの場合
  * `<button onclick="handleClick">OK</button>`
* Reactの場合
  * `<button onClick={handleClick}>OK</button>`

Reactでは、イベント属性名を camelCase としてください。また、そのイベントハンドラは、中括弧で囲ってください。

Reactコンポーネントで書いた例は下記の通りです。

```javascript
function OKButton() {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    console.log('Clicked!')
  }

  return <button onClick={handleClick}>OK</button>
}
```

`e`は、合成イベント（SyntheticEvent）と呼ばれ、W3C の UI Events 仕様に従った値が渡ってきます。

* [W3C UI Events](https://www.w3.org/TR/DOM-Level-3-Events/)
* [SyntheticEvent](https://ja.reactjs.org/docs/events.html)
  * React独自のクロスブラウザ対応イベントオブジェクト


# 【DOM API】 preventDefault と stopPropagation について

いずれもイベントハンドラ関数内で呼び出すことのできるAPIです。このAPIは、
Reactのものではなく、JavaScript のAPI（DOM API）です。
実習時にハマる可能性があるため、使い方をここで説明します。


## preventDefault

`preventDefault()`は、実行したイベントがキャンセルできる場合、イベントをキャンセルするためのAPIです。

ここでいうイベントとは、

* `input`要素や`textarea`要素の入力
* `checkbox` のチェック
* `a`要素のクリック

などを指します。

イベントハンドラの実装で、`e.preventDefault()` を呼び出して、イベントをキャンセルすると、下記の挙動となります。

* `input`要素や`textarea`要素の入力が行えなくなる
* `checkbox` のチェックができなくなる
* `a`要素のリンク先へ遷移しない

このとき、親要素（上位ノード）に対してのイベントの伝播（propagation)は止まりません。


## stopPropagation

親要素（上位ノード）へのイベントの伝播を止めるには、`stopPropagation()` を使います。

下記のような実装では、buttonを clickすると、コンソールに "inner" と "outer" が表示されます。

```javascript
function Counter() {
  const handleOuterClick = () => {
    console.log('outer')
  }
  const handleInnerClick = () => {
    console.log('inner')
  }
  return (
    <div className="outer" onClick={handleOuterClick}>
      <button className="inner" onClick={handleInnerClick}>click me</button>
    </div>
  )
}
```

`handleOuterClick`が実行したくない場合は、`stopPropagation` を `handleInnerClick` 内で実行してください。

```javascript
function Counter() {
  const handleOuterClick = () => {
    console.log('outer')
  }
  const handleInnerClick = () => {
    e.stopPropagation()
    console.log('inner')
  }
  return (
    <div className="outer" onClick={handleOuterClick}>
      <button className="inner" onClick={handleInnerClick}>click me</button>
    </div>
  )
}
```

## preventDefault + stopPropagation

両方を呼び出すことで、イベントのキャンセルと伝播を止めることができます。

# 【課題4-1】イベントハンドラを追加してみよう！

以下の要件を満たしてください（[Fork](https://codepen.io/ka-clmx/pen/PopbKKB)）。

* 画面上の `<button>` `<div>` にそれぞれ下記を満たす click イベントのハンドラを追加する
  * `<button>` をクリックした際には `Clicked Button` とコンソールに表示する
  * `<div>` をクリックした際には `Clicked Div` とコンソールに表示する


# 【課題4-2】意図しない動き...

以下の要件を満たしてください（[Fork](https://codepen.io/ka-clmx/pen/ExWNbYO)）。

* 画面上の 2 つの `<div>` にそれぞれ下記を満たす click イベントのハンドラを追加する
  * 赤い `<div>` をクリックした際には `Clicked Red` のみコンソールに表示する
  * 青い `<div>` をクリックした際には `Clicked Blue` のみコンソールに表示する

