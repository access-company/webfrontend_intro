/*
* 以下の非同期処理が成功した場合には 'success' を表示し、失敗した場合には 'failure' を表示するようにコードを追加してください。
* */

// 以下のコードのコメントアウトを外して修正を行う
const asyncFunction = async (): Promise<string> => {
  const nowSecond = new Date().getSeconds()
  if(nowSecond % 2 === 0) {
    return 'success'
  }
  return 'failure'
}

asyncFunction()
  .then(() => console.log('success'))
  .catch(() => console.log('failure'))

export {}
