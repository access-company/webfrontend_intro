import { FC, memo } from 'react';

import styles from './Tile.module.css';

type TileProps = {
  key: string;
  text?: string;
  type?: MatchType;
  selected?: boolean;
};

const getClassName = (type?: MatchType): string => {
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

const Tile: FC<TileProps> = memo(function Tile(props) {
  const { text, type, selected } = props;

  const className = `${styles.tile} ${getClassName(type)} ${selected ? styles.selected : ''}`;

  return (
    <div className={className} data-testid="tile">
      {text || ''}
    </div>
  );
});

export default Tile;
