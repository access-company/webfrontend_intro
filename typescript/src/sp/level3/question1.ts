/*
* 以下のコードで定義されている型Func<A, R>は、A型の引数をひとつ受け取ってR型の値を返すような関数の型です。
* JavaScriptでは与えられなかった引数はundefinedが入ることが知られていますから、f2のようにAがundefined型のときは引数無しで呼べるようにしたいです。
* 一応、v3のように明示的にundefinedを渡して呼び出すのもOKとしたいです。
* 一方、v4のように、引数がundefined以外のときは引数の省略は許しません。
* 以上の動作をするように、型Func<A, R>を定義しなおしてください。
* */

// 以下のコードのコメントアウトを外して修正を行う
// type Func<A, R> = (arg: A) => R
//
// // 使用例
// const f1: Func<number, number> = (num) => num + 10
// const v1: number = f1(10)
//
// const f2: Func<undefined, number> = () => 0
// const v2: number = f2()
// const v3: number = f2(undefined)
//
// const f3: Func<number | undefined, number> = (num) => (num || 0) + 10
// const v4: number = f3(123)
// const v5: number = f3()
//
// // エラー例
// const v6: number = f1()
