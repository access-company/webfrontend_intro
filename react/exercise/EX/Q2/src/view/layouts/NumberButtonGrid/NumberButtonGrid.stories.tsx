import type { Meta, StoryObj } from '@storybook/react';
import NumberButtonGrid from './NumberButtonGrid';
import NumberButton from '../../components/NumberButton';

const onPush = (assignedKey: string) => console.log(assignedKey);

const buttons = [...new Array(10)].map((_, index) => (
  <NumberButton assignedKey={`${index}`} text={`${index}`} onPush={onPush} key={index} />
));

const meta: Meta<typeof NumberButtonGrid> = {
  title: 'layouts/NumberButtonGrid',
  component: NumberButtonGrid,
};

export default meta;
type Story = StoryObj<typeof NumberButtonGrid>;

export const Default: Story = {
  render: () => <NumberButtonGrid>{buttons}</NumberButtonGrid>,
};
