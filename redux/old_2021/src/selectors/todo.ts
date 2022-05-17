import { Todo } from '../models/Todo'
import { VisibilityFilter } from '../models/VisibilityFilter'
import { RootState } from '../store'

export const getTodos = (state: RootState) =>
  state.todos as Todo[]

export const getTodosByVisibilityFilter = (state: RootState) => {
  const allTodos = getTodos(state)
  switch (state.visibilityFilter) {
    case VisibilityFilter.COMPLETED:
      return allTodos.filter((todo: Todo) => todo.completed)
    case VisibilityFilter.INCOMPLETE:
      return allTodos.filter((todo: Todo) => !todo.completed)
    case VisibilityFilter.ALL:
    default:
      return allTodos
  }
}
