---
title: '第1章　JSXを学ぶ'
---

React プログラミングでは、以下のような変数宣言ができます。

```typescript
const element = <h1>Hello, world!</h1>;
```

ECMAScript では、上記のような構文は定義されていません。
上記の `<h1>Hello, world!</h1>` は、文字列や HTML でもありません。

**JSX** と呼ばれる JavaScript の拡張構文です。

JSX を用いて作られる UI の構成要素を **React 要素** と呼びます。
React 要素は、JavaScript のオブジェクトです。

<details><summary>Advanced</summary>
JSX はそのままではブラウザ上では動作しません。
そのため、 React の toolchain を使って、JSX を使わない、通常の JavaScript オブジェクトへ変換します。

この章の Advanced には JSX を使わず、 `React.createElement()` という関数を使用して React 要素を生成する例が書かれています。
</details>

# JSX に式を埋め込む

JSX 内で **中括弧 {}** で囲むことで、 JavaScript の式を使用できます。

```typescript
const name = 'Seiji';
const element = <h1>Hello, {name}</h1>;

ReactDOM.createRoot(document.body).render(element);
```

`formatName(user)` という JavaScript 関数の結果を入れることもできます。

```typescript
interface User {
  firstName: string;
  lastName: string;
}
function formatName(user: User) {
  return `${user.firstName} ${user.lastName}`;
}

const user = {
  firstName: 'Seiji',
  lastName: 'Urushihara',
};

const element = <h1>Hello, {formatName(user)}</h1>;

ReactDOM.createRoot(document.body).render(element);
```

```
`${user.firstName} ${user.lastName}`
```

これは **テンプレートリテラル (テンプレート文字列)** という記法です。バッククォートを使って定義され、文字列内に変数や式を埋め込むことができる JavaScript の機能です。これにより、複雑な文字列の組み立てが簡単に行えます。変数は `${}` の中に記述します。

<details><summary>Advanced</summary>

もし JSX の助けを得ずに記述すると、このようになります。

```typescript
import React from 'react';

const element = React.createElement('h1', null, `Hello, ${formatName(user)}`);
```

</details>

# JSX も式である

変数への代入はもちろん、

- 関数の引数への受け渡し
- 関数からの戻り値
- `if`文や`for`文の中

などで JSX を利用できます。

```typescript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, guest.</h1>;
}
```

<details><summary>Advanced</summary>

もし JSX の助けを得ずに記述すると、このようになります。

```typescript
import React from "react"

function getGreeting(user) {
  if (user) {
    return React.createElement("h1",null,
      "Hello, ", formatName(user)
    )
  }
  return React.createElement("h1",null,
    "Hello, guest."
  )
```

</details>

# JSX に属性を指定する

## 文字列リテラル

文字列リテラルを属性として指定するために引用符`""`を使用できます。

```typescript
const element = <div tabIndex="0"></div>;
```

## JavaScript 式を埋め込む

JavaScript 式を JSX に埋め込むために中括弧 `{}` を使用します。

```typescript
const element = <div tabIndex={getIndex()}></div>;
```

<details><summary>Advanced</summary>

もし JSX の助けを得ずに記述すると、このようになります。

```typescript
import React from 'react';

const element = React.createElement('div', { tabIndex: '0' });
```

```typescript
import React from 'react';

const element = React.createElement('div', { tabIndex: getIndex() });
```

</details>

## すべての HTML 属性をサポート

React は、すべての HTML 属性をサポートしています。

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

改めて、忘れてはいけない点は、 JSX は HTML ではなく **JavaScript の拡張構文** であるということです。

**JSX の属性は、キャメルケース（camelCase）の命名規則** を使用する必要があります。

また JavaScript の予約語と被る属性、

- `class` は、`className`
- `for` は、`htmlFor`

と記述します。

例外として、 `aria-*` 属性と `data-*` 属性は、キャメルケースの命名規則を利用しなくてよいです。

# JSX で子要素を指定する

JSX のタグは子要素を持つことができます。
また、 JSX は括弧 `()` で囲むことで、複数行に分けて記述することができます。

```typescript
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

# 空の要素(Fragment)

React のコンポーネント（3章参照）では DOM 要素を返すとき 1 つの要素しか返せません。
コンポーネントが複数の要素を返すには、Fragment(`<>`)を使用すると、DOM に余分なノードを追加することなく、子要素のリストをグループ化することができます。

```typescript
const element1 = (
  <>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </>
);
```

余分な DOM ノードの作成を避けることで以下の様な利点があります。

- **パフォーマンス向上** : わずかに高速で、メモリ消費量も少なくなります。
- **CSSレイアウトの維持** : Flexbox や CSS Gridを使ったレイアウトにおいて、意図しない要素が挿入されることによるレイアウト崩れを防ぎます。
- **DOM構造の簡潔化** : DOM インスペクタで要素を確認する際に、 DOM 構造が整理されて見やすくなります。

なお、 `<>` は `<React.Fragment>` のシンタックスシュガーです。
そのため、上記の `element1` と以下の `element2` は同じ構造のオブジェクトになります。

```typescript
const element2 = (
  <React.Fragment>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </React.Fragment>
);
```

※ シンタックスシュガー（糖衣構文）は、コードを短く読みやすくする代替記法です。

# JSX を深く理解する

- [JSX でマークアップを記述する](https://ja.react.dev/learn/writing-markup-with-jsx)
- [JSX に波括弧で JavaScript を含める](https://ja.react.dev/learn/javascript-in-jsx-with-curly-braces)

# 【課題 1-1】スタイルを指定してみよう！

以下の要件を満たしてください。

- 任意の赤色の物の名前, 緑色の物の名前, 青色の物の名前を JSX 内に追加
  - それぞれが赤色, 青色, 緑色となるようにスタイルを指定
  - 並びや位置関係、厳密に物の色が正しいかどうかは不問

```bash
# react/exercise にて
$ TARGET=C01/Q1 npm run dev
```

編集対象ファイル: `react/exercise/C01/Q1/index.tsx`

![実装イメージ](./01_lesson1-1.png)
