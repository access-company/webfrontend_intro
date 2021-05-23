import { ColorFilter } from '../models/ColorFilter'
import { RootState } from '../store'

export const getColorFilter = (state: RootState) =>
  state.colorFilter as ColorFilter
