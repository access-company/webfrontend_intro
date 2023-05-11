import React from 'react';
import { ComponentStory } from '@storybook/react';
import TileGrid from './TileGrid';
import Tile from '../../components/Tile';

export default {
  title: 'layouts/TileGrid',
  component: TileGrid,
};

const getTiles = (col: number, row: number) =>
  [...new Array(col * row)].map((_, index) => <Tile key={`tile-${index}`} />);

const Template: ComponentStory<typeof TileGrid> = () => {
  return <TileGrid>{getTiles(5, 5)}</TileGrid>;
};

export const Default = Template.bind({});
