/*
* 以下のgiveId関数は level2-question2 と同じもので、渡されたオブジェクトobjにプロパティidを加えてできる新しいオブジェクトを返す関数です。
* level2-question2 では簡単のためにobjが既にidを持っている場合は考えませんでしたが、今回はそのような場合も考えることにします。
* objが既にidプロパティを持っている場合、giveIdはidプロパティを上書きします。
* 例えば、giveId({foo: 123, id: 456})は{foo: 123, id: '本当は（略'}というオブジェクトになります。
* このことを加味して、giveIdに適切な型をつけてください。
* なお、level2-question2 の想定解では一番下のobj2.id = '';がエラーになりますが、今回はこれがエラーにならないようにする必要があります。
* */

// 以下のコードのコメントアウトを外して修正を行う
// function giveId(obj) {
//   const id = '本当はランダムがいいけどここではただの文字列'
//   return {
//     ...obj,
//     id,
//   }
// }
//
// // 使用例
// /*
//  * obj1の型は { foo: number; id: string } 型
//  */
// const obj1 = giveId({ foo: 123 })
// /*
//  * obj2の型は { num : number; id: string } 型
//  */
// const obj2 = giveId({
//   num: 0,
//   id: 100,
// })
// // obj2のidはstring型なので別の文字列を代入できる
// obj2.id = ''
