import React from 'react'

import styles from './Label.module.css'

type LabelProps = {
  formula: string
  value: string
}

const Label: React.FC<LabelProps> = (props: LabelProps) => {
  const { formula, value } = props
  return (
    <div className={styles.container} data-testid="Label">
      <div className={styles.formula} data-testid="formula">
        {formula}
      </div>
      <div className={styles.value} data-testid="value">
        {value}
      </div>
    </div>
  )
}

export default Label
