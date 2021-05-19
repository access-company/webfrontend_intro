import { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { importTodo } from '../actions/todo'
import { words } from '../constants'

const ImportTodo: FC = () => {
  const dispatch = useDispatch()

  const handleImportTodo = useCallback(() => {
    dispatch(importTodo())
  }, [dispatch])

  return (
    <button className="import-todo" onClick={handleImportTodo}>
      {words.IMPORT_TODO}
    </button>
  )
}

export default ImportTodo
