/*
* 1人のユーザーのデータを表すオブジェクトは、nameプロパティとageプロパティ、そしてprivateプロパティを持っています。
* nameは文字列、ageは数値、privateは真偽値です。
* ユーザーデータのオブジェクトの型Userを定義してください。
* */

// 以下のコードのコメントアウトを外して修正を行う
type User = {
  name: string
  age: number
  private: boolean
}

function showUserInfo(user: User) {
  // 省略
}

// 使用例
showUserInfo({
  name: 'John Smith',
  age: 16,
  private: false,
})

// エラー例
// showUserInfo({
//   name: 'Mary Sue',
//   private: false,
// })
// const usr: User = {
//   name: 'Gombe Nanashino',
//   age: 100,
// }

export {}
