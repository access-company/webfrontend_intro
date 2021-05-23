import { Type, ColorFilterAction } from '../actions/colorFilter'
import { initialColorFilter, ColorFilter } from '../models/ColorFilter'

const colorFilter = (state: ColorFilter = initialColorFilter, action: ColorFilterAction) => {
  switch (action.type) {
    case Type.SET_COLOR_FILTER:
      return {
        ...state,
        [action.payload.color]: action.payload.checked
      }
    default:
      return state
  }
}

export default colorFilter
