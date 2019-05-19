# 座学

## 目的

- Web Frontend エンジニアの役割を知る
- 昨今の Web アプリケーションの開発スタイルを知る

## Table of Contents

- Web Frontend エンジニアとは？
- ACCESS 製 Web アプリの紹介
- HTML
- CSS
- JavaScript
- DOM(Document Object Model)
- Web Frontend 開発の移り変わり
- メジャーな周辺ツール
- Chrome Developer Tools

## Web Frontend エンジニアとは？

- Web アプリケーションの Frontend を開発するエンジニアのこと
- HTML, JavaScript, CSS を組み合わせて、UI を作成する

### Web Frontend の特徴

- 技術の流行り廃りが激しい
- 周辺ツールが豊富で、便利な分覚えることも多い
- JavaScript の言語仕様である ECMAScript は年ごとにアップデートされる
- 非同期処理をうまく扱えるかが 1 つのポイント

## ACCESS 製 Web アプリの紹介

- [Linkit](https://www.access-company.com/products/service-solution/linkit/)
  - ACCESS 製のチャットサービス
  - iOS, Android, Web アプリの GUI をもつ
- [SIGNESS](https://www.access-company.com/products/service-solution/signess/)
  - デジタルサイネージ
- [ABF](https://www.access-company.com/products/iot/access-beacon-framework/)
  - Access Beacon Framework
- [PUBLUS](https://www.access-company.com/products/ebook/)
  - 電子書籍
- [NetFront DTV Solution](https://www.access-company.com/products/browser/netfront-dtv-solution/)
  - テレビ向け

### ACCESS で利用されることが多い OSS (2019/5 時点)

- TypeScript
- React, Redux
- Sass
- webpack

## HTML

```html
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
body {
  background-color: blue; /* body の背景色を blue に変更 */
}

.comment {
  font-size: 12px; /* "にゃーん" の文字サイズを 12px に変更 */
  color: #f3f3f3; /* "にゃーん" の文字色を #f3f3f3 に変更 */
}
```

- HTML に対して、スタイル・レイアウトを記述する言語
- アニメーションの表現も可能

## JavaScript

```js
function sum(a, b) {
  return a + b;
}

sum(1, 2); // ➔ 3
sum(1, '2'); // ➔ '12'
```

- ブラウザで動作する動的型付け言語
  - 暗黙的な型変換が行われる
  - **とにかく罠が多い**

<blockquote class="twitter-tweet" data-lang="ja"><p lang="en" dir="ltr">Thanks for inventing <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a>! ;-) <a href="https://t.co/NISVQTALWB">pic.twitter.com/NISVQTALWB</a></p>&mdash; Claudio De Sio (@cdesio) <a href="https://twitter.com/cdesio/status/1013166206877163520?ref_src=twsrc%5Etfw">2018年6月30日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

- シングルスレッドで動作する
- 標準仕様は、ECMAScript という名前で、ES とよく省略される
  - ES5, ES6 とかでバージョンを指定することがよくあるが、JavaScript5 とは言わない

## DOM(Document Object Model)

```html
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
// img を body に追加する
const imgElm = document.createElement('img');
imgElm.src = './dummy/example/cat.png';
document.body.appendChild(imgElm);

// h1 の文字列を変更する
const headerElm = document.getElementById('header');
headerElm.innerText = 'Hello にゃーん!';
```

- HTML ドキュメントを動的に操作するためのインターフェース
- 基本的には、JavaScript で操作する

## Web Frontend 開発の移り変わり

- CGI
  - サーバーで HTML を生成して、Frontend は静的なページを表示していた
- jQuery が流行る
  - 動的なページを実現するのに、jQuery は便利だった
    - ブラウザの互換性の吸収（特に IE...）
  - DOM を直接操作していた時代
- React, Angular, Vue.js
  - jQuery で大規模な開発は辛かった
    - パフォーマンス、スパゲッティコード、etc.
    - DOM 操作は、ライブラリ・フレームワーク(ViewModel)に任せる
- SPA(Single Page Application)が流行る
  - ページ遷移の UX の向上が主な目的
  - _今回の演習は Vue.js を使って、ここに挑戦！_
- 詳しく知りたい場合は、[Web アプリケーションフロントエンド年代記 - 2018 年夏編](https://www.kaitoy.xyz/2018/08/16/chronicle-of-frontend-2018/) を読むと良い

## メジャーな周辺ツール

- Node.js
  - Chrome の V8 エンジンを利用した JavaScript 実行環境
  - Node.js で動作する様々なツールが存在する
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

![devtools](../images/devtools.png)

- Chrome で開いて、操作してみてください！ (command + option + i)
- 詳細は、[公式サイト](https://developers.google.com/web/tools/chrome-devtools/)を参考
- console で JavaScript を実行してみる
