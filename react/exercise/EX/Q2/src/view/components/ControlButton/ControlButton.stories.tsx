import type { Meta, StoryObj } from '@storybook/react';
import ControlButton from './ControlButton';

const onPush = () => {};

const meta: Meta<typeof ControlButton> = {
  title: 'components/ControlButton',
  component: ControlButton,
  args: {
    text: 'Push',
    onPush,
  },
};

export default meta;
type Story = StoryObj<typeof ControlButton>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
