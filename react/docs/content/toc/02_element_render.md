---
title: "第2章　要素のレンダー"
---

# React要素をルートDOMにレンダリングする

React要素は、JavaScriptの関数です。ただの関数であるため、ブラウザのDOMに描画するための API を利用する必要があります。ブラウザのDOMに描画するには、react-domライブラリが提供する `ReactDOM.render()` を利用します。

HTMLファイルにマークアップされた `id`属性の値が`root`の`div`要素に対して、「Hello, world!」を描画する例は以下の通りです。

```html
<div id="root"></div>
```

```javascript
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
)
```
[CodePen](https://codepen.io/aseijiurushihara/pen/XWmmKPw)


# 【課題2-1】 自分の氏名を表示してみよう！

以下の要件を満たしてください（[Fork](https://codepen.io/aseijiurushihara/pen/XWmmKPw?editable=true&editors=0010)）。

* 画面に「Hello, FirstName LastName!」を出力する
  * （注: FirstName LastName は各自の名前）
* `ReactDOM.render` の第1引数の一部を式（関数）に置き換える
  * 氏名を格納したオブジェクトを関数の引数に渡す


# Reactは再描画が必要な箇所のみ更新する

DOM APIを使って実装した場合、開発者自身が値の変更箇所を検知する仕組みを用意し、
描画の更新を明示的にプログラミングしていく必要があります。

Reactでは、明示的に要素の更新箇所を制御する必要はありません。再描画が必要な箇所は、
Reactが面倒を見ます。結果、DOM API を扱うよりもパフォーマンスに優れた実装が可能となります。
もちろん、例外はありますが、多くのケースでは気にする必要はありません。


「秒刻みで動く時計」のサンプルで、再描画が必要な箇所のみ更新されていることを確認します。


```javascript
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  ReactDOM.render(element, document.getElementById('root'))
}

setInterval(tick, 1000)
```

[CodePen](https://codepen.io/aseijiurushihara/pen/NWGzOar)


<details><summary>Advanced</summary>

もしも React に頼らず vanillajs で記述すると、このようになります。

```javascript
function tick() {
  const h1_text = "Hello, world!"
  const h2_text = `It is ${new Date().toLocaleTimeString()}.`

  const root = document.getElementById('root')
  if ( root.children.length === 1 ) {
    const [div] = root.children
    if ( div.children.length === 2 ) {
      const [h1, h2] = div.children
      if ( h1.textContent !== h1_text ) { h1.textContent = h1_text }
      if ( h2.textContent !== h2_text ) { h2.textContent = h2_text }
    }
  } else {
    const div = document.createElement("div")

    const h1 = document.createElement("h1")
    h1.textContent = h1_text

    const h2 = document.createElement("h2")
    h2.textContent = h2_text

    div.appendChild(h1)
    div.appendChild(h2)

    root.appendChild(div)
  }
}

setInterval(tick, 1000)
```


</details>