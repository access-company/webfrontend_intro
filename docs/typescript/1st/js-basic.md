# JavaScript(TypeScript) 基礎

## 目次

- [基本的な型](#基本的な型)
  - [データ型](#データ型)
  - [リテラル](#リテラル)
- [変数宣言](#変数宣言)
  - [const](#const)
  - [let](#let)
  - [var](#var)
- [関数](#関数)
  - [アロー関数](<#Arrow-function(ES2015)>)
- [演算子](#演算子)
  - [基本的な二項演算子](#基本的な二項演算子)
  - [比較演算子](#比較演算子)
- [暗黙的な型変換](#暗黙的な型変換)
- [条件分岐](#条件分岐)
  - [if 文](#if文)
  - [switch 文](#switch文)
- [ループ](#ループ)
- [非同期処理](#非同期処理)

## 基本的な型

### データ型

JavaScript にはデータ型が存在します。  
データ型を大きく分けると以下の 2 つあります。  
※ TypeScript は静的型付けなので変数の型も存在します

- プリミティブ型
  - 真偽値（Boolean）: true または false のデータ型
  - 数値（Number）: 42 や 3.14159 などの数値のデータ型
  - 巨大な整数（BigInt）: ES2020 から追加された 9007199254740992n などの任意精度の整数のデータ型
  - 文字列（String）: "JavaScript" などの文字列のデータ型
  - undefined: 値が未定義であることを意味するデータ型
  - null: 値が存在しないことを意味するデータ型
  - シンボル（Symbol）: ES2015 から追加された一意で不変な値のデータ型
- オブジェクト(複合型)
  - プリミティブ型以外のデータ
  - オブジェクト、配列、関数、正規表現、Date など

TypeScript では以下に置き換えて型定義を行います。

- string: 文字列
  ```ts
  const name: string = "taro";
  ```
- number: 全ての Numeric の値
  ```ts
  const num: number = 6;
  ```
- boolean: 真偽値
  ```ts
  const isValid: boolean = false;
  ```
- undefined: undefined
  ```ts
  const undefinedValue: undefined = undefined;
  ```
- null: null
  ```ts
  const nullValue: null = null;
  ```

<details><summary>Advanced</summary>

- any  
  `any` 型はそれ以降の型チェックはスルーされる  
  `any` を使うと JavaScript で書くのと変わらないため、極力使わない

  ```ts
  let obj: any = { x: 0 };

  obj.foo();
  obj();
  obj.bar = 100;
  obj = "hello";
  const n: number = obj;
  ```

- array  
  `[1, 2, 3]` のような配列の型を定義するには、`number[]` と出来ます。  
  この構文は、どのタイプでも機能します（文字列の配列は `string[]` など）
  ```ts
  const numList: number[] = [1, 2, 3];
  ```
- tuple  
  複数の要素を管理するデータ型
  ```ts
  const foo: [string, number] = ["foo", 1];
  ```
- void  
  関数が何も値を返さない時にセットされる型
  ```ts
  function func(value: string): void {
    console.log(value);
  }
  ```
- enum  
  列挙型
  ```ts
  enum Gender {
    Male = "male",
    Female = "female",
  }
  const gender: Gender = Gender.Male;
  ```
- string literal  
  文字列リテラルの型

  ```ts
  const name1: "taro" = "taro";
  const name2: "taro" = "jiro"; // コンパイルエラー Initializer type "jiro" is not assignable to variable type "taro"
  ```

  - widening literal と NonWidening literal

    - widening literal の場合、 literal type の値を別の変数に代入した場合に普通の型推論の型となってしまう

    ```ts
    const widening = "taro"; // widening: 'taro'
    const obj1 = {
      widening, // obj1.widening: string
    };

    obj1.widening = "jiro"; // !?

    const nonWidening = "hoge" as const; // nonWidening: 'hoge'
    const obj2 = {
      nonWidening, // obj2.nonWidening: 'hoge'
    };

    obj2.nonWidening = "fuga"; // コンパイルエラー Assigned expression type "fuga" is not assignable to type "hoge"
    ```

- never  
  値を持たない型

  ```ts
  const error = (message: string): never => {
    throw new Error(message);
  };

  const infiniteLoop = (): never => {
    while (true) {}
  };
  ```

</details>

### リテラル

プリミティブ型の値や一部のオブジェクトは、リテラルを使うことで簡単に定義できるようになっています。

- 真偽値  
  真偽値には `true` と `false` のリテラルがあります。
- 数値  
  数値には 42 のような整数リテラルと 3.14159 のような浮動小数点数リテラルがあります。
- 文字列  
  文字列リテラル共通のルールとして、同じクォーテーション記号で囲んだ内容を文字列として扱います。
  ```ts
  console.log("文字列"); // => "文字列"
  console.log("文字列"); // => "文字列"
  console.log(`文字列`); // => "文字列"
  ```
  - \`（バッククォート）で囲んだ文字列リテラルはテンプレートリテラルと言います。  
    テンプレートリテラルでは、複数行の文字列を改行記号のエスケープシーケンス（\n）を使わずにそのまま書くことができます。
    また、テンプレートリテラル内で `${変数名}` と書いた場合に、その変数の値を埋め込むことができます。
- null  
  null リテラルは `null` 値を返すリテラルです。
- オブジェクト  
  `{}`（中カッコ）を書くことで、新しいオブジェクトを作成できます。  
  ※ `{}` はオブジェクトリテラルなので `{} === {}` は `false` になります。
- 配列  
  `[` と `]` で値をカンマ区切りで囲み、その値を持つ Array オブジェクトを作成します
- 正規表現  
  正規表現リテラルは `/`（スラッシュ）と `/`（スラッシュ）で正規表現のパターン文字列を囲みます。

## 変数宣言

JavaScript の変数宣言の種類

- const(ES2015)  
  再代入できない変数の宣言とその変数が参照する値（初期値）を定義
- let(ES2015)  
  値の再代入が可能な変数を宣言
- var  
  値の再代入が可能な変数を宣言

### const

次のように、`const` キーワードに続いて `変数名` を書き、代入演算子（=）の右辺に変数の `初期値` を書いて変数を定義できます。

```js
const 変数名 = 初期値;
```

`const` は再代入できない変数を宣言するキーワードです。  
そのため、`const` キーワードで宣言した変数に対して、後から値を代入することはできません。

```js
const name = "taro";

name = "jiro"; // エラー
```

TypeScript で書いた場合

```ts
const name: string = "taro";
```

※イミュータビリティを考慮して、基本的には `const` を使うことを意識すると良いです。

### let

変数定義の書き方としては `const` と同様です。

```js
let 変数名 = 初期値;
```

`let` は `const` とは異なり、初期値を指定しない変数も定義できます。  
初期値が指定されなかった変数はデフォルト値として `undefined` という値で初期化されます。

```js
let name;
name = "jiro";
```

TypeScript で書いた場合

```ts
let name: string;
name = "jiro";
```

昨今のコーディングでは、 `const` が一般的なので、 `let` を使う場合は、「この変数は再代入される可能性がある」という表明をする時のみ使うと良いです。

### var

`var` キーワードでは、値の再代入が可能な変数を宣言できます。  
`var` の使い方は `let` とほとんど同じです。

```js
var name;
name = "jiro";
```

`var` には、同じ名前の変数を再定義できてしまう問題があります。

```js
var name = "taro";
var name = "jiro"; // name は 'jiro' になる
```

また、 `var` は `変数の巻き上げ` という問題も発生します。

ES2015 で追加された `const` , `let` はこれらの問題が解消されています。  
`var` を人間が使わなければならない場面は無いので、原則使わないようにしましょう。  
※ 今でも `var` が残っているのは後方互換のためです。

## 関数

関数とは、ある一連の手続き（文の集まり）を 1 つの処理としてまとめる機能です。  
関数を利用することで、同じ処理を毎回書くのではなく、一度定義した関数を呼び出すことで同じ処理を実行できます。

JavaScript では、関数を定義するために `function` キーワードを使います。  
`function` からはじまる文は関数宣言と呼び、次のように関数を定義できます。

```js
// 関数宣言
function 関数名(仮引数1, 仮引数2) {
  // 関数が呼び出されたときの処理
  // ...
  return 関数の返り値;
}
// 関数呼び出し
const 関数の結果 = 関数名(引数1, 引数2);
console.log(関数の結果); // => 関数の返り値
```

TypeScript の場合は、仮引数と返り値に対して型注釈を行う。

```ts
function sum(num1: number, num2: number): number {
  return num1 + num2;
}
```

### Arrow function(ES2015)

関数式には `function` キーワードを使った方法以外に、`Arrow Function` と呼ばれる書き方があります。  
名前のとおり矢印のような `=>（イコールと大なり記号）` を使い、匿名関数を定義する構文です。

```js
// Arrow Functionを使った関数定義
const 関数名 = () => {
  // 関数を呼び出したときの処理
  // ...
  return 関数の返す値;
};
```

Arrow Function には省略記法があり、次の場合にはさらに短く書けます。

- 関数の仮引数が 1 つのときは `()` を省略できる
- 関数の処理が 1 つの式である場合に、ブロックと `return` 文を省略できる
  - その式の評価結果を `return` の返り値とする

```js
// 仮引数の数と定義
const fnA = () => {
  /* 仮引数がないとき */
};
const fnB = (x) => {
  /* 仮引数が1つのみのとき */
};
const fnC = (x) => {
  /* 仮引数が1つのみのときは()を省略可能 */
};
const fnD = (x, y) => {
  /* 仮引数が複数のとき */
};
// 値の返し方
// 次の２つの定義は同じ意味となる
const mulA = (x) => {
  return x * x;
}; // ブロックの中でreturn
const mulB = (x) => x * x; // 1行のみの場合はreturnとブロックを省略できる
```

Arrow Function については次のような特徴があります。

- 名前をつけることができない（常に匿名関数）
- `this` が静的に決定できる
- `function` キーワードに比べて短く書くことができる
- `new` できない（コンストラクタ関数ではない）
- `arguments` 変数を参照できない

`function` キーワードと Arrow Function の大きな違いとして、`this` という特殊なキーワードに関する挙動の違いがあります。
Arrow Function ではこの `this` の問題の多くを解決できるという利点があります。

TypeScript の場合は、仮引数と返り値に対して型注釈を行う。

```ts
const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};
```

<details><summary>Advanced</summary>

Arrow Function 以外の関数（メソッドも含む）における `this` は、実行時に決まる値となります。  
言い方を変えると `this` は関数に渡される暗黙的な引数のようなもので、その渡される値は関数を実行するときに決まります。

関数における `this` の基本的な参照先（暗黙的に関数に渡す `this` の値）はベースオブジェクトとなります。  
ベースオブジェクトとは「メソッドを呼ぶ際に、そのメソッドのドット演算子またはブラケット演算子のひとつ左にあるオブジェクト」のことを言います。  
ベースオブジェクトがない場合の `this` は `undefined` となります。

```js
// `fn`関数はメソッドではないのでベースオブジェクトはない
fn();
// `obj.method`メソッドのベースオブジェクトは`obj`
obj.method();
// `obj1.obj2.method`メソッドのベースオブジェクトは`obj2`
// ドット演算子、ブラケット演算子どちらも結果は同じ
obj1.obj2.method();
obj1["obj2"]["method"]();
```

`this` の問題の原因は `this` がどの値を参照するかは関数の呼び出し時に決まるという性質に由来します。  
この `this` の性質が問題となるパターンの代表的な 2 つの例とそれぞれの対策について見ていきます。

- `this` を含むメソッドを変数に代入した場合
  ```js
  "use strict";
  const person = {
    fullName: "Brendan Eich",
    sayName: function () {
      // `this` は呼び出し元によって異なる
      return this.fullName``;
    },
  };
  // `sayName` メソッドは `person` オブジェクトに所属する
  // `this` は `person` オブジェクトとなる
  console.log(person.sayName()); // => 'Brendan Eich'
  // `person.sayName` を `say` 変数に代入する
  const say = person.sayName;
  // 代入したメソッドを関数として呼ぶ
  // この `say` 関数はどのオブジェクトにも所属していない
  // `this` は `undefined` となるため例外を投げる
  say(); // => TypeError: Cannot read property 'fullName' of undefined
  ```
- コールバック関数の中で `this` を参照する場合
  ```js
  "use strict";
  // strict modeを明示しているのは、thisがグローバルオブジェクトに暗黙的に変換されるのを防止するため
  const Prefixer = {
    prefix: "pre",
    /**
     * `strings` 配列の各要素に prefix をつける
     */
    prefixArray(strings) {
      return strings.map(function (str) {
        // コールバック関数における `this` は `undefined` となる(strict mode)
        // そのため `this.prefix` は `undefined.prefix` となり例外が発生する
        return this.prefix + "-" + str;
      });
    },
  };
  // `prefixArray` メソッドにおける `this` は `Prefixer`
  Prefixer.prefixArray(["a", "b", "c"]); // => TypeError: Cannot read property 'prefix' of undefined
  ```

</details>

## 演算子

算子はよく利用する演算処理を記号などで表現したものです。  
演算子は演算する対象を持ちます。この演算子の対象のことを `被演算子（オペランド）` と呼びます。

次のコードでは、 `+` 演算子が値同士を足し算する加算演算を行っています。  
このとき、 `+` 演算子の対象となっている `1` と `2` という 2 つの値がオペランドです。

```js
1 + 2;
```

このコードでは `+` 演算子に対して、前後に合計 2 つのオペランドがあります。  
このように、2 つのオペランドを取る演算子を `二項演算子` と呼びます。

### 基本的な二項演算子

- `+`  
  2 つの数値を加算する演算子です。  
  文字列の結合にも利用できます。
- `-`  
  2 つの数値を減算する演算子です。
- `*`  
  2 つの数値を乗算する演算子です。
- `/`  
  2 つの数値を除算する演算子です。
- `%`  
  2 つの数値のあまりを求める演算子です。  
  左オペランドを右オペランドで除算したあまりを返します。
- `**`(ES2016)  
  2 つの数値のべき乗を求める演算子です。  
  左オペランドを右オペランドでべき乗した値を返します。

### 比較演算子

比較演算子はオペランド同士の値を比較し、真偽値を返す演算子です。

- 厳密等価演算子( `===` )  
  厳密等価演算子は、左右の 2 つのオペランドを比較します。  
  同じ型で同じ値である場合に、`true` を返します。
  ```js
  console.log(1 === 1); // => true
  console.log(1 === "1"); // => false
  ```
- 厳密不等価演算子( `!==` )  
  厳密不等価演算子は、左右の 2 つのオペランドを比較します。  
  異なる型または異なる値である場合に、`true` を返します。
- 等価演算子( `==` )  
  等価演算子は、2 つのオペランドを比較します。  
  同じデータ型のオペランドを比較する場合は、厳密等価演算子と同じ結果になります。
  ```js
  console.log(1 == 1); // => true
  console.log(1 == "1"); // => true
  ```
  等価演算子は厳密等価演算子とは異なり、 `暗黙的な型変換` をしてから比較します。  
  これは意図しない挙動を生むため、基本的には厳密等価演算子を使うようにしましょう。
- 不等価演算子( `!=` )  
  不等価演算子は、2 つのオペランドを比較します。  
  等しくないなら `true` を返します。  
  こちらも暗黙的な型変換が行われるため、使用を控えましょう。
- 大小の比較演算子( `>`, `>=`, `<`, `<=` )  
  左右オペランドの大小を比較する演算子です。  
  左オペランドが右オペランドより、「より大きい(>)、以上(>=)、より小さい(<)、以下(<=)」の時に `true` を返します。

TypeScript の場合も、これらの演算子の使い方は同じです。

## 暗黙的な型変換

「ある処理において、その処理過程で行われる明示的ではない型変換」のことを暗黙的な型変換と言います。  
暗黙的な型変換は、演算子による演算や関数の処理過程で行われます。

```js
// 異なる型である場合に暗黙的な型変換が行われる
console.log(1 == "1"); // => true
console.log(0 == false); // => true
console.log(10 == ["10"]); // => true

1 + "2"; // => '12'
1 - "2"; // => -1　文字列に対するマイナス演算子の定義は無いため、数値に変換される

const x = 1,
  y = "2",
  z = 3;
console.log(x + y + z); // => '123'
console.log(y + x + z); // => '213'
console.log(x + z + y); // => '42'
```

暗黙的型変換は意図しない結果となりやすいので避けましょう。  
厳密等価演算子を使うことや、リテラルやコンストラクタ関数を使って明示的な型変換を行う事で大体は回避できます。  
※TypeScript を使うことでも解消できます。

```ts
const stringValue = (x: number, y: string, z: number): string => {
  return `${x}${y}${z}`;
};

const numberValue = (x: number, y: string, z: number): number => {
  return x + Number(y) + z; // NaN には注意
};
```

TypeScript で返り値の型を縛る事で、実装者が意図しない型変換に気付ける場合もあります。

## 条件分岐

条件分岐を使うことで、特定の条件を満たすかどうかで行う処理を変更できます。

### if 文

if 文を使うことで、プログラム内に条件分岐を書けます。  
if 文は次のような構文が基本形となります。 `条件式` の評価結果が `true` であるならば、 `実行する文` が実行されます。

```js
if (条件式) {
  実行する文;
}
```

if 文の条件式には `true` または `false` といった真偽値以外の値も指定できます。  
真偽値以外の値の場合、その値を暗黙的に真偽値へ変換してから、条件式として判定します。  
次の値は真偽値へと変換すると `false` となるため、これらの値は `falsy` と呼ばれます

- false
- undefined
- null
- 0
- 0n
- NaN
- ""（空文字列）

複数の条件分岐を書く場合は、if 文に続けて `else if` 文を使うことで書けます。

```js
const version = "ES6";
if (version === "ES5") {
  console.log("ECMAScript 5");
} else if (version === "ES6") {
  console.log("ECMAScript 2015");
} else if (version === "ES7") {
  console.log("ECMAScript 2016");
}
```

条件に一致しなかった場合の処理は、 `else` 文を使うことで書けます。

```js
const num = 1;
if (num > 10) {
  console.log(`numは10より大きいです: ${num}`);
} else {
  console.log(`numは10以下です: ${num}`);
}
```

TypeScript の場合も、使い方は同じです。

### switch 文

switch 文は、次のような構文で `式` の評価結果が指定した値である場合に行う処理を並べて書きます。

```js
switch (式) {
  case ラベル1:
    // `式`の評価結果が`ラベル1`と一致する場合に実行する文
    break;
  case ラベル2:
    // `式`の評価結果が`ラベル2`と一致する場合に実行する文
    break;
  default:
    // どのcaseにも該当しない場合の処理
    break;
}
// break後はここから実行される
```

switch 文の `case` 節では基本的に `break` を使って switch 文を抜けるようにします。  
この `break` は省略が可能ですが、省略した場合、後ろに続く `case` 節が条件に関係なく実行されます。

switch 文は if 文の代用として使うのではなく、次のように関数と組み合わせて条件に対する値を返すパターンとして使うことが多いです。

```js
const getECMAScriptName = (version) => {
  switch (version) {
    case "ES5":
      return "ECMAScript 5";
    case "ES6":
      return "ECMAScript 2015";
    case "ES7":
      return "ECMAScript 2016";
    default:
      return "しらないバージョンです";
  }
};
// 関数を実行して`return`された値を得る
getECMAScriptName("ES6"); // => 'ECMAScript 2015'
```

TypeScript の場合も、使い方は同じです。

## ループ

反復処理には `for文` や `while文`, 配列のインスタンスメソッドなどがあります。

イミュータビリティを考慮し、今回は配列のインスタンスメソッドの一部を例として解説していきます。

`Array.prototype.map` を使う

```js
const array = [1, 2, 3];
const result = array.map((item) => {
  return item + 1;
});
```

`Array.prototype.map` メソッドは、与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる **新しい配列** を生成します。  
この「新しい配列を生成する」部分が重要で、基の `array` には変更が加えられず、新しい配列 `result` が定義されます。

TypeScript の場合も、使い方は同じです。

## 非同期処理

多くのプログラミング言語にはコードの評価の仕方として、 `同期処理(sync)` と `非同期処理(async)` という大きな分類があります。

`同期処理` ではコードを順番に処理していき、ひとつの処理が終わるまで次の処理は行いません。  
同期的にブロックする処理があると、ブラウザでは大きな問題となります。  
JavaScript は基本的にブラウザのメインスレッドで実行されるため、表示が更新されなくなりフリーズしたようになります。

```js
// 指定した`timeout`ミリ秒経過するまで同期的にブロックする関数
function blockTime(timeout) {
  const startTime = Date.now();
  // `timeout`ミリ秒経過するまで無限ループをする
  while (true) {
    const diffTime = Date.now() - startTime;
    if (diffTime >= timeout) {
      return; // 指定時間経過したら関数の実行を終了
    }
  }
}
console.log("処理を開始");
blockTime(1000); // 他の処理を1000ミリ秒（1秒間）ブロックする
console.log("この行が呼ばれるまで処理が1秒間ブロックされる");
```

`非同期処理` はコードを順番に処理していきますが、ひとつの非同期処理が終わるのを待たずに次の処理を評価します。

```js
// 指定した`timeout`ミリ秒経過するまで同期的にブロックする関数
function blockTime(timeout) {
  const startTime = Date.now();
  while (true) {
    const diffTime = Date.now() - startTime;
    if (diffTime >= timeout) {
      return; // 指定時間経過したら関数の実行を終了
    }
  }
}

console.log("1. setTimeoutのコールバック関数を10ミリ秒後に実行します");
setTimeout(() => {
  console.log("3. ブロックする処理を開始します");
  blockTime(1000); // 他の処理を1秒間ブロックする
  console.log("4. ブロックする処理が完了しました");
}, 10);
// ブロックする処理は非同期なタイミングで呼び出されるので、次の行が先に実行される
console.log("2. 同期的な処理を実行します");

// ログ
// setTimeoutのコールバック関数を10ミリ秒後に実行します
// 同期的な処理を実行します
// ブロックする処理を開始します
// ブロックする処理が完了しました
```

TypeScript の場合も、使い方は同じです。

### Promise(ES2015)

`Promise` は、ES2015 で導入された非同期処理を扱うビルトインオブジェクトです。  
`Promise` は、オブジェクトという形にして非同期処理を統一的なインターフェースで扱うことを目的にしています。  
`Promise` は、ビルトインオブジェクトであるためさまざまなメソッドを持っています。(`then`, `catch`, `finally`)

`Promise` は `new` 演算子で `Promise` のインスタンスを作成して利用します。  
このときのコンストラクタには `resolve` と `reject` の 2 つの引数を取る `executor` と呼ばれる関数を渡します。  
`executor` 関数の中で非同期処理を行い、非同期処理が成功した場合は `resolve` 関数を呼び、失敗した場合は `reject` 関数を呼び出します。

```js
const executor = (resolve, reject) => {
  // 非同期の処理が成功したときはresolveを呼ぶ
  // 非同期の処理が失敗したときはrejectを呼ぶ
};
const promise = new Promise(executor);
```

`Promise#then` メソッドの第一引数には `resolve（成功）` 時に呼ばれるコールバック関数、第二引数には `reject（失敗）` 時に呼ばれるコールバック関数を渡します。  
`Promise#catch` メソッドの引数には `reject（失敗）` 時に呼ばれるコールバック関数を渡します。

次のコードでは `then` メソッドと `catch` メソッドで失敗時のエラー処理をしていますが、どちらも同じ意味となります。  
`then` メソッドに `undefined` を渡すのはわかりにくいため、失敗時の処理だけを登録する場合は `catch` メソッドの利用を推奨しています。

```js
function errorPromise(message) {
  return new Promise((resolve, reject) => {
    reject(new Error(message));
  });
}
// 非推奨: `then`メソッドで失敗時のコールバック関数だけを登録
errorPromise("thenでエラーハンドリング").then(undefined, (error) => {
  console.log(error.message); // => 'thenでエラーハンドリング'
});
// 推奨: `catch`メソッドで失敗時のコールバック関数を登録
errorPromise("catchでエラーハンドリング").catch((error) => {
  console.log(error.message); // => 'catchでエラーハンドリング'
});
```

### Async Function(ES2017)

ES2017 では、 `Async Function` という非同期処理を行う関数を定義する構文が導入されました。  
`Async Function` は通常の関数とは異なり、必ず `Promise` インスタンスを返す関数を定義する構文です。

```js
async function doAsync() {
  return "値";
}
// doAsync関数はPromiseを返す
doAsync().then((value) => {
  console.log(value); // => '値'
});
```

`Async Function` 内では `await` 式という `Promise` の非同期処理が完了するまで待つ構文が利用できます。  
`await` 式を使うことで非同期処理を同期処理のように扱えるため、 `Promise` チェーンで実現していた処理の流れを読みやすく書けます。

```js
async function doAsync() {
  // 非同期処理
}
async function asyncMain() {
  // doAsyncの非同期処理が完了するまでまつ
  await doAsync();
  // 次の行はdoAsyncの非同期処理が完了されるまで実行されない
  console.log("この行は非同期処理が完了後に実行される");
}
```
