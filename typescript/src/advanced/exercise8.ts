/*
* 以下のコードは validateEntity() 関数によって entity が存在する事が担保されています。
* しかし、型としては optional な型となっているため、コンパイルエラーが発生しています。
* 今回は、 Non-Null assertion を使って、実装者が entity は存在することを担保する方法を取りたいと思います。
* Non-Null assertion を使ってコードを修正してください。
* Non-Null assertion: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-
* */

// 以下のコードのコメントアウトを外して修正を行う
// {
//   type Entity = {
//     id: number
//     name: string
//   }
  
//   const entity: Entity = {
//     id: 1,
//     name: 'taro'
//   }
  
//   function validateEntity(e?: Entity) {
//     if (!e) {
//       throw new Error()
//     }
//   }
  
//   function processEntity(e?: Entity) {
//     validateEntity(e)
//     return e.name
//   }

//   console.log(processEntity(entity))
// }