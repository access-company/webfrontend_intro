import { FC, ReactNode } from 'react';
import styles from './ControlButtonGrid.module.css';

type ControlButtonGridProps = {
  children?: ReactNode;
};

const ControlButtonGrid: FC<ControlButtonGridProps> = (
  props: ControlButtonGridProps
) => {
  const { children } = props;

  return (
    <div className={styles.grid} data-testid="control-button-grid">
      {children}
    </div>
  );
};

export default ControlButtonGrid;
