import React, { useEffect, useState } from 'react'

import styles from './Button.module.css'

type GridLayout = {
  gridRow: string
  gridColumn: string
}

type ButtonProps = {
  assignedKey: string
  style?: GridLayout
  text?: string
  onPush: (assignedKey: string) => void
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { assignedKey, onPush, style, text } = props
  const [pressed, setPressedValue] = useState<boolean>(false)
  const onClick = (): void => {
    onPush(assignedKey)
  }

  const onKeyDown = (event: KeyboardEvent): void => {
    event.preventDefault()
    if (event.key.toLowerCase() === assignedKey.toLowerCase() && !pressed) {
      onPush(assignedKey)
      setPressedValue(true)
    }
  }

  const onKeyUp = (event: KeyboardEvent): void => {
    event.preventDefault()
    if (event.key.toLowerCase() === assignedKey.toLowerCase()) {
      setPressedValue(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return (): void => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  const className = pressed ? `${styles.button} ${styles.pressed}` : styles.button

  return (
    <div className={className} style={style || {}} onClick={onClick} data-testid="button">
      {text || assignedKey}
    </div>
  )
}

export default Button
