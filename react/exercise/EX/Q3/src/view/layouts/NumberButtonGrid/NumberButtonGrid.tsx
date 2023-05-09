import { FC, ReactNode } from 'react';
import styles from './NumberButtonGrid.module.css';

type NumberButtonGridProps = {
  children?: ReactNode;
};

const NumberButtonGrid: FC<NumberButtonGridProps> = (
  props: NumberButtonGridProps
) => {
  const { children } = props;

  return (
    <div className={styles.grid} data-testid="number-button-grid">
      {children}
    </div>
  );
};

export default NumberButtonGrid;
