/*
* 下のコードで定義されるgiveId関数は、オブジェクトを受け取って、それに新しい文字列型のプロパティidを足してできる新しいオブジェクトを返す関数です。
* この関数に適切な型を付けてください。
* なお、簡単のために、giveIdに渡されるオブジェクトobjが既にidプロパティを持っている場合は考えなくて構いません。
* hint: Intersection Types
* */

// 以下のコードのコメントアウトを外して修正を行う
function giveId<T>(obj: T): T & { id: string } {
  const id = 'ランダム文字列'
  return {
    ...obj,
    id,
  }
}

// 使用例
const obj1: {
  id: string
  foo: number
} = giveId({ foo: 123 })
const obj2: {
  id: string
  num: number
  hoge: boolean
} = giveId({
  num: 0,
  hoge: true,
})

// エラー例
// const obj3: {
//   id: string
//   piyo: string
// } = giveId({
//   foo: 'bar',
// })

export {}
