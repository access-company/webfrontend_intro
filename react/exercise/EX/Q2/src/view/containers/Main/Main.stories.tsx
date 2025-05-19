import type { Meta, StoryObj } from '@storybook/react';
import Main from './Main';

const meta: Meta<typeof Main> = {
  title: 'containers/Main',
  component: Main,
};

export default meta;
type Story = StoryObj<typeof Main>;

export const Default: Story = {};
