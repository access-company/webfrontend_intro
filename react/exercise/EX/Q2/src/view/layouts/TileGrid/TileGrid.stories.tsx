import type { Meta, StoryObj } from '@storybook/react';
import TileGrid from './TileGrid';
import Tile from '../../components/Tile';

const getTiles = (col: number, row: number) =>
  [...new Array(col * row)].map((_, index) => <Tile key={`tile-${index}`} />);

const meta: Meta<typeof TileGrid> = {
  title: 'layouts/TileGrid',
  component: TileGrid,
};

export default meta;
type Story = StoryObj<typeof TileGrid>;

export const Default: Story = {
  render: () => <TileGrid>{getTiles(5, 5)}</TileGrid>,
};
