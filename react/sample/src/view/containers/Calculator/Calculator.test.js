import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Calculator from './Calculator';
import Button from '../../components/Button';

describe('Calculator', () => {
  describe('Elements', () => {
    test('should have all "Button"', () => {
      const buttonList = [
        ...[new Array(10)].map((_, index) => `${index}`),
        '+',
        '-',
        '*',
        '/',
        '=',
        '(',
        ')',
        'C',
      ]
      const calculator = render(<Calculator/>)
      const buttons = calculator.getAllByTestId('button')
      buttonList.forEach((buttonText) => {
        const result = buttons.find((button) => button.innerHTML === buttonText)
        expect(result).toBeTruthy()
      })
    })

    test('should have "Label"', () => {
      render(<Calculator/>)
      const labelElement = screen.getByTestId('Label')
      expect(labelElement).toBeInTheDocument()
    })
  });
  describe('dispatch', () => {
    test('should works fine', () => {
      const inputOrder = '7+((30+14*2+8-6)/(9-1)*5)-(7+0.5)='.split('');
      const result = '37'
      const calculator = render(<Calculator/>)
      const buttons = calculator.getAllByTestId('button')
      while(inputOrder.length) {
        const key = inputOrder.shift();
        const element = buttons.find((button) => button.innerHTML === key)
        if (!element) {
          throw new Error(`Could not find "${key}" key`)
        }
        fireEvent.click(element)
      }
      const valueElement = screen.getByTestId('value')
      expect(valueElement).toHaveTextContent(result)
    })
  });
})