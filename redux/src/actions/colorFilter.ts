import { Color } from '../models/ColorFilter'

export const Type = {
  SET_COLOR_FILTER: 'SET_COLOR_FILTER',
}

export const setColorFilter = (color: Color, checked: boolean) => ({
  type: Type.SET_COLOR_FILTER,
  payload: { color, checked },
})

export type ColorFilterAction =
  ReturnType<typeof setColorFilter>
