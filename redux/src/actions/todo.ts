export const Type = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
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

export type TodoAction =
  ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
