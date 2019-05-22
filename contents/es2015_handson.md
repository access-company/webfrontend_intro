# [ECMAScript6(ES2015)](https://github.com/lukehoban/es6features) 演習

## 演習の準備

```sh
# 本リポジトリをクローン
$ git clone git@github.com:access-company/webfrontend_intro.git
$ cd webfrontend_intro

# 作業ブランチを作成
$ git checkout -b ${自分の名前}

# nodejs のインストール
$ asdf install

# 依存ライブラリの local install
$ npm install
```

各演習ごとに実装を終えたら commit して push !!

```sh
$ git add -u ${変更したファイル名}
$ git commit -v ${comment}
$ git push origin head
```

## const, let

```js
const a = 0;
a = 1; // エラー

let b = 'hoge';
b = 'piyo';
let b = 'fuga'; // エラー
```

- 変数を宣言する
- const は再代入不可、let は再代入可
  - const でもアドレスの変更を制限するだけで、参照先の値は変更が可能な点に注意
  - 実際にプログラムを書く際はほぼ const のみで実現が可能
  - let を記述する必要がある場合、良くないコードの可能性が高い
- ES5 では、変数宣言に var を使用していた
  - var とはスコープも異なるが、今は気にしないでも OK。
  - **var は既にプログラマが直越記述する機会はなく、利用してはいけないことだけは抑えておく**
  - 気になる人は、関数スコープ、ブロックスコープで調べると良い

### 演習問題 (Ex.1)

- ES5 で書かれているコードの var を const と let で書き直してください
  - 下記は、実際に使用されているソースコードです
- const が使用できる箇所は、必ず const を使用してください
- const, let 以外にも修正すべき箇所があります

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

#### 実行方法

```sh
$ node exercise1.js
# 2
```

## enhanced object literal

```js
const name = 'taro';

const person1 = { name: name, age: 25 };
person1.name; // ➔ 'taro'
person1.age; // ➔ 25

const person2 = { name, age: 25 }; // name はプロパティ名と変数名が同一のため略記が可能
person2.name; // ➔ 'taro'
person2.age; // ➔ 25
```

- オブジェクトのプロパティ名と変数名が一致していた場合に使用できる省略記法

### 演習問題 (Ex.2)

- ES5 で書かれているコードを enhanced object literal で書き直してください

```js
const newUser = function(id, firstName, lastName, age) {
  const fullName = firstName + ' ' + lastName;
  return {
    id: id,
    name: fullName,
    age: age
  };
};

const taro = newUser('51ff0475d615329700235136', 'Taro', 'Yamada', 14);
console.log(taro);
```

#### 実行方法

```sh
$ node exercise2.js
# { id: '51ff0475d615329700235136', name: 'Taro Yamada', age: 14 }
```

## destructuring

### 配列

```js
const [a, b, c] = [1, 2];

console.log(a); // ➔ 1
console.log(b); // ➔ 2
console.log(c); // ➔ undefined

function createArray() {
  return [3, 4];
}

const [d, e] = createArray();
console.log(d); // ➔ 3
console.log(e); // ➔ 4
```

- 配列やオブジェクトを展開して、値を変数に束縛する
- 関数の引数にも使える
- 左辺と右辺のサイズが異なった場合、elixir のパターンマッチと違いエラーにならないので注意

### オブジェクト

```c
const { a, b, c: { d } } = { a: 1, b: 2, c: { d: 3 } };

console.log(a); // ➔ 1
console.log(b); // ➔ 2
console.log(d); // ➔ 3
console.log(c); // ➔ ”ReferenceError: c is not defined”
```

- enhanced object literal のように、プロパティ名と変数名をそのまま対応可能
- ネストしているオブジェクトにも使用できる

### 演習問題 (Ex.3-1)

- 次のコードを destructuring で書き直してください

```js
const inspectUser = function(user) {
  const data = user.data;
  const session = data.session;

  console.log('id = ' + data.id);
  console.log('key = ' + session.key);
  console.log('expiresAt = ' + session.expiresAt);
};

inspectUser({
  email: 'my@email.addr',
  name: 'Taro Access',
  data: {
    id: '51ff0475d615329700235136',
    session: {
      key: 'NoBtELh82txWnMb5kEQJ',
      expiresAt: '2013-10-22T10:04:20+00:00'
    }
  }
});
```

#### 実行方法

```sh
$ node exercise3.js
# id = 51ff0475d615329700235136
# key = NoBtELh82txWnMb5kEQJ
# expiresAt = 2013-10-22T10:04:20+00:00
```

## arrow function

```js
// 従来の無名関数
const sum1 = function(x, y) {
  return x + y;
};
sum1(1, 2); // ➔ 3

// arrow function
const sum2 = (x, y) => {
  return x + y;
};
sum2(1, 2); // ➔ 3

// arrow function の return 省略記法
const sum3 = (x, y) => x + y;
sum3(1, 2); // ➔ 3
```

- 無名関数の宣言方法の一つ
  - 上記の sum1, sum2, sum3 は **ほぼ** 同様に振る舞う
  - 式が 1 つであれば、return は省略できる (sum3)
  - 引数が 1 つの場合は、括弧を省略できる
    - `const num = x => x + 1;`
