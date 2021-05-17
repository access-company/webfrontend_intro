import React, { useCallback, useReducer } from 'react'

import styles from './Calculator.module.css'

import Button from '../../components/Button'
import Label from '../../components/Label'

import Parser from '../../helper/FormulaCalculator'

type CalculatorState = {
  value: string
  result: string
  formulaArray: Array<string>
}

const initialState: CalculatorState = { value: '', result: '', formulaArray: [] }

const calculatorReducer = (state: CalculatorState, key: string): CalculatorState => {
  if (/^\d$/.test(key)) {
    // Number
    if (Parser.isTypingNumber(state.value)) {
      if (state.result) {
        return { ...state, value: `${state.value}${key}`, formulaArray: [], result: '' }
      }
      return { ...state, value: `${state.value}${key}` }
    }
  } else if (key === '.') {
    if (Parser.isInteger(state.value)) {
      return { ...state, value: `${state.value}${key}` }
    }
  } else if (/^[-+*/]$/.test(key)) {
    // Opeland
    const previous = [...state.formulaArray].pop()
    if (Parser.isNumber(state.value)) {
      return {
        ...state,
        formulaArray: [...state.formulaArray, state.value, key],
        value: '',
      }
    } else if (previous === ')') {
      return {
        ...state,
        formulaArray: [...state.formulaArray, key],
        value: '',
      }
    } else if (state.result) {
      return {
        ...state,
        formulaArray: [state.result, key],
        result: '',
        value: '',
      }
    } else if (key === '-' && !state.value) {
      // For negative value
      if (state.result) {
        return { ...state, value: `${state.value}${key}`, formulaArray: [], result: '' }
      }
      return { ...state, value: `${state.value}${key}` }
    }
  } else if (/^[()]$/.test(key)) {
    // Brace
    if (key === '(' && !state.value) {
      if (state.result) {
        return { ...state, formulaArray: [key], result: '' }
      }
      return {
        ...state,
        formulaArray: [...state.formulaArray, key],
      }
    } else if (key === ')' && Parser.isClosable(state.formulaArray.join(' ')) && Parser.isNumber(state.value)) {
      return {
        ...state,
        formulaArray: [...state.formulaArray, state.value, key],
        value: '',
      }
    }
  } else if (key === '=') {
    // Calculate
    const array = state.value ? [...state.formulaArray, state.value] : [...state.formulaArray]
    const result = `${Parser.calc(array)}`
    return { formulaArray: [...state.formulaArray, state.value], result, value: '' }
  } else if (key === 'C') {
    // Clear
    return initialState
  }

  return state
}

const Calculator: React.FC = () => {
  const [{ formulaArray, result, value }, dispatch] = useReducer(calculatorReducer, initialState)

  const formula = [...formulaArray, value].join(' ')

  const getLayout = useCallback(
    (column: string, row: string) => ({
      gridColumn: column,
      gridRow: row,
    }),
    []
  )

  return (
    <div className={styles.container}>
      <Label formula={formula} value={value || result || '0'} />
      <div className={styles.buttons}>
        <Button assignedKey="C" onPush={dispatch} style={getLayout('1', '1')} />
        <Button assignedKey="(" onPush={dispatch} style={getLayout('1', '2')} />
        <Button assignedKey=")" onPush={dispatch} style={getLayout('1', '3')} />
        <Button assignedKey="1" onPush={dispatch} style={getLayout('2', '1')} />
        <Button assignedKey="2" onPush={dispatch} style={getLayout('3', '1')} />
        <Button assignedKey="3" onPush={dispatch} style={getLayout('4', '1')} />
        <Button assignedKey="4" onPush={dispatch} style={getLayout('2', '2')} />
        <Button assignedKey="5" onPush={dispatch} style={getLayout('3', '2')} />
        <Button assignedKey="6" onPush={dispatch} style={getLayout('4', '2')} />
        <Button assignedKey="7" onPush={dispatch} style={getLayout('2', '3')} />
        <Button assignedKey="8" onPush={dispatch} style={getLayout('3', '3')} />
        <Button assignedKey="9" onPush={dispatch} style={getLayout('4', '3')} />
        <Button assignedKey="0" onPush={dispatch} style={getLayout('2', '4')} />
        <Button assignedKey="." onPush={dispatch} style={getLayout('3', '4')} />
        <Button assignedKey="=" onPush={dispatch} style={getLayout('4', '4')} />
        <Button assignedKey="+" onPush={dispatch} style={getLayout('5', '4')} />
        <Button assignedKey="-" onPush={dispatch} style={getLayout('5', '3')} />
        <Button assignedKey="*" onPush={dispatch} style={getLayout('5', '2')} />
        <Button assignedKey="/" onPush={dispatch} style={getLayout('5', '1')} />
      </div>
    </div>
  )
}

export default Calculator
