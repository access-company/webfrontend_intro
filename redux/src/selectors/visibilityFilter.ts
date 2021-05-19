import { VisibilityFilter } from '../models/VisibilityFilter'
import { RootState } from '../store'

export const getVisibilityFilter = (store: RootState) =>
  store.visibilityFilter as keyof typeof VisibilityFilter
