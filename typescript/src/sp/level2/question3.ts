/*
* 以下のコードで定義される関数reducerは、現在の数値とアクションを受け取って、それに応じて新しい数値を返す関数です。
* アクションは3種類あり、加算を表すアクションは{ type: "increment", amount: 数値 }という形のオブジェクトです。
* 減算を表すアクションは{ type: "decrement", amount: 数値 }という形です。
* 数値のリセットを表すアクションは{ type: "reset", value: 数値 }という形です。
* reducerに適切な型をつけてください。
* */

// 以下のコードのコメントアウトを外して修正を行う
// {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'increment':
//         return state + action.amount
//       case 'decrement':
//         return state - action.amount
//       case 'reset':
//         return action.value
//     }
//   }
  
//   // 使用例
//   reducer(100, {
//     type: 'increment',
//     amount: 10,
//   }) === 110
//   reducer(100, {
//     type: 'decrement',
//     amount: 55,
//   }) === 45
//   reducer(500, {
//     type: 'reset',
//     value: 0,
//   }) === 0
  
//   // エラー例
//   reducer(0, {
//     type: 'increment',
//     value: 100,
//   })
// }
