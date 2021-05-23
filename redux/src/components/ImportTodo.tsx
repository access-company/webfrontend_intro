import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { importTodo } from '../actions/todo'
import { words } from '../constants'

const ImportTodo: FC = () => {
  const dispatch = useDispatch()
  const [enabled, setEnabled] = useState<boolean>(true)

  const handleImportTodo = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    Promise.resolve(setEnabled(false))
    .then(() => dispatch(importTodo()))
    .finally(() => setEnabled(true))
  }

  return (
    <button className="import-todo" onClick={handleImportTodo} disabled={!enabled}>
      {words.IMPORT_TODO}
    </button>
  )
}

export default ImportTodo
