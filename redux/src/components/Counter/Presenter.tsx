import React from 'react';
import styles from './style.module.css';

interface Props {
  states: {
    count: number
    incrementAmount: number
  }
  actions: {
    handleDecrement: () => void
    handleIncrement: () => void
    handleIncrementByAmount: () => void
    handleIncrementAsync: () => void
    handleIncrementIfOdd: () => void
    handleSetIncrementAmount: (incrementAmount: number) => void
  }
}

export function Presenter(props: Props) {
  const {
    states: {
      count,
      incrementAmount,
    },
    actions: {
      handleDecrement,
      handleIncrement,
      handleIncrementByAmount,
      handleIncrementAsync,
      handleIncrementIfOdd,
      handleSetIncrementAmount,
    }
  } = props
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => handleDecrement()}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => handleIncrement()}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => handleSetIncrementAmount(Number(e.target.value) || 0)}
        />
        <button
          className={styles.button}
          onClick={() => handleIncrementByAmount()}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => handleIncrementAsync()}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => handleIncrementIfOdd()}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
