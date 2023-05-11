import { FC, ReactNode } from 'react';
import styles from './TileGrid.module.css';

type TileGridProps = {
  children: ReactNode;
};

const TileGrid: FC<TileGridProps> = (props: TileGridProps) => {
  const { children } = props;

  return (
    <div className={styles.grid} data-testid="tile-grid">
      {children}
    </div>
  );
};

export default TileGrid;
