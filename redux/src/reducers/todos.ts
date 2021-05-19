import { Todo } from '../models/Todo'
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
    case Type.DELETE_TODO: {
      const { id } = action.payload
      return state.filter(({ id: existingId }) => existingId !== id)
    }
    default:
      return state
  }
}

export default todo
