# さらなる高みへ

## 目的

- 自習用に、先に盛り込めなかったが重要なトピックについて触れる
  - 自分にとって最良のトピックを思い、[自由に選択していけ](https://dic.nicovideo.jp/a/%E3%82%A8%E3%83%AB%E3%82%B7%E3%83%A3%E3%83%80%E3%82%A4%E6%A7%8B%E6%96%87%E3%81%AE%E4%B8%80%E8%A6%A7)。

## エディタのカスタマイズ

- Web Frontend の開発においては native アプリとは異なり、特定の決まった IDE が存在するわけではなく、各人好みのエディタを利用することが多い
- 従って、自身のエディタに適切な Plugin や Extension を導入したり、カスタマイズすることは開発効率を高める上で非常に重要
- ここまでの演習を通して、不便だと思った点や、欲しいと感じた機能があれば、自身のエディタをカスタマイズして解決ができないか調べてみる
  - 最近の傾向からは Web Frontend 界隈は Visual Studio Code が好まれていて Extension も充実しているので、他にこだわりがなければオススメです

## caniuse.com

- [caniuse.com](https://caniuse.com/)
  - とある JavaScript API, CSS プロパティ, HTML 要素が、各種ブラウザでサポートされている状況を確認ができる
  - Web Frontend 界隈では定期的に仕様がアップデートされる他に、ブラウザベンダーが先取りして実装をしたり、政治的な事情で制限をつけている機能があったりする
  - 対象ブラウザが当該機能をサポートしているか確認し、サポートしていない場合は何らかの手段を検討する必要がある

## 配列を操作する関数

- [Array.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Array.prototype.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [Array.prototype.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Array.prototype.flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [Array.prototype.flatMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

## Array.prototype.forEach とその他の配列操作関数との比較

- [JavaScript で forEach を使うのは最終手段](https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce)

## Promise を完全に理解する

- [JavaScript Promise の本](http://azu.github.io/promises-book/)

## TypeScript

- 公式サイトの [ドキュメント](https://www.typescriptlang.org/docs/home.html) を読む
- 公式の [REPL](https://www.typescriptlang.org/play/index.html) が便利。コンパイル後、どう変換されるか実験できる。
  - 下記の通り Options の各種チェックを有効化することで、より厳格な型チェックが行われるため、体験としては全て有効化しておくのがオススメ

![ts_options](./images/ts_options.png)

## Vue.js

- この先の実習では、Vue.js を利用して Stack Overflow Clone の Frontend を実装するため、その予習をする
- Vue.js の [Getting Started](https://jp.vuejs.org/v2/guide/index.html) を進める
- Vuex フレームワーク

## React.js

- React の [Getting Started](https://ja.reactjs.org/docs/getting-started.html)を読む
- Redux フレームワーク
- ACCESS で開発している商用 Web アプリケーションのソースコードを読んで見る

## 書籍

- [オススメ書籍](https://docs.google.com/spreadsheets/d/1YaeVLdSxLNiwTlOt1n69ieZeQ9I0eSWdS8MrCwLg5HU/edit#gid=0)