- this の扱いが通常の無名関数とは異なる (レキシカルスコープ、ダイナミックスコープ)
  - 今は気にしなくても大丈夫
  - JavaScript の this は闇が深い。。

### 演習問題 (Ex.3-2)

- Ex3-1 の `inspectUser` を arrow function で書き直してください

#### 実行方法

```sh
$ node exercise3.js
# id = 51ff0475d615329700235136
# key = NoBtELh82txWnMb5kEQJ
# expiresAt = 2013-10-22T10:04:20+00:00
```

## template strings

```js
const name = 'taro';
console.log('My name is' + name); // ➔ 'My name is taro'
console.log(`My name is ${name}`); // ➔ 'My name is taro'

console.log(`
* template strings は
  * 改行しても
  * \n として評価してくれるよ
`);
```

- バッククォートで文字列を生成すると、文字列内に`${}`で変数を挿入できる
- バッククォート内では改行も可能
  - インデントを合わせるとスペースとして挿入されてしまうのは注意

### 演習問題 (Ex.3-3)

- Ex3-2 のコードを template strings で書き直してください

#### 実行方法

```sh
$ node exercise3.js
# id = 51ff0475d615329700235136
# key = NoBtELh82txWnMb5kEQJ
# expiresAt = 2013-10-22T10:04:20+00:00
```

## rest parameters

```js
const f = (x, ...y) => y;
f(1, 2, 3); // ➔ [2, 3]
```

- 仮引数に `...` をつけて宣言すると、可変長引数として配列が受け取れる
- あまり使用頻度は高くないので、演習は割愛(´ᴖωᴖ ｀)

## spread 構文

```js
const a = { x: 1, y: 2 };

// 以下例では、property "x" が重複しているが、
// 後勝ちでパラメータとしては 3 になる点がポイント
const b1 = { x: a.x, y: a.y, x: 3 };
const b2 = { ...a, x: 3 }; // ➔ { x: a.x, y: a.y, x: 3 }

console.log(a); // ➔ { x: 1, y: 2 }
console.log(b1); // ➔ { x: 3, y: 2 }
console.log(b2); // ➔ { x: 3, y: 2 }
```

- オブジェクトを展開する構文
- 元のオブジェクトをコピーしたいときに、非常によく利用する
- Deep Copy ではなく、Shallow Copy であることに注意
  - 今は気にしなくても大丈夫

### 演習問題 (Ex.4)

- 次のバグっているコードを spread 構文で修正してください
- このバグは「破壊的代入」「参照透過性」に関連するものです

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

#### 実行方法

```sh
$ node exercise4.js
```

##### 問題の実行結果

```js
{ id: '51ff0475d615329700235136', name: 'TARO YAMADA', age: 14 }
{ id: '51ff0475d615329700235136', name: 'TARO YAMADA', age: 14 }
```

##### 期待する実行結果

```js
{ id: '51ff0475d615329700235136', name: 'TARO YAMADA', age: 14 }
{ id: '51ff0475d615329700235136', name: 'taro yamada', age: 14 }
```

## class 構文

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

const d = new Dog('ポメラニアス');
d.speak(); // 'ポメラニアス barks.'
```

- クラスベースのオブジェクト指向(Java とか）のような書き方ができる構文
  - `class`, `constructor`, `extends`
  - JavaScript はプロトタイプベースのオブジェクト指向言語
- メソッド名の前に static をつけると static メソッド（クラスメソッド）になる
- つけない場合は、prototype メソッド（インスタンスメソッド）になる

### 演習問題 (Ex.5)

- 次のクラスをコメントを元に完成させてください
  - 現段階では、メソッドがないため実行するとエラーになります
  - 次の演習のために、拡張子を mjs にしています。（詳細は後ほど）

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

#### 実行方法

```sh
$ node exercise5.mjs
```

## export, import (ESModule)

### default export, named import

```js
/* util.js */
const sum = (x, y) => x + y;
export default sum;
```

```js
/* index.js */
import utilSum from './util'; // import するパラメータの明示は不要、自由に名前をつけられる
utilSum(1, 2); // ➔ 3
```

- 関数、変数を export し、別のファイルから import して再利用できる
- default で export できるのは 1 つのパラメータのみ

### named export, named import

```js
/* util.js */
const sum = (x, y) => x + y;
export sum;

const sub = (x, y) => x - y;
export sub;
```

```js
/* index.js */
import { sum, sub } from './util'; // import するパラメータを明示する必要がある
sum(1, 2); // ➔ 3
sub(1, 2); // ➔ -1
```

- 関数、変数を名前付きで export する
- 複数パラメータの export が可能

### 演習問題 (Ex.6)

- Ex5 の User クラスを export して別のファイル(exercise6.mjs)から利用してみてください
- Nodejs では、named export/import が使用できないので、今回の演習では _default export/import を使用してください_

#### 実行方法

- `$ node --experimental-modules exercise6.mjs`
- exercise6.mjs は空のファイルなので、何も表示されません
- Nodejs で、export/import を利用するためには、上記の `--experimental-modules` のオプションを指定し、  
  さらに、拡張子が `mjs` である必要があります
  - CLI で動作する Node.js を利用しているための制限で、通常の Web アプリ開発では、js 拡張子で問題ありません。
