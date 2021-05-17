/*
* 以下のコードを Optional Chaining を用いて書き直してください
* */

// 以下のコードのコメントアウトを外して修正を行う
type Hoge = {
  foo?: {
    bar: string
  }
}

const obj: Hoge = {
  foo: {
    bar: 'taro'
  }
}

function getBar(obj: Hoge) {
  return obj.foo?.bar
}

console.log(getBar(obj))

export {}
