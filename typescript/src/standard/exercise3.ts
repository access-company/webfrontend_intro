/*
* 以下のコードは widening の挙動により、定義したオブジェクトのプロパティの値が書き換えられています。
* non widening literal を使用し、オブジェクトのプロパティを書き換えられないように修正してください。
* 修正後にプロパティを書き換えている箇所は削除しましょう。
* 余裕がある場合は、オブジェクトリテラルと spread構文を用いて obj.name が 'jiro' である新しいオブジェクト(newObj)を生成するように修正してみてください。
* const assertion: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
* spread構文: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax
* */

// 以下のコードのコメントアウトを外して修正を行う
const name = 'taro' as const

const obj = {
  name // 省略記法 name: name と同じ
}

const newObj = { ...obj, name: 'jiro' }

export {}
