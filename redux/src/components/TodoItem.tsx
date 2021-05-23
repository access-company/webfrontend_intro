import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import cx from 'classnames'

import { toggleTodo, deleteTodo, changeColor } from '../actions/todo'
import { Todo } from '../models/Todo'
import { colors, Color } from '../models/ColorFilter'
import { words } from '../constants'

interface Props {
  todo: Todo
}

const TodoItem: FC<Props> = ({ todo }) => {
  const dispatch = useDispatch()

  const handleChangeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeColor(todo.id, event.target.value as Color))
  }

  const handleDelete = (_event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    dispatch(deleteTodo(todo.id))
  }

  const handleToggle = (_event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    dispatch(toggleTodo(todo.id))
  }

  const textClassName = cx(
    'todo-item__text',
    todo && todo.completed && 'todo-item__text--completed'
  )

  return (
    <li className="todo-item">
      <select
        defaultValue={todo.color}
        onChange={handleChangeColor}
        className={`todo-item__color-select--${todo.color}`.toLowerCase()}
      >
        {
          colors.map(color => (
            <option value={color}>
              {(words.COLOR_FILTERS as any)[color]}
            </option>
        　))
        }
      </select>
      <span onClick={handleDelete}>
        {'❎'}
      </span>
      {' '}
      <span className={textClassName} onClick={handleToggle}>
        {todo && todo.completed ? '✅' : '🔴'}
        {' '}
        {todo.text}
      </span>
      {todo.link
        ? <span>
            {' '}
            <a href={todo.link} rel="noreferrer" target="_blank">
              {todo.link}
            </a>
          </span>
        : null
      }
    </li>
  )
}

export default TodoItem
