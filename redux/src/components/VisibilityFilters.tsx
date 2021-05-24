import React, { FC } from 'react'
import cx from 'classnames'
import { useSelector, useDispatch } from 'react-redux'

import { setVisibilityFilter } from '../actions/visibilityFilter'
import { getVisibilityFilter } from '../selectors/visibilityFilter'
import { words } from '../constants'
import { VisibilityFilter } from '../models/VisibilityFilter'

const VisibilityFilters: FC = () => {
  const selectedVisibilityFilter = useSelector(getVisibilityFilter)
  const dispatch = useDispatch()

  const handleChange = (visibilityFilter: keyof typeof VisibilityFilter) => (_event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    dispatch(setVisibilityFilter(visibilityFilter))
  }

  return (
    <div className="visibility-filters">
      {Object.keys(VisibilityFilter).map(filterKey => {
        const visibilityFilter = (VisibilityFilter as any)[filterKey]

        const className = cx(
          'filter',
          visibilityFilter === selectedVisibilityFilter && 'filter--active'
        )

        return (
          <span
            key={`visibility-filter-${visibilityFilter}`}
            className={className}
            onClick={handleChange(visibilityFilter)}
          >
            {(words.VISIBILITY_FILTERS as any)[filterKey]}
          </span>
        )
      })}
    </div>
  )
}

export default VisibilityFilters
