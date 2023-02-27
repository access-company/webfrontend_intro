/*
* 以下のコードは同じオブジェクトリテラルの型が使われています。
* これは冗長かつ、一箇所の変更に対して変更漏れが発生する懸念があります。
* Type alias を用いて最適な形に修正してください。
* Type alias: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
* */

// 以下のコードのコメントアウトを外して修正を行う

// type User = {id: number, name: string}
// const hgoeUser: User = {
//   id: 1,
//   name: 'taro'
// }

// function updateHogeUserName(user: User, newName: string): User {
//   return {...user, name: newName}
// }

// console.log(updateHogeUserName(hgoeUser, 'jiro'))
