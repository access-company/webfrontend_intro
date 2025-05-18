import type { Meta, StoryObj } from '@storybook/react';
import NumberButton from './NumberButton';

const onPush = (assignedKey: string) => console.log(assignedKey);

const meta: Meta<typeof NumberButton> = {
  title: 'components/NumberButton',
  component: NumberButton,
  args: {
    assignedKey: '0',
    text: '0',
    onPush,
  },
};

export default meta;
type Story = StoryObj<typeof NumberButton>;

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

export const Disabled: Story = {
  args: {
    type: 'default',
    disabled: true,
  },
};
