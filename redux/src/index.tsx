import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import TodoApp from './pages/TodoApp'

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
