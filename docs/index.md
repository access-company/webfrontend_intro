# フロントエンド新卒研修資料

## 座学

### 座学の目的

- フロントエンドエンジニアの役割を知る
- JavaScript プログラミングの基礎を知る
  - 記号で構成される構文は関数と違ってググりにくい
  - よく使われる構文の名前を知っておく(この座学で全てを理解できなくても OK)
- 非同期処理の基礎を知る
  - 概念を知らないと結構難しいので、演習問題ができなくても大丈夫
  - なぜ必要なのか、どのような解決方法があるのかを知っておく

### 今日話すこと・やってもらうこと

- フロントエンドのお話
  - フロントエンジニアとは？
  - ACCESS 製 Web アプリの紹介
  - HTML、CSS、JavaScript、DOM の簡単な説明
  - フロントエンドの今までの流れ
  - メジャーな周辺ツールの紹介
- JavaScript の演習
  - 基礎文法
  - ECMAScript 6(ES2015)演習
  - 非同期処理について

### 演習の準備

```sh
$ git clone git@github.com:access-company/webfrontend_intro.git
$ cd webfrontend_intro
$ git checkout -b ${自分の名前}
$ asdf install # 時間かかるかも
$ npm install
```

- 各演習ごとに完成したら commit して push !!

### フロントエンドエンジニアとは？

- ざっくりいうと、、
  - Web アプリケーションのフロントエンドを開発するエンジニアのこと
  - HTML, JavaScript, CSS を組み合わせて、UI を作成する
- 特徴
  - 技術の流行り廃りが激しい
  - 周辺ツールが豊富で、便利な分覚えることも多い
  - JavaScript の言語仕様である ECMAScript は年ごとにアップデートされる
  - 非同期処理をうまく扱えるかが１つのポイント

### ACCESS 製 Web アプリの紹介

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

### HTML

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

### CSS

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

### JavaScript

```js
function sum(a, b) {
  return a + b;
}
sum(1, 2)   // == 3
sum(1, ‘2’) // == ‘12’
```

- ブラウザで動作する動的型付け言語
  - 暗黙的な型変換が行われる
  - とにかく罠が多い
- シングルスレッドで動作する
- 標準仕様は、ECMAScript という名前で、ES とよく省略される
- ES5, ES6 とかでバージョンを指定することがよくあるが、JavaScript5 とは言わない

### DOM(Document Object Model)

```js
// divをbodyに追加する例
const divElm = document.createElement(‘div’);
document.body.appendChild(divElm);
```

- HTML ドキュメントを動的に操作するためのインターフェース
- 基本的には、JavaScript で操作する

### フロントエンドの流れ

- CGI
  - サーバーで HTML を生成して、フロントエンドは静的なページを表示していた
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

### メジャーな周辺ツール

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

### Chrome Developer Tools 体験

- Chrome で開いて、操作してみてください！

[画像]

