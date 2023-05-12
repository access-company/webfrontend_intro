import { FC, useEffect, useState } from 'react';

import styles from './NumberButton.module.css';

type NumberButtonProps = {
  assignedKey: string;
  disabled?: boolean;
  text?: string;
  type?: MatchType;
  onPush: (assignedKey: string) => void;
};

const getClassName = (disabled?: boolean, type?: MatchType): string => {
  if (disabled) {
    return styles.disabled;
  }

  switch (type) {
    case 'unused': {
      return styles.dark;
    }
    case 'used': {
      return styles.yellow;
    }
    case 'matched': {
      return styles.green;
    }
    case 'default':
    default: {
      return styles.default;
    }
  }
};

const NumberButton: FC<NumberButtonProps> = (props) => {
  const { assignedKey, disabled, text, type, onPush } = props;
  const [pressed, setPressedValue] = useState<boolean>(false);

  const onClick = (): void => {
    onPush(assignedKey);
  };

  // キーボードイベント ここから
  // キーを押した時
  const onKeyDown = (event: KeyboardEvent): void => {
    event.preventDefault();
    // 無効化されていない &&
    // キー入力と assingedKey の内容が一致 (念のため小文字比較) &&
    // pressed 状態でないとき
    if (
      !disabled &&
      event.key.toLowerCase() === assignedKey.toLowerCase() &&
      !pressed
    ) {
      onPush(assignedKey);
      setPressedValue(true);
    }
    event.stopPropagation();
  };

  // キーを離す時
  const onKeyUp = (event: KeyboardEvent): void => {
    event.preventDefault();
    // キー入力と assingedKey の内容が一致 (念のため小文字比較)
    if (event.key.toLowerCase() === assignedKey.toLowerCase()) {
      setPressedValue(false);
    }
    event.stopPropagation();
  };

  // イベントリスナーへの登録
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
  }, []);
  // キーボードイベント ここまで

  const className = `${styles.button} ${getClassName(disabled, type)} ${
    pressed ? styles.pressed : ''
  }`;

  return (
    <div
      className={className}
      onClick={onClick}
      data-testid="number-button"
    >
      {text || assignedKey}
    </div>
  );
};

export default NumberButton;
