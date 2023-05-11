import { FC, useEffect, useState } from 'react';
import styles from './ControlButton.module.css';

type ControlButtonProps = {
  assignedKey?: string;
  text: string;
  disabled?: boolean;
  onPush: () => void;
};

const ControlButton: FC<ControlButtonProps> = (props) => {
  const { assignedKey, text, disabled, onPush } = props;
  const [pressed, setPressedValue] = useState<boolean>(false);

  const onClick = () => {
    if (!disabled) {
      onPush();
    }
  };

  // キーボードイベント ここから
  // キーを押した時
  const onKeyDown = (event: KeyboardEvent): void => {
    event.preventDefault();
    // 無効化されていない &&
    // キー入力と assingedKey の内容が一致 (念のため小文字比較) &&
    // pressed 状態でないとき
    if (
      assignedKey &&
      !disabled &&
      event.key.toLowerCase() === assignedKey.toLowerCase() &&
      !pressed
    ) {
      onPush();
      setPressedValue(true);
    }
    event.stopPropagation();
  };

  // キーを離す時
  const onKeyUp = (event: KeyboardEvent): void => {
    event.preventDefault();
    // キー入力と assingedKey の内容が一致 (念のため小文字比較)
    if (assignedKey && event.key.toLowerCase() === assignedKey.toLowerCase()) {
      setPressedValue(false);
    }
    event.stopPropagation();
  };

  // イベントリスナーへの登録
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return (): void => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);
  // キーボードイベント ここまで

  const className = `${styles.button} ${
    disabled ? styles.disabled : styles.default
  } ${pressed ? styles.pressed : ''}`;

  return (
    <div
      className={className}
      onClick={onClick}
      data-testid="number-button"
      key={text}
    >
      {text}
    </div>
  );
};

export default ControlButton;
