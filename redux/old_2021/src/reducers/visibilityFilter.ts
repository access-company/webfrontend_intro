import { Type, VisibilityFilterAction } from '../actions/visibilityFilter'
import { VisibilityFilter } from '../models/VisibilityFilter'

const visibilityFilter = (state: VisibilityFilter = VisibilityFilter.ALL, action: VisibilityFilterAction) => {
  switch (action.type) {
    case Type.SET_FILTER:
      return action.payload.filter
    default:
      return state
  }
}

export default visibilityFilter
