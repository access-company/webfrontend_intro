import React from 'react';
import { ComponentStory } from '@storybook/react';
import ControlButtonGrid from './ControlButtonGrid';
import ControlButton from '../../components/ControlButton';

const onPush = () => console.log();

export default {
  title: 'layouts/ControlButtonGrid',
  component: ControlButtonGrid,
};

const Template: ComponentStory<typeof ControlButtonGrid> = () => {
  return (
    <ControlButtonGrid>
      <ControlButton assignedKey={'a'} text={'A'} onPush={onPush} key={'a'} />
      <ControlButton assignedKey={'b'} text={'B'} onPush={onPush} key={'b'} />
      <ControlButton assignedKey={'c'} text={'C'} onPush={onPush} key={'c'} />
    </ControlButtonGrid>
  );
};

export const Default = Template.bind({});
