import { VisibilityFilter } from '../models/VisibilityFilter'

export const Type = {
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
}

export const setVisibilityFilter = (filter: keyof typeof VisibilityFilter) => ({
  type: Type.SET_VISIBILITY_FILTER,
  payload: { filter },
})

export type VisibilityFilterAction =
  ReturnType<typeof setVisibilityFilter>
