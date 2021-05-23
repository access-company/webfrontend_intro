import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import colorFilter from './colorFilter'

export default combineReducers({
  todos,
  visibilityFilter,
  colorFilter,
})
