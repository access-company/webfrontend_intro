/*
* 以下のコードはすべて any 型で定義されており、 TypeScript の恩恵を受けられていません。
* 正しい型注釈を行うように修正してください。
* この時、代入している値の型のみを持つものとする。
* */

// 以下のコードのコメントアウトを外して修正を行う
const name: string = 'taro'

const price: number = 100

const isValid: boolean = true

const items: string[] = ['hoge', 'fuga', 'piyo']

const sum = (num1: number, num2: number): number => {
  return num1 + num2
}

const obj: { id: number, title: string } = {
  id: 1,
  title: 'hoge'
}

export {}
