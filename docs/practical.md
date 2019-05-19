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
- 非同期処理をうまく扱えるかが１つのポイント

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
- [NetFrontDTVSolution](https://www.access-company.com/products/browser/netfront-dtv-solution/)
  - テレビ系

## HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <div>Hello World!</div>
  </body>
</html>
```

- Web ページを記述するマークアップ言語

## CSS

```css
body {
  background-color: blue;
}
div {
  width: 100px;
  height: 100px;
}
```

- スタイル・レイアウトを記述する言語
- アニメーションもできる

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
  - とにかく罠が多い
- シングルスレッドで動作する
- 標準仕様は、ECMAScript という名前で、ES とよく省略される
- ES5, ES6 とかでバージョンを指定することがよくあるが、JavaScript5 とは言わない

## DOM(Document Object Model)

```js
// divをbodyに追加する例
const divElm = document.createElement('div');
document.body.appendChild(divElm);
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

## メジャーな周辺ツール

- Node.js
  - Chrome の V8 エンジンを利用した JavaScript 実行環境
  - Node.js で動作する様々なツールが存在する
- Webpack
  - Node.js で動作するツールの一つ
  - JavaScript にモジュールの概念を導入する
  - import, require で複数ファイルを管理できるように
- Chrome Developer Tools(option + command + I)
  - コンソール（実行時エラー、ログの確認、JavaScript の挙動確認）
  - 要素検証（DOM, CSS を直接変更できる）
  - ネットワーク
  - ブレークポイント
  - DevTools はメジャーブラウザであればある

## Chrome Developer Tools

- Chrome で開いて、操作してみてください！

[画像]

- 上記は弊社サイトで開いた例
- 詳細は、[公式サイト](https://developers.google.com/web/tools/chrome-devtools/)で確認してみてください
- console で JavaScript を実行してみる
