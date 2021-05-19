import { Todo } from '../models/Todo'
import { VisibilityFilter } from '../models/VisibilityFilter'
import { RootState } from '../store'

export const getTodos = (store: RootState) =>
  store.todos as Todo[]

export const getTodosByVisibilityFilter = (store: RootState) => {
  const allTodos = getTodos(store)
  switch (store.visibilityFilter) {
    case VisibilityFilter.COMPLETED:
      return allTodos.filter((todo: Todo) => todo.completed)
    case VisibilityFilter.INCOMPLETE:
      return allTodos.filter((todo: Todo) => !todo.completed)
    case VisibilityFilter.ALL:
    default:
      return allTodos
  }
}
