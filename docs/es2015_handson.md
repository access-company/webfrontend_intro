## JavaScript 基礎

- console.log
- コメントアウト
- 配列
- オブジェクト
- 無名関数

### console.log

```js
const hello = 'hello world';
console.log(hello); // ➔ 'hello world'
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
  a: 'hello',
  b: 1024,
  c: {
    // オブジェクトを入れ子にすることもできる
    d: [1, 2]
  }
};

console.log(obj.a); // ➔ 'hello'
obj.a = 'hello world!';

console.log(obj.a); // ➔ 'hello world'
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

## [ECMAScript6(ES2015)](https://github.com/lukehoban/es6features) 演習

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
a = 1; // エラー

let b = 'hoge';
b = 'piyo';
let b = 'fuga'; // エラー
```

- 変数を宣言する
- const は再代入不可、let は再代入可
- ES5 では、変数宣言に var を使用していた
  - var とはスコープも異なるが、今は気にしないでも大丈夫
  - 気になる人は、関数スコープ、ブロックスコープで調べると良い

#### Ex1. const, let 演習

- 演習問題
  - ES5 で書かれているコードの var を const と let で書き直してください
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
const name = 'taro';

const person = { name, age: 25 }; // ➔ { name: name, age: 25 }
person.name; // ➔ 'taro'
person.age; // ➔ 25
```

- オブジェクトのプロパティ名と変数名が一致していた場合に使用できる省略記法

#### Ex2. enhanced object literal 演習

- 演習問題
  - ES5 で書かれているコードを enhanced object literal で書き直してください
- 実行方法
  ```sh
  $ node exercise2.js
  # { id: '51ff0475d615329700235136', name: 'Taro Yamada', age: 14 }
  ```

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
const name = 'taro';
console.log(`My name is ${name}`); // ➔ 'My name is taro'
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
f(1, 2, 3); // ➔ [2, 3]
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
var d = new Dog('ポメラニアス');
d.speak(); // 'ポメラニアス barks.'
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
