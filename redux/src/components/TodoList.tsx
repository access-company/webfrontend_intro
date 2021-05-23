import { FC } from 'react'
import { useSelector } from 'react-redux'

import TodoItem from './TodoItem'
import { getTodosByVisibilityFilter } from '../selectors/todo'
import { words } from '../constants'
import { Todo } from '../models/Todo'

const TodoList: FC = () => {
  const todos = useSelector(getTodosByVisibilityFilter)
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo: Todo) =>
            <TodoItem key={`todo-${todo.id}`} todo={todo} />
          )
        : words.NO_TODO_LEFT}
    </ul>
  )
}

export default TodoList
