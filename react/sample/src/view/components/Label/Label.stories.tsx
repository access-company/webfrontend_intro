import { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

export default {
  title: 'components/Label',
  component: Label,
  args: {
    formula: '1+1',
    value: '2',
  },
} as Meta;

export const Normal: StoryObj<typeof Label> = {};

export const Miso: StoryObj<typeof Label> = {
  args: {
    value: 'Miso soup',
  },
};
