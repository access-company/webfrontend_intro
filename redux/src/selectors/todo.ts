import { Todo } from '../models/Todo'
import { VisibilityFilter } from '../models/VisibilityFilter'
import { ColorFilter } from '../models/ColorFilter'
import { RootState } from '../store'

export const getTodos = (state: RootState) =>
  state.todos as Todo[]

export const getTodosByFilters = (state: RootState) => {
  const allTodos = getTodos(state)
  console.log(state)
  return filterByColor(filterByVisibilityFilter(allTodos, state.visibilityFilter), state.colorFilter)
}

const filterByVisibilityFilter = (todos: Todo[], visibilityFilter: VisibilityFilter) => {
  switch (visibilityFilter) {
    case VisibilityFilter.COMPLETED:
      return todos.filter((todo: Todo) => todo.completed)
    case VisibilityFilter.INCOMPLETE:
      return todos.filter((todo: Todo) => !todo.completed)
    case VisibilityFilter.ALL:
    default:
      return todos
  }
}

const filterByColor = (todos: Todo[], colors: ColorFilter) => {
  return todos.filter((todo: Todo) => colors[todo.color])
}
