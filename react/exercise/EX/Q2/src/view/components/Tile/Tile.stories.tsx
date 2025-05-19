import type { Meta, StoryObj } from '@storybook/react';
import Tile from './Tile';

// Define the component metadata
const meta: Meta<typeof Tile> = {
  title: 'components/Tile',
  component: Tile,
  args: {
    text: '0',
    selected: false,
    key: 'key',
  },
};

export default meta;
type Story = StoryObj<typeof Tile>;

export const Default: Story = {};

export const Normal: Story = {
  args: {
    type: 'default',
  },
};

export const Unused: Story = {
  args: {
    type: 'unused',
  },
};

export const Used: Story = {
  args: {
    type: 'used',
  },
};

export const Matched: Story = {
  args: {
    type: 'matched',
  },
};

export const Selected: Story = {
  args: {
    type: 'default',
    selected: true,
  },
};
