import { VisibilityFilter } from '../models/VisibilityFilter'
import { RootState } from '../store'

export const getVisibilityFilter = (state: RootState) =>
  state.visibilityFilter as keyof typeof VisibilityFilter
