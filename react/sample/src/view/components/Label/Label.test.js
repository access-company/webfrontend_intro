import React from 'react'
import { render, screen } from '@testing-library/react'
import Label from './Label'

describe('Label', () => {
  test('should show formula and value', () => {
    const formula = '1 + 1'
    const value = '2'
    render(<Label formula={formula} value={value} />)
    const formulaElement = screen.getByTestId('formula')
    expect(formulaElement).toHaveTextContent(formula)
    const valueElement = screen.getByTestId('value')
    expect(valueElement).toHaveTextContent(value)
  })
})
