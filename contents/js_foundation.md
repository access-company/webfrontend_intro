# JavaScript 基礎

## 目的

- JavaScript プログラミングの基礎を知る
  - 記号で構成される構文は関数と違ってググりにくいため、構文の名前を知っておくと捗る
  - 知識が 0 ➔ 0.1 でもあれば、行動に移すための心理障壁を超えやすくなる

### REPL (Read-Eval-Print-Loop) の紹介

- JavaScript は性質上、ブラウザで動作する REPL が多いので、ちょっとした動作検証に便利
  - 一例として [jsin](https://jsbin.com/dogatemogo/edit?js,console)

## console.log

```js
const hello = 'こんにちは、世界';
console.log(hello); // ➔ 'こんにちは、世界'

const warning = 'どこか調子悪いみたい';
console.warn(warning); // ➔ 'どこか調子悪いみたい' (黄色で表示される)

const error = '何かしらの深刻な問題が起きたよ';
console.error(error); // ➔ '何かしらの深刻な問題が起きたよ' (赤色で表示される)
```

- 高機能なコンソール出力
  - オブジェクトを渡すと、プロパティも展開してくれる
  - 最新だと、console.table, trace などあり[多機能](https://qiita.com/koinori/items/83f119cb2d82c0ca2c1e)
- デバッグでよく使う
  - いわゆる printf デバッグ
- 例外発生時など、エラー出力は `console.error` を使った方が良い

## コメントアウト

```js
console.log('comment out'); // 行末までコメントアウト
// console.log('comment out')

/*
  囲まれているところがコメントアウト
  console.log('comment out')
  console.log('comment out')
*/
```

- よくある仕様
- JSON ではコメントアウトのシンタックスはサポートされていないので注意が必要
  - [Can comments be used in JSON ?](https://stackoverflow.com/questions/244777/can-comments-be-used-in-json)

## 配列(Array)

```js
const array = [1, 1, 2, 3, 5];
console.log(array[0], array[4]); // ➔ 1 5

array[5] = 8;
console.log(array); // ➔ [1, 1, 2, 3, 5, 8];
```

## オブジェクト(Object)

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

const key = 'b';
console.log(obj[key]); // ➔ 1024
console.log(obj['b']); // ➔ 1024
console.log(obj.key); // ➔ undefined
```

- 他言語では連想配列や、dictionary という呼び方をすることがあるが、JavaScript では用途が同様でもオブジェクトと呼ぶのが一般的

## 無名関数

```js
const sum = function(a, b) {
  return a + b;
};

sum(2, 5); // ➔ 7

(function() {
  console.log('無名関数を即時実行するぞ'); // ➔ 無名関数を即時実行するぞ
})();
```

- JavaScript では、関数を変数に代入することができる
- この例の場合、代入されている関数を無名関数という
- ES2015 以前は、`var` のスコープの問題で、無名関数を即時実行することで、スコープを生成する方法はよく使われていた
