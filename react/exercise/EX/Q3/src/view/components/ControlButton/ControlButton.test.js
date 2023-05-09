import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ControlButton from './ControlButton';

describe('ControlButton', () => {
  test('should show assginedKey as innerHTML', () => {
    const assignedKey = '0';
    const onPushMock = jest.fn();
    render(<ControlButton assignedKey={assignedKey} onPush={onPushMock} />);
    const element = screen.getByTestId('control-button');
    expect(element).toHaveTextContent('0');
  });

  test('should show text as innerHTML when set "text" value', () => {
    const assignedKey = '0';
    const text = '1';
    const onPushMock = jest.fn();
    render(
      <ControlButton
        assignedKey={assignedKey}
        text={text}
        onPush={onPushMock}
      />
    );
    const element = screen.getByTestId('control-button');
    expect(element).toHaveTextContent(text);
  });
  test('should call onPush callback when clicked element', () => {
    const assignedKey = '0';
    const onPushMock = jest.fn();
    render(<ControlButton assignedKey={assignedKey} onPush={onPushMock} />);
    const element = screen.getByTestId('control-button');
    fireEvent.click(element);
    expect(onPushMock).toHaveBeenCalled();
  });
  test('should call onPush callback when pressed key', () => {
    const assignedKey = '0';
    const onPushMock = jest.fn();
    render(<ControlButton assignedKey={assignedKey} onPush={onPushMock} />);
    const element = screen.getByTestId('control-button');
    fireEvent.keyDown(window, { key: assignedKey, code: assignedKey });
    expect(onPushMock).toHaveBeenCalledTimes(1);
    fireEvent.keyUp(window, { key: assignedKey, code: assignedKey });
    expect(onPushMock).toHaveBeenCalledTimes(1);
  });
  test('should change className when fired onKeyDown/onKeyUp', () => {
    const assignedKey = '0';
    const onPushMock = jest.fn();
    render(<ControlButton assignedKey={assignedKey} onPush={onPushMock} />);
    const element = screen.getByTestId('control-button');
    fireEvent.keyDown(window, { key: assignedKey, code: assignedKey });
    expect(element.className.trimEnd()).toBe('button default pressed');
    fireEvent.keyUp(window, { key: assignedKey, code: assignedKey });
    expect(element.className.trimEnd()).toBe('button default');
  });

  test('should use className "default" if type is set to "default"', () => {
    const assignedKey = '0';
    const type = 'default';
    const onPushMock = jest.fn();
    render(
      <ControlButton
        assignedKey={assignedKey}
        onPush={onPushMock}
        type={type}
      />
    );
    const element = screen.getByTestId('control-button');
    fireEvent.keyDown(window, { key: assignedKey, code: assignedKey });
    expect(element.className.trimEnd()).toBe('button default pressed');
    fireEvent.keyUp(window, { key: assignedKey, code: assignedKey });
    expect(element.className.trimEnd()).toBe('button default');
  });

  test('should use className "disabled" if "disabled" is true', () => {
    const assignedKey = '0';
    const type = 'default';
    const onPushMock = jest.fn();
    render(
      <ControlButton
        assignedKey={assignedKey}
        onPush={onPushMock}
        type={type}
        disabled
      />
    );
    const element = screen.getByTestId('control-button');
    expect(element.className.trimEnd()).toBe('button disabled');
  });
});
