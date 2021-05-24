import { FC, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReactSortable } from "react-sortablejs";

import TodoItem from './TodoItem'
import { sortTodos } from '../actions/todo'
import { getTodosByFilters } from '../selectors/todo'
import { getColorFilter } from '../selectors/colorFilter'
import { words } from '../constants'
import { Todo } from '../models/Todo'

const TodoList: FC = () => {
  const todos = useSelector(getTodosByFilters)
  const colorFilter = useSelector(getColorFilter)
  const dispatch = useDispatch()
  const sort = useCallback((todos: Todo[]) => dispatch(sortTodos(todos, colorFilter)), [dispatch, colorFilter])
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? <ReactSortable list={todos} setList={sort}>
            {todos.map((todo: Todo) =>
              <TodoItem key={`todo-${todo.id}`} todo={todo} />
            )}
          </ReactSortable>
        : words.NO_TODO_LEFT
      }
    </ul>
  )
}

export default TodoList
