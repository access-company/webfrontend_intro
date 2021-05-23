import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { importTodo } from '../actions/todo'
import { words } from '../constants'

const ImportTodo: FC = () => {
  const dispatch = useDispatch()

  const handleImportTodo = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(importTodo())
  }

  return (
    <button className="import-todo" onClick={handleImportTodo}>
      {words.IMPORT_TODO}
    </button>
  )
}

export default ImportTodo
