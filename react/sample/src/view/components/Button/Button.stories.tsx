import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const onPush = (assignedKey: string) => console.log(assignedKey);

export default {
  title: 'components/Button',
  component: Button,
  args: {
    assignedKey: '0',
    text: '0',
    onPush,
  },
} as Meta;

export const Normal: StoryObj<typeof Button> = {};
