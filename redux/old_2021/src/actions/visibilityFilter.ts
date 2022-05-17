import { VisibilityFilter } from '../models/VisibilityFilter'

export const Type = {
  SET_FILTER: 'SET_FILTER',
}

export const setFilter = (filter: keyof typeof VisibilityFilter) => ({
  type: Type.SET_FILTER,
  payload: { filter },
})

export type VisibilityFilterAction =
  ReturnType<typeof setFilter>
