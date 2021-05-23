import ImportTodo from '../components/ImportTodo'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import VisibilityFilters from '../components/VisibilityFilters'
import ColorFilters from '../components/ColorFilters'
import '../styles.css'
import { words } from '../constants'

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>{words.TODO_LIST_TITLE}</h1>
      <ImportTodo />
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
      <ColorFilters />
    </div>
  )
}
