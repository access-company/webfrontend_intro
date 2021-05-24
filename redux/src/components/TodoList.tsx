import { FC, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReactSortable } from "react-sortablejs";

import TodoItem from './TodoItem'
import { sortTodos } from '../actions/todo'
import { getTodosByFilters } from '../selectors/todo'
import { words } from '../constants'
import { Todo } from '../models/Todo'

const TodoList: FC = () => {
  const todos = useSelector(getTodosByFilters)
  const dispatch = useDispatch()
  const sort = useCallback((todos: Todo[]) => dispatch(sortTodos(todos)), [dispatch])
  return (
    <ul className="todo-list">
      <ReactSortable list={todos} setList={sort}>
      {todos && todos.length
        ? todos.map((todo: Todo) =>
            <TodoItem key={`todo-${todo.id}`} todo={todo} />
          )
        : words.NO_TODO_LEFT}
      </ReactSortable>
    </ul>
  )
}

export default TodoList
