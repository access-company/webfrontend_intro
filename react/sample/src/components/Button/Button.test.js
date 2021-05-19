import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  test('should show assginedKey as innerHTML', () => {
    const assignedKey = '0'
    const onPushMock = jest.fn()
    render(<Button assignedKey={assignedKey} onPush={onPushMock}/>)
    const element = screen.getByTestId('button')
    expect(element).toHaveTextContent('0')
  })
  test('should show text as innerHTML when set "text" value', () => {
    const assignedKey = '0'
    const text = '1'
    const onPushMock = jest.fn()
    render(<Button assignedKey={assignedKey} text={text} onPush={onPushMock}/>)
    const element = screen.getByTestId('button')
    expect(element).toHaveTextContent(text)
  })
  test('should call onPush callback when clicked element', () => {
    const assignedKey = '0'
    const onPushMock = jest.fn()
    render(<Button assignedKey={assignedKey} onPush={onPushMock}/>)
    const element = screen.getByTestId('button')
    fireEvent.click(element)
    expect(onPushMock).toHaveBeenCalled()
  })
  test('should call onPush callback when pressed key', () => {
    const assignedKey = '0'
    const onPushMock = jest.fn()
    render(<Button assignedKey={assignedKey} onPush={onPushMock}/>)
    const element = screen.getByTestId('button')
    fireEvent.keyDown(window, { key: assignedKey, code: assignedKey })
    expect(onPushMock).toHaveBeenCalledTimes(1)
    fireEvent.keyUp(window, { key: assignedKey, code: assignedKey })
    expect(onPushMock).toHaveBeenCalledTimes(1)
  })
  test('should change className when fired onKeyDown/onKeyUp', () => {
    const assignedKey = '0'
    const onPushMock = jest.fn()
    render(<Button assignedKey={assignedKey} onPush={onPushMock}/>)
    const element = screen.getByTestId('button')
    fireEvent.keyDown(window, { key: assignedKey, code: assignedKey })
    expect(element.className).toBe('button pressed')
    fireEvent.keyUp(window, { key: assignedKey, code: assignedKey })
    expect(element.className).toBe('button')
  })
})
