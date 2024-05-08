import React from 'react'
import styles from './App.module.css'

import Calculator from './view/containers/Calculator'

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <Calculator />
    </div>
  )
}

export default App
