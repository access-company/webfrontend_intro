import { FC, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/todo'
import { words } from '../constants'

const AddTodo: FC = () => {
  const [input, setInput] = useState<string>('')
  const dispatch = useDispatch()

  const handleChangeInput = useCallback(event => {
    setInput(event.target.value)
  }, [])

  const handleAddTodo = useCallback(() => {
    if (input) {
      dispatch(addTodo(input))
      setInput('')
    }
  }, [dispatch, input])

  return (
    <div>
      <input value={input} onChange={handleChangeInput} />
      <button className="add-todo" onClick={handleAddTodo}>
        {words.ADD_TODO}
      </button>
    </div>
  )
}

export default AddTodo
