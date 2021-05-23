import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/todo'
import { words } from '../constants'

const AddTodo: FC = () => {
  const [input, setInput] = useState<string>('')
  const dispatch = useDispatch()

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleAddTodo = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (input) {
      dispatch(addTodo(input))
      setInput('')
    }
  }

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
