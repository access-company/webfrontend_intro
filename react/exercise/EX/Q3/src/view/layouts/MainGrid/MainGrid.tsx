import { FC, ReactChild } from 'react';
import styles from './MainGrid.module.css';

type MainGridProps = {
  children: ReactChild[];
};

// 実はただ Grid 使っているだけなのでコワクナイヨ
const MainGrid: FC<MainGridProps> = (props: MainGridProps) => {
  const { children } = props;

  return (
    <div className={styles.grid} data-testid="main-grid">
      {children}
    </div>
  );
};

export default MainGrid;
