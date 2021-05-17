/*
* 以下のコードを name にデフォルトパラメータを設定することで、関数内で userName を定義する必要が内容に修正してください
* */

// 以下のコードのコメントアウトを外して修正を行う
const log = (message: string, name: string = 'guest'): void => {
  console.log(`${name}: ${message}`)
}

log('hello', 'taro') // taro: hello
log('hello') // guest: hello

export {}
