# 座学

## 目的

- Web Frontend エンジニアの役割を知る
- 昨今の Web アプリケーションの開発スタイルを知る

## Web Frontend エンジニアとは？

- Web アプリケーションの Frontend を開発するエンジニアのこと
  - 単に「フロントエンドエンジニア」と呼ばれることも多い
- HTML, JavaScript, CSS を組み合わせて、UI を実装する
  - 基本的に対象プラットフォームは PC, タブレット, スマートフォンのブラウザであるが、iOS/Android アプリ内の WebView がターゲットとなることも多い

## Web Frontend という領域の特徴

- 技術の流行り廃りがとにかく激しい
  - ググる際は `Past Year` をよく使う
  - 長期メンテが必要な Web アプリを実装する際は技術選択に注意
- 周辺ツールが豊富で、便利な分覚えることも多い
- JavaScript の言語仕様である ECMAScript は年ごとにアップデートされる
- 非同期処理をうまく扱えるかが 1 つのポイント

## ACCESS 製 Web アプリの紹介

- [Linkit](https://www.access-company.com/products/service-solution/linkit/)
  - ACCESS 製の法人向けチャットサービス
  - iOS, Android に加えて Web アプリの GUI をサポート
- [SIGNESS](https://www.access-company.com/products/service-solution/signess/)
  - デジタルサイネージソリューション
  - Web アプリのオーサリングツールや、配信を制御するシステム
- [ABF](https://www.access-company.com/products/iot/access-beacon-framework/)
  - Access Beacon Framework
- [PUBLUS](https://www.access-company.com/products/ebook/)
  - 電子書籍
- [NetFront DTV Solution](https://www.access-company.com/products/browser/netfront-dtv-solution/)
  - テレビ向けに提供しているブラウザ上で動作する Web アプリ, TV 向けの UI など
- 他多数。実際 IoT ソリューションの請負開発で Web アプリを実装する機会は非常に多い
  - IoT デバイスの管理画面
  - データの可視化

### ACCESS で利用されることが多い OSS (2019/5 時点)

- [TypeScript](https://www.typescriptlang.org/index.html)
- [React](https://reactjs.org/), [Redux](https://redux.js.org/)
- [Sass](https://sass-lang.com/)
- [webpack](https://webpack.js.org/)

## HTML

```html
<!-- HTML -->
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>にゃーん</p>
  </body>
</html>
```

- Web ページを記述するマークアップ言語
- Web ページの構造を構成する

## CSS

```html
<!-- HTML -->
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p class="comment">にゃーん</p>
  </body>
</html>
```

```css
/* CSS */
body {
  background-color: blue; /* body の背景色を blue に変更 */
}

.comment {
  font-size: 12px; /* "にゃーん" の文字サイズを 12px に変更 */
  color: #f3f3f3; /* "にゃーん" の文字色を #f3f3f3 に変更 */
}
```

- HTML に対して、スタイル/レイアウトを記述する言語
- アニメーションの表現も可能

## JavaScript

```js
// JavaScript
function sum(a, b) {
  return a + b;
}

sum(1, 2); // ➔ 3
sum(1, '2'); // ➔ '12'
```

- ブラウザで動作する動的型付け言語
  - 暗黙的な型変換が行われる
  - **とにかく罠が多い！**
- シングルスレッドで動作する
- 標準仕様は、ECMAScript という名前で、ES とよく省略される
  - ES5, ES6 とかでバージョンを指定することがよくあるが、JavaScript5 とは言わない
  - 2015 年以降は年毎にアップデートされるようになり version ではなく年で表すようになった
    - ES5
    - ======= 超えられない壁 =======
    - ES6 === ES2015
    - ES2016
    - ES2017
    - ES2018
    - ES2019

### 罠の例 😱

<blockquote class="twitter-tweet" data-lang="ja"><p lang="en" dir="ltr">Thanks for inventing <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a>! ;-) <a href="https://t.co/NISVQTALWB">pic.twitter.com/NISVQTALWB</a></p>&mdash; Claudio De Sio (@cdesio) <a href="https://twitter.com/cdesio/status/1013166206877163520?ref_src=twsrc%5Etfw">2018年6月30日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## DOM(Document Object Model)

```html
<!-- HTML -->
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Hello</title>
  </head>
  <body>
    <h1 id="header">Hello World!</h1>
    <p class="comment">にゃーん</p>
  </body>
</html>
```

```js
// JavaScript

// img を body に追加する
const imgElm = document.createElement('img');
imgElm.src = './dummy/example/cat.png';
document.body.appendChild(imgElm);

// h1 の文字列を変更する
const headerElm = document.getElementById('header');
headerElm.innerText = 'Hello にゃーん!';
```

- HTML ドキュメントを動的に操作するための [インターフェース](https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model/Introduction#What_is_the_DOM)
- 基本的には、JavaScript で操作する

## Web Frontend 開発の移り変わり

- CGI (Common Gateway Interface) (1990 年代中盤〜後半)
  - サーバーで HTML を生成して、Frontend は静的なページを表示していた
- jQuery が流行る (2006 年〜)
  - 動的なページを実現するのに、jQuery は便利だった
    - ブラウザの互換性の吸収（特に IE...）
  - DOM を直接操作していた時代
- SPA(Single Page Application)の登場 (2010 年〜)
  - ページ遷移の UX の向上が主な目的
- React, Angular, Vue.js などの仮想 DOM 勢(概ね 2014 年〜)
  - jQuery で大規模な開発は辛かった
    - パフォーマンス、スパゲッティコード、etc.
    - DOM 操作は、ライブラリ・フレームワーク(ViewModel)に任せる
  - **今回の演習は Vue.js を使って Stack Overflow clone の開発に挑戦！**
- 詳しい歴史を知りたい人は [Web アプリケーションフロントエンド年代記 - 2018 年夏編](https://www.kaitoy.xyz/2018/08/16/chronicle-of-frontend-2018/) が素晴らしい記事なのでオススメ

## メジャーな周辺ツール

- Node.js
  - Chrome の V8 エンジンを利用した JavaScript 実行環境
  - Node.js で動作する様々なツールが存在する
  - express などの Web Application Framework を利用してサーバサイド実装
- Webpack
  - Node.js で動作するツールの一つ
  - JavaScript にモジュールの概念を導入する
  - import, require で複数ファイルを管理できるように
- Chrome Developer Tools
  - コンソール（実行時エラー、ログの確認、JavaScript の挙動確認）
  - 要素検証（DOM, CSS を直接変更できる）
  - ネットワーク
  - ブレークポイント
  - Android 端末との連携
  - メジャーブラウザは類似機能をサポートしていて、Web Inspector を呼ばれることもある

## Chrome Developer Tools

![devtools](./images/devtools.png)

- Chrome で適当なサイトを開いて `command + option + i` ！
- 非常に多機能で、頻繁に機能追加、アップデートされる。これがないと Web Frontend エンジニアは生きていけない。
- 詳細は、[公式サイト](https://developers.google.com/web/tools/chrome-devtools/)を参考
