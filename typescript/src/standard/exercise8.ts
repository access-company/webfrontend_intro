/*
* 以下のコードは同じオブジェクトリテラルの型が使われています。
* これは冗長かつ、一箇所の変更に対して変更漏れが発生する懸念があります。
* interface を用いて最適な形に修正してください。
* interface: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
* */

// 以下のコードのコメントアウトを外して修正を行う
// {
//   const hogeUser: { id: number, name: string } = {
//     id: 1,
//     name: 'taro'
//   }
  
//   function updateFugaUserName(user: { id: number, name: string }, newName: string): { id: number, name: string } {
//     return {
//       id: user.id,
//       name: newName
//     }
//   }
  
//   console.log(updateFugaUserName(hogeUser, 'jiro'))
// }
