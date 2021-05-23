import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setColorFilter } from '../actions/colorFilter'
import { getColorFilter } from '../selectors/colorFilter'
import { words } from '../constants'
import { colors, Color } from '../models/ColorFilter'

const ColorFilters: FC = () => {
  const colorFilters = useSelector(getColorFilter)
  const dispatch = useDispatch()

  const handleChange = (color: Color) => (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setColorFilter(color, event.target.checked))
  }

  return (
    <div className="color-filters">
      {colors.map((color: string) => {
        const checked = colorFilters[color as Color]
        return (
          <div>
            <span className={`color-filter-${color}`.toLowerCase()}>
              {(words.COLOR_FILTERS as any)[color]}
            </span>
            <input type="checkbox" checked={checked} onChange={handleChange(color as Color)} />
          </div>
        )
      })}
    </div>
  )
}

export default ColorFilters
