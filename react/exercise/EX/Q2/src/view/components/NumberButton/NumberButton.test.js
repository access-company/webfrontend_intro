import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NumberButton from './NumberButton';

describe('NumberButton', () => {
  test('should show assginedKey as innerHTML', () => {
    const assignedKey = '0';
    const onPushMock = jest.fn();
    render(<NumberButton assignedKey={assignedKey} onPush={onPushMock} />);
    const element = screen.getByTestId('number-button');
    expect(element).toHaveTextContent('0');
  });
  test('should show text as innerHTML when set "text" value', () => {
    const assignedKey = '0';
    const text = '1';
    const onPushMock = jest.fn();
    render(<NumberButton assignedKey={assignedKey} text={text} onPush={onPushMock} />);
    const element = screen.getByTestId('number-button');
    expect(element).toHaveTextContent(text);
  });
  test('should call onPush callback when clicked element', () => {
    const assignedKey = '0';
    const onPushMock = jest.fn();
    render(<NumberButton assignedKey={assignedKey} onPush={onPushMock} />);
    const element = screen.getByTestId('number-button');
    fireEvent.click(element);
    expect(onPushMock).toHaveBeenCalled();
  });
  test('should call onPush callback when pressed key', () => {
    const assignedKey = '0';
    const onPushMock = jest.fn();
    render(<NumberButton assignedKey={assignedKey} onPush={onPushMock} />);
    const element = screen.getByTestId('number-button');
    fireEvent.keyDown(window, { key: assignedKey, code: assignedKey });
    expect(onPushMock).toHaveBeenCalledTimes(1);
    fireEvent.keyUp(window, { key: assignedKey, code: assignedKey });
    expect(onPushMock).toHaveBeenCalledTimes(1);
  });
  test('should change className when fired onKeyDown/onKeyUp', () => {
    const assignedKey = '0';
    const onPushMock = jest.fn();
    render(<NumberButton assignedKey={assignedKey} onPush={onPushMock} />);
    const element = screen.getByTestId('number-button');
    fireEvent.keyDown(window, { key: assignedKey, code: assignedKey });
    expect(element.className.trimEnd()).toBe('button default pressed');
    fireEvent.keyUp(window, { key: assignedKey, code: assignedKey });
    expect(element.className.trimEnd()).toBe('button default');
  });

  test('should use className "default" if type is set to "default"', () => {
    const assignedKey = '0';
    const type = 'default';
    const onPushMock = jest.fn();
    render(<NumberButton assignedKey={assignedKey} onPush={onPushMock} type={type} />);
    const element = screen.getByTestId('number-button');
    fireEvent.keyDown(window, { key: assignedKey, code: assignedKey });
    expect(element.className.trimEnd()).toBe('button default pressed');
    fireEvent.keyUp(window, { key: assignedKey, code: assignedKey });
    expect(element.className.trimEnd()).toBe('button default');
  });

  test('should use className "dark" if type is set to "unused"', () => {
    const assignedKey = '0';
    const type = 'unused';
    const onPushMock = jest.fn();
    render(<NumberButton assignedKey={assignedKey} onPush={onPushMock} type={type} />);
    const element = screen.getByTestId('number-button');
    fireEvent.keyDown(window, { key: assignedKey, code: assignedKey });
    expect(element.className.trimEnd()).toBe('button dark pressed');
    fireEvent.keyUp(window, { key: assignedKey, code: assignedKey });
    expect(element.className.trimEnd()).toBe('button dark');
  });

  test('should use className "yellow" if type is set to "used"', () => {
    const assignedKey = '0';
    const type = 'used';
    const onPushMock = jest.fn();
    render(<NumberButton assignedKey={assignedKey} onPush={onPushMock} type={type} />);
    const element = screen.getByTestId('number-button');
    fireEvent.keyDown(window, { key: assignedKey, code: assignedKey });
    expect(element.className.trimEnd()).toBe('button yellow pressed');
    fireEvent.keyUp(window, { key: assignedKey, code: assignedKey });
    expect(element.className.trimEnd()).toBe('button yellow');
  });

  test('should use className "green" if type is set to "matched"', () => {
    const assignedKey = '0';
    const type = 'matched';
    const onPushMock = jest.fn();
    render(<NumberButton assignedKey={assignedKey} onPush={onPushMock} type={type} />);
    const element = screen.getByTestId('number-button');
    fireEvent.keyDown(window, { key: assignedKey, code: assignedKey });
    expect(element.className.trimEnd()).toBe('button green pressed');
    fireEvent.keyUp(window, { key: assignedKey, code: assignedKey });
    expect(element.className.trimEnd()).toBe('button green');
  });

  test('should use className "disabled" if "disabled" is true', () => {
    const assignedKey = '0';
    const type = 'default';
    const onPushMock = jest.fn();
    render(<NumberButton assignedKey={assignedKey} onPush={onPushMock} type={type} disabled />);
    const element = screen.getByTestId('number-button');
    expect(element.className.trimEnd()).toBe('button disabled');
  });
});
