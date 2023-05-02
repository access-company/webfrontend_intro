# Web Frontend 新卒研修の序論

## 目的

- Server 研修では学習の成果として、WebAPI を作成しました
- WF 研修では、その WebAPI を WebFrontend で Request して、Response として返ってきたデータと UI を Web ブラウザに反映させるために必要な知識と技術を学びます
- その他、HTML、CSS、TypeScript、React の基礎的な学習と応用を学ぶことを目的とします

---

## Frontend のロードマップ

- Frontend 開発の初心者から上級者までが行う、学習の流れを示しています
- 開発する上で多種多様の技術が必要であることを示しています
- WF 研修では、そのなかでも主要な技術をピックアップして講義します。あくまでも全てを網羅することはできませんのでご承知おきください

![23c29676-42bd-4453-8223-8ec21c9d26ac](https://user-images.githubusercontent.com/70614554/235435431-cbfaedee-de53-489f-8938-54225f7d4df0.jpg)

---

## HTML と CSS

HTML は、Web ページを作成する上で最も基本的なもので、Web ページの基本構造を作成するためのマークアップ言語です。

HTML はタグと呼ばれる特殊な記号で要素を囲み、その要素の意味や構造を指定します。

- 文章の見出し `<h1>〜<h6>`
- 段落 `<p>`
- リンク `<a>`
- 画像 `<img>`
- リスト `<ul><li>、<ol><li>、<dl><dt><dd>`

などの HTML タグを適材適所で指定します。

※HTML とは、「HyperText Markup Language」の略です。

---

CSS とは、Web ページのデザインやスタイルを設定するための言語です。

HTML で構造が作られた Web ページに、CSS を適用することで、色やフォント、レイアウトなどの見た目を調整することができます。

通常 CSS は html ファイルとは別で管理する css ファイルを作成します。それによって各ページ共通のスタイルを適用することができます。さらにメンテナンスも容易となります。

また、デバイスごとの表示を最適化するためのレスポンシブデザインは CSS を用いて実現します。

- テキストの色を指定 color
- 背景色を指定 background-color
- テキストのフォントサイズを指定 font-size
- 要素の外側の余白を指定 margin
- 要素の内側の余白を指定 padding

※CSS とは、「Cascading Style Sheets」の略です。

### ポイント

WF 研修で扱う React はユーザインターフェース構築のための JavaScript ライブラリーで、UI(ユーザーインターフェース)の構築や管理を効率化します。

その UI の基本構成要素は HTML と CSS で表現されるので、HTML と CSS 研修で学習したことが、この後の React 研修、実習に繋がります。

---

## TypeScript

TypeScript は、JavaScript のスーパーセット（上位互換）言語で、静的型付け言語となります。さらに WebFrontend だけではなく、例えば AWS Lambda などの Backend 側の開発でも利用されます。

JavaScript のスーパーセット（上位互換）言語の TypeScript は

- 基本的な JavaScript 構文が使えます
- 動的型付け言語の JavaScript にはない機能として、コンパイル時に型チェックが行われる静的に型付けする言語です
- TypeScript を使うことで、JavaScript の柔軟性を維持しつつ、より堅牢で安全なコードを書くことができます

TypeScript 研修では、TypeScript と JavaScript 両方の学習を行います。

### ポイント

React は TypeScript(JavaScript)で構築されており、React アプリケーションの基本的な構造やロジックは TypeScript(JavaScript)を用いて記述されます。

さらに UI コンポーネントとして分割するファイルが.tsx となるので、TypeScript 研修で学習したことが、この後の React 研修、実習に繋がります。

---

## React

ユーザインターフェース構築のための JavaScript ライブラリーです。

ユーザインターフェース構築のための JavaScript ライブラリーとして React の他に、Angular、Vue.js、Svelte などが挙げられますが、React が世界的に最も人気なライブラリーで、当社でもほぼ全ての案件で利用してるので研修として扱っています。

React について

- 宣言的な View
- コンポーネントベース
- 一度学習すれば、どこでも使える

React 研修では、基礎的な知識や応用について座学と課題を通して学びます。

### ポイント

React で作成したコンポーネントファイルに、Server 研修で作成した WebAPI を Request して、Response として返ってきたデータを扱います。さらに HTML、CSS をベースとした UI も構築します。

その上で、Web ブラウザが読み取るためのコンパイルを行います。(コンパイルはビルドツールで自動的に行うので、特に開発作業はしません)

---

## 今回の研修に含まれてない内容

- React 以外のユーザインターフェース構築のための JavaScript ライブラリー
- Redux、Recoil を用いた状態管理ライブラリー
- ユニットテスト
- End-to-End テスト(cypress 等)
- Next.js

---

以上となります。

簡単ではありますが、WF 研修で学習する各研修の概要とポイントをまとめました。

これからの数日間、短い間ですが最後までどうぞ宜しくお願いします。
