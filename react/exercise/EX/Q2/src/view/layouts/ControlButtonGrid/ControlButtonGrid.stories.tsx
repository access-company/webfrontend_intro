import type { Meta, StoryObj } from '@storybook/react';
import ControlButtonGrid from './ControlButtonGrid';
import ControlButton from '../../components/ControlButton';

const onPush = () => console.log();

const meta: Meta<typeof ControlButtonGrid> = {
  title: 'layouts/ControlButtonGrid',
  component: ControlButtonGrid,
};

export default meta;
type Story = StoryObj<typeof ControlButtonGrid>;

export const Default: Story = {
  render: () => (
    <ControlButtonGrid>
      <ControlButton assignedKey={'a'} text={'A'} onPush={onPush} key={'a'} />
      <ControlButton assignedKey={'b'} text={'B'} onPush={onPush} key={'b'} />
      <ControlButton assignedKey={'c'} text={'C'} onPush={onPush} key={'c'} />
    </ControlButtonGrid>
  ),
};