- 上記は弊社サイトで開いた例
- 詳細は、[公式サイト](https://developers.google.com/web/tools/chrome-devtools/)で確認してみてください
- console で JavaScript を実行してみる

## JavaScript 基礎

- console.log
- コメントアウト
- 配列
- オブジェクト
- 無名関数

### console.log

```js
const hello = ‘hello world’;
console.log(hello); // ➔ ‘hello world’
```

- 高機能なコンソール出力
  - オブジェクトを渡すと、プロパティも展開してくれる
  - 最新だと、console.table なるものもある
- デバッグでよく使う
  - いわゆる printf デバッグ

### コメントアウト

```js
console.log('comment out'); // 行末までコメントアウト
// console.log('comment out')

/*
  囲まれているところがコメントアウト
  console.log('comment out')
  console.log('comment out')
*/
```

### 配列

```js
const array = [1, 1, 2, 3, 5];
console.log(array[0], array[4]); // ➔ 1 5

array[5] = 8;
console.log(array); // ➔ [1, 1, 2, 3, 5, 8];
```

### オブジェクト

```js
const obj = {
  a: ‘hello’,
  b: 1024,
  c: { // オブジェクトを入れ子にすることもできる
    d: [1, 2],
  },
};

console.log(obj.a);   // ➔ ‘hello’
obj.a = ‘hello world!’;

console.log(obj.a);   // ➔ ‘hello world’
console.log(obj.c.d); // ➔ [1, 2]
```

### 無名関数

```js
const sum = function(a, b) {
  return a + b;
};

sum(2, 5); // ➔ 7
```

- JavaScript では、関数を変数に代入することができる
- この例の場合、代入されている（赤い）関数を無名関数という

## ECMAScript6(ES2015)演習

- [ES2015 仕様](https://github.com/lukehoban/es6features)

- const, let
- enhanced object literal
- destructuring
- arrow function
- template strings
- rest parameters
- spread 構文
- export, import
- class 構文

### const, let

```js
const a = 0;

let b = ‘hoge’;
b = ‘piyo’;

// a = 1;           これはエラーになる
// let b = ‘fuga’;  これもエラー
```

- 変数を宣言する
- const は再代入不可、let は代入可
- ECMAScript5 では、変数宣言に var を使用していた
  - var とはスコープも異なるが、今は気にしないでも大丈夫
  - 気になる人は、関数スコープ、ブロックスコープで調べると良い

#### Ex1. const, let 演習

- 演習問題
  - ECMAScript5 で書かれているコードの var を const と let で書き直してください
    - 対象コードは、NFA で実際に使用されています。
  - const が使用できる箇所は、必ず const を使用してください。
  - const, let 以外にも修正すべき箇所があります。
- 実行方法
  ```sh
    $ node exercise1.js
    # 2
  ```

```js
var filter = function(items, iteratee, context) {
  var thisArg = context ? context : this;
  var values = [];
  var i, l;
  for (i = 0, l = items.length; i < l; i++) {
    if (iteratee.call(thisArg, items[i], i, items)) {
      values.push(items[i]);
    }
  }
  return values;
};
var a = [1, 2, 3];
var filtered = filter(a, function(v) {
  return v === 2;
});
var a = filtered[0];
console.log(a);
```

### enhanced object literal

```js
const name = ‘taro’;

const person = { name, age: 25 }; // ➔ { name: name, age: 25 }
person.name;                      // ➔ ‘taro’
person.age;                       // ➔ 25
```

- オブジェクトのプロパティ名と変数名が一致していた場合に使用できる省略記法

#### Ex2. enhanced object literal 演習

- 演習問題
  - ECMAScript5 で書かれているコードを enhanced object literal で書き直してください
- 実行方法
  ```sh
  $ node exercise2.js
  # { id: '51ff0475d615329700235136', name: 'Taro Yamada', age: 14 }
  ```

```js
const newUser = function(id, firstName, lastName, age) {
  const fullName = firstName + ‘ ‘ + lastName;
  return {
    id:   id,
    name: fullName,
    age:  age,
  };
};
const taro = newUser(‘51ff0475d615329700235136’, ‘Taro’, ‘Yamada’, 14);
console.log(taro);
```

### destructuring

#### 配列

```js
const [a, b, c] = [1, 2];

console.log(a); // ➔ 1
console.log(b); // ➔ 2
console.log(c); // ➔ undefined
```

- 配列やオブジェクトを展開して、値を変数に束縛する
- 関数の引数にも使える
- 左辺と右辺のサイズが異なった場合、elixir のパターンマッチと違いエラーにならないので注意

#### オブジェクト

```js
const {
  a,
  b,
  c: { d }
} = { a: 1, b: 2, c: { d: 3 } };

console.log(a); // ➔ 1
console.log(b); // ➔ 2
console.log(d); // ➔ 3
console.log(c); // ➔ ”ReferenceError: c is not defined”
```

- enhanced object literal のように、プロパティ名と変数名をそのまま対応可能
- ネストしているオブジェクトにも使用できる

#### Ex3-1. destructuring 演習

- 演習問題
  - 次のコードを destructuring で書き直してください
- 実行方法
  ```sh
  $ node exercise3.js
  # id = 51ff0475d615329700235136
  # key = NoBtELh82txWnMb5kEQJ
  # expiresAt = 2013-10-22T10:04:20+00:00
  ```

```js
const inspectUser = function(user) {
  const data    = user.data;
  const session = data.session;
  console.log("id = " + data.id);
  console.log("key = " + session.key);
  console.log("expiresAt = " + session.expiresAt);
};
inspectUser({
  email: ‘my@email.addr’,
  name: ‘Taro Access’,
  data: {
    id: ‘51ff0475d615329700235136’,
    session: {
      key: ‘NoBtELh82txWnMb5kEQJ’,
      expiresAt: ‘2013-10-22T10:04:20+00:00’,
    },
  },
});
```

### arrow function

```js
const sum = (x, y) => {
  return x + y;
};
sum(1, 2); // ➔ 3

const sum2 = (x, y) => x + y;
sum2(1, 2); // ➔ 3
```

- 無名関数の宣言方法の一つ
  - 通常は、`const sum = function(x, y) { return x + y; };`
  - 式が一つであれば、return は省略できる。省略しない場合
    - `const sum = (x, y) => { return x + y; };`
  - 引数が一つの場合は、括弧を省略できる
    - `const succ = x => x + 1;`
- this の扱いが通常の無名関数とは異なる
  - 今は気にしなくても大丈夫
  - JavaScript の this は闇が深い。。

#### Ex3-2. arrow function 演習

- 演習問題
  - Ex3-1 の inspectUser を arrow function で書き直してください
- 実行方法
  ```sh
  $ node exercise3.js
  # id = 51ff0475d615329700235136
  # key = NoBtELh82txWnMb5kEQJ
  # expiresAt = 2013-10-22T10:04:20+00:00
  ```

### template strings

```js
const name = ‘taro’;
console.log(`My name is ${name}`); // ➔ ‘My name is taro’
```

- バッククォートで文字列を生成すると、文字列内に`${}`で変数を挿入できる

#### Ex3-3. template strings 演習

- 演習問題
  - Ex3-2 のコードを template strings で書き直してください
- 実行方法
  ```sh
  $ node exercise3.js
  # id = 51ff0475d615329700235136
  # key = NoBtELh82txWnMb5kEQJ
  # expiresAt = 2013-10-22T10:04:20+00:00
  ```

### rest parameters

```js
const f = (x, ...y) => y;
f(1, 2, 3); // == [2, 3]
```

- 引数を...をつけて宣言すると、可変長引数として配列が受け取れる
- あまり使用頻度は高くないので、演習は割愛

### spread 構文

```js
const a = { x: 1, y: 2 };
const b = { ...a, x: 3 }; // ➔ { x: a.x, y: a.y, x: 3 }
console.log(a); // ➔ { x: 1, y: 2 }
console.log(b); // ➔ { x: 3, y: 2 }
```

- オブジェクトを展開する構文
- 元のオブジェクトをコピーしたいときによく利用する
- Deep Copy ではなく、Shallow Copy であることに注意
  - 今は気にしなくても大丈夫

#### Ex4. spread 構文演習

- 演習問題
  - 次のバグっているコードを spread 構文で修正してください
  - このバグは「破壊的代入」「参照透過性」あたりに関連するものです
- 実行方法
  ```sh
  $ node exercise4.js
  ```

```js
const printUserInUpperCase = user => {
  user.name = user.name.toUpperCase();
  console.log(user);
};
const userList = [];
const user = {
  id: '51ff0475d615329700235136',
  name: 'taro yamada',
  age: 14
};

userList.push(user);
printUserInUpperCase(user);

console.log(userList[0]); // name は 'taro yamada' と表示されることを期待
```

##### 現在の値

```js
{ id: '51ff0475d615329700235136', name: 'TARO YAMADA', age: 14 }
{ id: '51ff0475d615329700235136', name: 'TARO YAMADA', age: 14 }
```

##### 期待値

```js
{ id: '51ff0475d615329700235136', name: 'TARO YAMADA', age: 14 }
{ id: '51ff0475d615329700235136', name: 'taro yamada', age: 14 }
```

### class 構文

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
var d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
```

- クラスベースのオブジェクト指向(Java とか）のような書き方ができる構文
- メソッド名の前に static をつけると static メソッド（クラスメソッド）になる
- つけない場合は、prototype メソッド（インスタンスメソッド）になる
  - 注：JavaScript はプロトタイプベース

#### Ex5. class 構文演習

- 演習問題
  - 次のクラスをコメントを元に完成させてください
    - 現段階では、メソッドがないため実行するとエラーになります。
    - 次の演習のために、拡張子を mjs にしています。（詳細は後ほど）
- 実行方法
  ```sh
  $ node exercise5.mjs
  ```

```js
class User {
  constructor(id, name, age) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
  // prototypeメソッド getName()を実装する
  // prototypeメソッド getAge()を実装する
  // staticメソッド equal(user1, user2)を実装する
}
const user1 = new User('51ff0475d615329700235136', 'Taro', 14);
console.log(user1.getName());
console.log(user1.getAge());

const user2 = new User('74ff0520d615329720235156', 'Hanako', 14);
console.log(`${user1.name} is ${user2.name}: ${User.equal(user1, user2)}`);
```

### export, import

#### default export, named import

```js
/* util.js */
const sum = (x, y) => x + y;
export default sum;
```

```js
/* index.js */
import sum from './util';
sum(1, 2); // ➔ 3
```

- 関数、変数を export する
- それを別のファイルから import して再利用できる

#### named export, named import

```js
/* util.js */
const sum = (x, y) => x + y;
export sum;
```

```js
/* index.js */
import { sum } from './util';
sum(1, 2); // ➔ 3
```

- 関数、変数を名前付きで export する

#### Ex6. export, import 演習

- 演習問題
  - Ex5 の User クラスを export して別のファイル(exercise6.mjs)から利用してみてください
  - Nodejs では、named export/import が使用できないので、今回の演習では _default export/import を使用してください_
- 実行方法
  - `$ node --experimental-modules exercise6.mjs`
  - exercise6.mjs は空のファイルなので、何も表示されません
  - Nodejs で、export/import を利用するためには、下記のオプションと mjs 拡張子である必要があります。
    - webpack を使用する場合は、js 拡張子を使用します

## JavaScript の非同期処理

- 非同期処理はなぜ必要か？
- 非同期処理の実装例
- コールバック
- Promise
- async await

### 非同期処理はなぜ必要か？

- 何かがクリックされた時に、時間のかかる処理をさせると...
  - ユーザーはクリックしたのに、何も反応がなくイラつく
  - 反応がないどころか、10 秒固まってしまい、壊れたと思う
  - サービスを使わなくなる
- C や Java ならマルチスレッドで回避できるが、JavaScript はシングルスレッド。どうするか？

#### 同期処理

```js
const onClick = () => {
  const result = execVerySlowProcess(); // ここで処理をブロック
  console.log('sync'); // クリック後、しばらくしてから 'sync' が表示される
};
```

#### 非同期処理

```js
const onClick = () => {
  execSlowProcessAsync(); // ここでブロックしない
  console.log('async'); // クリック後、即座に 'async' が表示される
};
```

- ブロックすることが問題なら、ブロックさせなければいい
- 実際の処理は、バックグラウンドで行う
- ただし、戻り値で処理の結果を受け取ることができない
  - 先の例では、関数の戻り値で結果を受け取っていた
- どのように結果を受け取れば良いか？

### コールバック

```js
setTimeout(() => {
  console.log(‘Hello world!!’); // 1000[ms] 後に 'Hello world!!' が表示される
}, 1000);
```

- 非同期に処理される関数にコールバック関数を渡すパターン
- 結果は、コールバック関数の引数で受け取る
  - 例は、タイマーなので結果がない、そのため引数も空
- 例：タイマー、HTTP リクエスト、ファイルアクセスなど
- 非同期処理が連鎖しなければ、シンプルで良い
- _連鎖する場合、困ったことが起こる_

#### Ex7. コールバック演習

- 演習問題
  - 次のコードを拡張し、以下の要件を満たすように実装してください。
    - 1 秒後に 'Hello' を出力
    - さらに 3 秒後に 'World' を出力
    - さらに 2 秒後に '!' を出力
    - さらに 1 秒後に '!' を出力
  - 出力先は、標準出力を利用してください。
  - インデントは、適切に使用してください。
- 実行方法
  ```sh
  $ node exercise7.js
  # Hello  (1秒後)
  ```

```js
setTimeout(() => {
  console.log('Hello');
}, 1000);
```

#### コールバック演習まとめ

- インデントがどんどん深く。。
  - 通称：コールバック地獄
  - ググるといっぱい情報が出てくる
- 地獄になるケースは、そんなにあるのか？
  - ある
  - 先の例は、簡単のために用意したもの。HTTP リクエストを組み合わせると、頻出度は高い。
    - ある URL から情報を取得して、その情報を元にさらにリクエストを投げるなど

### Promise

```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(myJson => console.log(myJson));
```

- コールバック地獄を解決する一つの手段
- .then を使って連鎖を表現する
  - then に渡すコールバック関数が Promise を返すと、非同期処理を連鎖できる
  - `response.json()`も Promise を返す関数
- Promise は型なので、Promise を返すような関数を新たに作る必要がある。
  - 最近作られた非同期系の API は、Promise を返すようになっているものが多い
  - 例：[fetch 関数](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)

#### Ex8. Promise 演習

- 演習問題
  - fetch で以下 URL から JSON を取得し、さらにその中に含まれる followers_url から JSON を取得してください。
    - http://tama.tok.access-company.com/user/soichiro.isobe/training/fetch/users/github.json
  - コールバック地獄になっている場合は、Promise を正しく利用できていない可能性があります
- 実行方法
  ```sh
  $ node --experimental-modules exercise8.mjs
  # { login: 'github',  id: 9919, avatar_url: 'https://avatars1.githubusercontent.com/u/9919?v=4', gravatar_id: '', …}
  ```

```js
import fetch from 'node-fetch';

fetch('https://api.github.com/users/github')
  .then(response => response.json())
  .then(myJson => console.log(myJson));
```

#### Promise 演習まとめ

- Promise を正しく使用するのは、意外と難しい
  - 今回紹介していないが、エラーハンドリングも絡むとさらに複雑になる
- 一歩間違えると、コールバック地獄と同じようなコードになる
- 複数の非同期処理を並列処理するなどの応用もある
  - Promise.all
  - Promise.race
- Promise を返さない関数も Promise 化することができる
  - 余裕のある人は、setTimeout を Promise 化して、コールバック演習の課題を Promise で解決してみてください

### async await

```js
async function fetchMovieJson() {
  const res = await fetch('http://example.com/movies.json');
  const myJson = await res.json();
  console.log(myJson);
}

fetchMovieJson();
```

- 手続き的に非同期処理をかける構文
- await で呼び出す関数は、Promise を返す必要がある
- await を使用する関数は、async をつける必要がある

#### Ex9. async await 演習

- 演習問題
  - Promise 演習で作成したコードを async await で書き直してください。
- 実行方法
  ```sh
  $ node --experimental-modules exercise9.mjs
  # { login: 'github',  id: 9919, avatar_url: 'https://avatars1.githubusercontent.com/u/9919?v=4', gravatar_id: '', …}
  ```

```js
import fetch from 'node-fetch';

async function fetchFollowers() {
  const url = 'https://api.github.com/users/github';
  const usersResponse = await fetch(url);
  const users = await usersResponse.json();
  console.log(users);
}

fetchFollowers();
```

#### async await 演習まとめ

- async await は非常に便利
- async await は最新の仕様であるため、使用できない場合も多いので注意

## その先へ

- Vue.js の [Getting Started](https://jp.vuejs.org/v2/guide/index.html) を進める
- Vuex/Redux について調べてみる
- FlowType/TypeScript について調べてみる

## Appendix

- [オススメ書籍](https://docs.google.com/spreadsheets/d/1YaeVLdSxLNiwTlOt1n69ieZeQ9I0eSWdS8MrCwLg5HU/edit#gid=0)
