import { FC, ReactNode } from 'react';
import styles from './MainGrid.module.css';

type MainGridProps = {
  children: ReactNode[];
};

// 実はただ Grid 使っているだけなのでコワクナイヨ
const MainGrid: FC<MainGridProps> = (props) => {
  const { children } = props;

  return (
    <div className={styles.grid} data-testid="main-grid">
      {children}
    </div>
  );
};

export default MainGrid;
