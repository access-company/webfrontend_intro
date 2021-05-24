import { Dispatch } from 'redux'

import { Todo } from '../models/Todo'
import { Color, ColorFilter } from '../models/ColorFilter'

export const Type = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  CHANGE_COLOR: 'CHANGE_COLOR',
  SORT_TODOS: 'SORT_TODOS'
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

export const deleteTodo = (id: number) => ({
  type: Type.DELETE_TODO,
  payload: { id },
})

export const importTodo = () => (dispatch: Dispatch) =>
  fetch('https://www.boredapi.com/api/activity/')
  .then(response => response.json())
  .then(({ activity, link }) => dispatch(
    addTodo(activity, link)
  ))

export const changeColor = (id: number, color: Color) => ({
  type: Type.CHANGE_COLOR,
  payload: { id, color },
})

export const sortTodos = (todos: Todo[], colorFilter: ColorFilter) => ({
  type: Type.SORT_TODOS,
  payload: { todos, colorFilter },
})

export type TodoAction =
  ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof changeColor>
  | ReturnType<typeof sortTodos>
