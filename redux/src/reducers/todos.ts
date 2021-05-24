import { Todo } from '../models/Todo'
import { colors } from '../models/ColorFilter'
import { Type, TodoAction } from '../actions/todo'

const todo = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case Type.ADD_TODO: {
      const { id, text, link } = action.payload
      return [
        ...state,
        {
          id,
          text,
          link,
          completed: false,
          color: colors[0],
        },
      ]
    }
    case Type.TOGGLE_TODO: {
      const { id } = action.payload
      return state.map(({ id: existingId, completed, ...todo }) => (
        existingId === id
        ? { ...todo, id: existingId, completed: !completed }
        : { ...todo, id: existingId, completed }
      ))
    }
    case Type.CHANGE_COLOR: {
      const { id, color } = action.payload
      return state.map(({ id: existingId, ...todo }) => (
        existingId === id
        ? { ...todo, id: existingId, color }
        : { ...todo, id: existingId }
      ))
    }
    case Type.DELETE_TODO: {
      const { id } = action.payload
      return state.filter(({ id: existingId }) => existingId !== id)
    }
    case Type.SORT_TODOS: {
      const { todos, colorFilter } = action.payload
      const filteredIndexes = state.flatMap(({ color }, index) => colorFilter[color] ? [index] : [])
      return state.map((todo, index) => {
        const filteredIndex = filteredIndexes.indexOf(index)
        if (filteredIndex === -1) {
          return { ...todo }
        } else {
          return { ...todos[filteredIndex] }
        }
      })
    }
    default:
      return state
  }
}

export default todo
