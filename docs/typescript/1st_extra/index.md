# TypeScript Deep Dive

## 目次

- [Basic Types](#Basic-Types)
  - [Union Type](#Union-Types)
  - [Intersection Type](#Intersection-Types)
    - [Mapped Type](#mapped-types)
    - [Conditional Type](#conditional-types)
    - [Generics](#generics)
- [先行して使える構文](#先行して使える構文)
  - [Optional and Default Parameters](#Optional-and-Default-Parameters)
    - [Optional Parameters](#Optional-Parameters)
    - [Default Parameters](#Default-Parameters)
  - [Non-null assertion](#Non-null-assertion)
  - [Optional Chaining](#Optional-Chaining)
  - [Nullish Coalescing](#Nullish-Coalescing)

## Basic-Types

TypeScript の型システムを使用すると、さまざまな演算子を使用して、既存の型から新しい型を構築できます。  
いくつかピックアップして解説していきます。

### Union-Types

値が複数の型のどれかに当てはまるような型を表します。  
`|` で繋いで表現をします。

```ts
let value: string | number; // value は文字列型か数値型を持つ

value = "taro"; //OK
value = 1; // OK
value = true; // コンパイルエラー
```

#### 演習問題

`/typescript/src/advanced/exercise1.ts` を解いてみてください。

### Intersection-Types

指定した型の両方を満たす型を表します。  
`&` で繋いで表現をします。

```ts
type Hoge = {
  foo: string;
  bar: boolean;
};
type Fuga = {
  foo: string;
  baz: number;
};

const obj1: Hoge & Fuga = {
  foo: "taro",
  bar: false,
  baz: 1,
};

const obj2: Hoge & Fuga = {
  // baz を持っていないのでコンパイルエラー
  foo: "jiro",
  bar: true,
};
```

#### 演習問題

`/typescript/src/advanced/exercise2.ts` を解いてみてください。

<details><summary>Advanced</summary>

- `type` で `interface` の `Declaration Merging` を表現する例

```ts
// interface の場合
interface IHoge {
  foo: string;
  bar: boolean;
}
interface IHoge {
  baz: number;
}
const obj1: IHoge = {
  foo: "taro",
  bar: false,
  baz: 1,
};

// type の場合
type THoge = {
  foo: string;
  bar: boolean;
};
type TFuga = {
  baz: number;
};
const obj2: THoge & TFuga = {
  foo: "taro",
  bar: false,
  baz: 1,
};
```

</details>

### Generics

型定義の中で型変数を持てます。  
名前の後に `< >` で囲った名前の列を与えて表現をします。

```ts
type Foo<S, T> = {
  foo: S;
  bar: T;
};

const obj1: Foo<string, number> = {
  foo: "foo",
  bar: 1,
};

const obj2: Foo<number, string> = {
  foo: 2,
  bar: "foo",
}
```

上記コードのようにすると、 `Foo` は２つの型変数 `S`, `T` を持ち、 `foo` , `bar` が型変数 `S`, `T` の型となる object の型を表します。  
そのため、 `Foo<string, number>` とすると、その型を持つ変数は `foo: string` , `bar: number` を持つ object となります。  
このように動的に型を指定することができるので、より再利用性が高い柔軟なコードを書くことができます。

#### 演習問題

`/typescript/src/advanced/exercise3.ts` を解いてみてください。

### Mapped-Types

(半)動的に型を生成出来ます。  
`{[P in K]: T}` のようにして表現します。  
`K` は string の部分型である必要があります。

```ts
type Hoge = { [P in "foo" | "bar"]: string };

const obj = {
  foo: "taro",
  bar: "jiro",
};
```

`K` 型の値として可能な各文字列 `P` に対して、型 `T` を持つプロパティ `P` が存在するようなオブジェクトの型を意味しています。  
上記の例では、 `{ foo: string, bar: string }` という型を表しています。

#### 演習問題

`/typescript/src/advanced/exercise4.ts` を解いてみてください。

<details><summary>Advanced</summary>

- TypeScript が提供している `Utility Types` の `Partial<T>` は mapped types を用いて実装されている。
- `Partial<T>` は `T` の全てのパラメータを optional にした型を返す。
  - 演習問題 (Ex.10) では、 `Partial<T>` を使わずにチャレンジしてみよう

```ts
type Hoge = {
  foo: string;
  bar: number;
};

type OptionalHoge = Partial<Hoge>; // { foo?: string, bar?: number }
```

</details>

### Conditional-Types

型レベルの条件分岐が可能な型です。  
`T extends U ? X : Y` のようにして表現します。  
この型は `T` が `U` の部分型ならば `X` に、そうでなければ `Y` になります。  
三項演算子と同様の記法を用います。

```ts
type Diff<T, U> = T extends U ? never : T;
type RequiredKeys = Diff<"age" | "name", "age">; // 'name'
```

上記の例は `Conditional Type` を用いて、 `T` に指定した型から、 `U` に指定した型を取り除く型 `Diff` を定義しています。  
`RequiredKeys` は、 `T` に指定した `'age' | 'name'` から、 `U` に指定した `'age'` を取り除いた `'name'` の型を表しています。

`T` を一つずつ取り出して、 `T extends U ? X : Y` の形で推測を行なっています。  
上記の `Diff` 型は以下のようになっています。

```ts
type Diff =
  | ("age" extends "age" ? never : "age")
  | ("name" extends "age" ? never : "name");
```

`'age'` は `'age'` 型 なので `never` が返って来ます。  
`'name'` は `'age'` 型 ではないので `'name'` が返って来ます。

```ts
type Diff = never | "name";
```

`never` は union 型からは除外されるようになっているため

```ts
type Diff = "name";
```

となり、 `RequiredKeys` の型は `'name'` となります。

#### 演習問題

`/typescript/src/advanced/exercise5.ts` を解いてみてください。

## 先行して使える構文

### Optional-and-Default-Parameters

#### Optional Parameters

`?` を用いる事でパラメータを省略可能であると表せます。  
optional なパラメータは required なパラメータの最後に記述しなければなりません。  
optional なパラメータは実質 `undefined` との Union Types となります

```ts
function log(message: string, userName?: string): void {
  if (!userName) {
    console.log(`guest: ${message}`);
  }
  console.log(`${userName}: ${message}`);
}

log("hello"); // OK -> guest: hello
log("hello", "taro"); // OK -> taro: hello
```

##### 演習問題

`/typescript/src/advanced/exercise6.ts` を解いてみてください。

#### Default Parameters

関数の引数の後に `= ***` で引数のデフォルト値を指定出来ます。  
関数の引数の場合、デフォルトパラメータを指定しておく場合も多いです。  
デフォルトパラメータを指定する場合、順序に決まりはありません。

```ts
function log(message: string, userName: string = "guest"): void {
  console.log(`${userName}: ${message}`);
}

log("hello"); // OK -> guest: hello
log("hello", "jiro"); // OK -> jiro: hello
```

##### 演習問題

`/typescript/src/advanced/exercise7.ts` を解いてみてください。

### Non-null assertion

その変数が `undefined` , `null` ではない事をコンパイラに伝える記法です。  
要素の後ろに `!` を記述して表現します。

```ts
const message1 = "hello" as string | null;
const message2 = "hello" as string | null;
const message3 = null as string | null;

message1.toUpperCase(); // コンパイルエラーになるが、ランタイムエラーにならない
message2!.toUpperCase(); // コンパイルエラーにならず、ランタイムエラーにならない
message3!.toUpperCase(); // コンパイルエラーにならず、ランタイムエラーになる
```

コンパイラに「この要素は存在する」と伝えるため、 要素が `null` であることによるコンパイルエラーが発生しません。  
そのため、実装者が要素の存在を担保できる場合にのみ使うことが望ましいです。

#### 演習問題

`/typescript/src/advanced/exercise8.ts` を解いてみてください。

### Optional Chaining

null/undefined のチェックを楽に書ける記法です。  
null/undefined になり得る要素の後ろに `?` を記述して表現します。

```ts
type Hoge = {
  foo?: {
    bar: string;
  };
};

const obj: Hoge = {
  foo: {
    bar: "taro",
  },
};

const string = obj.foo?.bar;
// Optional Chaining を使わない場合
// const string = obj.foo && obj.foo.bar // 論理演算子を使っている
```

#### 演習問題

`/typescript/src/advanced/exercise9.ts` を解いてみてください。

### Nullish Coalescing

短絡評価を null と undefined に制限して評価する記法です。  
`??` を用いて表現します。
空文字列や `0` の場合に論理演算子で起こり得るバグを防げます。

`foo` が存在しなければ `bar` を返す記述を例にすると

```ts
// javascript での例
const result = foo || bar;
// これは以下と同義
const result = foo ? foo : bar;
```

この場合 `foo` が空文字列や `0` の場合でも `bar` を返してしまいます。  
`result` が 空文字列や `0` も期待している場合はエラーの温床となってしまいます。

```ts
// Nullish Coalescing を用いて、空文字列、0の場合も foo を返せるようにする
const result = foo ?? bar;
```

#### 演習問題

`/typescript/src/advanced/exercise10.ts` を解いてみてください。

<!-- ## 時間が余った時用

`/typescript/src/sp` に研修振り返り用の問題を用意しています。
解いてみてください。

問題は拝借してきたものです。
教え切れてない内容もあるのでググっても OK、ただし答えを探すのは NG！

## level1

- 理解確認用の問題
- 講義内容が理解出来ていれば簡単

問題は、 `/typescript/src/sp/level1/` にあります。今までの演習問題同様に実行して確認して下さい。

## level2

- 基礎の問題
- 少し考える必要が出てくるかも？

問題は、 `/typescript/src/sp/level2/` にあります。今までの演習問題同様に実行して確認して下さい。

## level3

- 脱入門のレベル
- 解ければ TypeScript の基礎は完全に理解出来てそう

問題は、 `/typescript/src/sp/level3/` にあります。今までの演習問題同様に実行して確認して下さい。 -->
