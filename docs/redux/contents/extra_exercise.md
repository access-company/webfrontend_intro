# 発展演習

## 演習1

「インポート」ボタンを連打できないようにしたい。

### 設計

以下の順序で実行する。
- ボタンを無効化する
- 通信が終わるのを待つ
- ボタンを有効化する

### 実装方針

以下のいずれかの方法で実現してください。
- 1. storeの構造を修正し、「通信中かどうか」を管理する
```
store.todos: array[Todo]
=>
store.todos: { data: array[Todo], requesting: boolean }
```
- 2. `useReducer`で個別のコンポーネントのために`[state, dispatch]`を生成する
- 3. `useState`で個別のコンポーネントのために`[enabled, setEnabled]`を生成する

また、その方法を選んだ理由を示してください。

## 演習2

あなたは自社webサービスの技術リーダーです。

顧客から「新しいユーザー層を獲得したい」との相談を受けました。

TODOリストに状態や条件分岐を追加したプロトタイプを作成し、UXの改善案を発表してください。

バックエンドは特定のユーザー層のためのコンテンツを返します。mockで構いません。

mockの例1:
```
const seniorExercise = [1,2,3,4]
const mockSeniorApi = async () => {
  setTimeout(() => {
    return {
      activity: seniorExercise[parseInt(results.length * Math.random(), 10)] || null
    }
  }, 2000)
}
```

mockの例2:
```
const studentChallenge = {...}
const mockStudentApi = async input => {
  setTimeout(() => {
    return {
      activity: studentChallenge[input] || null
    }
  }, 2000)
}
```
