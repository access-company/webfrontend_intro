---
title: "第1章　JSXを学ぶ"
---

Reactプログラミングでは、以下のような変数宣言ができます。

```javascript
const element = <h1>Hello, world!</h1>
```

ECMAScript では、上記のような構文は定義されていません。
上記の `<h1></h1>` は、文字列やHTMLでもありません。

**JSX** と呼ばれる JavaScript の拡張構文です。ただし、これはそのままブラウザ上では動作しないので注意が必要です。Reactのtoolchainを使って、JSXを使わない、通常のJavaScriptへ変換します。

# JSXを使う理由

通常のHTML/CSS/JavaScriptのWebアプリケーション開発では、マークアップとロジックを別々のファイルに
書いて人為的に技術を分離します。一方、Reactは、マークアップとロジックの両方を含む疎結合の
「 **コンポーネント** 」という単位を導入して、関心を分離します。

この疎結合のコンポーネントを導入することで、宣言的なプログラミングを実現します。


# JSX に式を埋め込む

JSX内で **中括弧 {}** で囲むことで、JavaScriptの式を使用できます。

```javascript
const name = 'Seiji'
const element = <h1>Hello, {name}</h1>

ReactDOM.render(element, document.body)
```

たとえば、`formatName(user)` という JavaScript関数の結果を入れることもできます。

```javascript
function formatName(user) {
  return `${user.firstName} ${user.lastName}`
}

const user = {
  firstName: 'Seiji',
  lastName: 'Urushihara',
}

const element = <h1>Hello, {formatName(user)}</h1>

ReactDOM.render(element, document.body)
```

JSXの構文を複数行に分けて記述する場合は、括弧`()` で囲んでください。

```javascript
const element = (
  <h1>
    Hello, {formatName(user)}
  </h1>
)
```


# JSXも式である

変数への代入はもちろん、

* 関数の引数への受け渡し
* 関数からの戻り値
* `if`文や`for`文の中

などで JSX を利用できます。


```javascript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>
  }
  return <h1>Hello, guest.</h1>
}
```


# JSXに属性を指定する

## 文字列リテラル

文字列リテラルを属性として指定するために引用符`""`を使用できます。

```javascript
const element = <div tabIndex="0"></div>
```

## JavaScript式を埋め込む

JavaScript式をJSXに埋め込むために中括弧`{}`を使用します。

```javascript
const element = <div tabIndex={getIndex()}></div>
```

## スプレッド演算子を利用した属性の展開

コンポーネントに渡すオブジェクトをスプレッド演算子として使用することで、
オブジェクトのパラメータを属性として展開できます。

下記の例は、等価です。

```javascript
function App1() {
  return <Greeting firstName="Seiji" lastName="Urushihara" />
}

function App2() {
  const props = {firstName: 'Seiji', lastName: 'Urushihara'}
  return <Greeting {...props} />
}
```

## すべてのHTML属性をサポート

Reactは、すべてのHTML属性をサポートしています。

```
accept acceptCharset accessKey action allowFullScreen alt async autoComplete
autoFocus autoPlay capture cellPadding cellSpacing challenge charSet checked
cite classID className colSpan cols content contentEditable contextMenu controls
controlsList coords crossOrigin data dateTime default defer dir disabled
download draggable encType form formAction formEncType formMethod formNoValidate
formTarget frameBorder headers height hidden high href hrefLang htmlFor
httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list
loop low manifest marginHeight marginWidth max maxLength media mediaGroup method
min minLength multiple muted name noValidate nonce open optimum pattern
placeholder poster preload profile radioGroup readOnly rel required reversed
role rowSpan rows sandbox scope scoped scrolling seamless selected shape size
sizes span spellCheck src srcDoc srcLang srcSet start step style summary
tabIndex target title type useMap value width wmode wrap
```

改めて、忘れてはいけない点は、HTMLではなく、「JSXはJavaScriptの拡張構文」であるということです。

**JSXの属性は、キャメルケース（camelCase）の命名規則** を使用する必要があります。

JavaScriptの予約語と被る属性、例えば、

* `class` は、`className`
* `for` は、`htmlFor`

と記述します。

例外として、`aria-*`属性と`data-*`属性は、キャメルケースの命名規則を利用しなくてよいです。


# JSXで子要素を指定する

JSXのタグは子要素を持つことができます。

```javascript
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
)
```


# JSX を深く理解する

https://ja.reactjs.org/docs/jsx-in-depth.html