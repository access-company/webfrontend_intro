/*
* 以下のコードを const を使った記述に修正してください。
* Array.prototype.reduce(): https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
* */

// 以下のコードのコメントアウトを外して修正を行う
const list = [
  {
    price: 100
  },
  {
    price: 250
  },
  {
    price: 500
  },
]

const total = list.reduce((acc, item) => {
  return acc + item.price
}, 0)

export {}
