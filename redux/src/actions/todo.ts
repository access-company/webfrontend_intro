import { Dispatch } from 'redux'

export const Type = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  // DELETE_TODO: 'DELETE_TODO',
} as const

let nextTodoId = 0

export const addTodo = (text: string, link?: string) => ({
  type: Type.ADD_TODO,
  payload: {
    id: ++nextTodoId,
    text,
    link,
  },
})

export const toggleTodo = (id: number) => ({
  type: Type.TOGGLE_TODO,
  payload: { id },
})

/*
  deleteTodoを実装してください。
  引数は id
  type は DELETE_TODO
  payload は { id } とする
*/
export const deleteTodo = () =>
  null

/*
  Promise または async/awaitを 用いて非同期な action を追加してください。
  以下の 1-1, 1-2, 2 の3つの処理をチェーンさせてください。
  1. Fetch APIの利用例に従ってJSON APIからTODOを取得する
    https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#:~:text=http://example.com/movies.json
    1-1. GETリクエストを発行する
      URLは https://www.boredapi.com/api/activity/ である
    1-2. レスポンスをJSONオブジェクトに変換する
  2. addTodo actionをdispatchする
    レスポンスの形式は{ activity: string, … }である
    addTodo action creator に activity を渡して、 addTodo actionを生成する
*/
export const importTodo = () => (_dispatch: Dispatch) =>
  Promise.resolve()

export type TodoAction =
  ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  // | ReturnType<typeof deleteTodo>
