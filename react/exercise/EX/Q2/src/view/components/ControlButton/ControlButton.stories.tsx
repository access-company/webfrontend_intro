import React from 'react';
import { ComponentStory } from '@storybook/react';
import NumberButton from './ControlButton';

const onPush = () => {};

export default {
  title: 'components/ControlButton',
  component: NumberButton,
  args: {
    text: 'Push',
    onPush,
    key: 'key',
  },
};

const Template: ComponentStory<typeof NumberButton> = (props) => {
  return <NumberButton {...props} />;
};

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
