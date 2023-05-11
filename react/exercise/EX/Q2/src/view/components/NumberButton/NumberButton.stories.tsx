import React from 'react';
import { ComponentStory } from '@storybook/react';
import NumberButton from './NumberButton';

const onPush = (assignedKey: string) => console.log(assignedKey);

export default {
  title: 'components/NumberButton',
  component: NumberButton,
  args: {
    assignedKey: '0',
    text: '0',
    onPush,
  },
};

const Template: ComponentStory<typeof NumberButton> = (props) => {
  return <NumberButton {...props} />;
};

export const Default = Template.bind({});
Default.args = {};

export const Normal = Template.bind({});
Normal.args = {
  ...Normal.args,
  type: 'default',
};

export const Unused = Template.bind({});
Unused.args = {
  ...Unused.args,
  type: 'unused',
};

export const Used = Template.bind({});
Used.args = {
  ...Used.args,
  type: 'used',
};

export const Matched = Template.bind({});
Matched.args = {
  ...Matched.args,
  type: 'matched',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Matched.args,
  type: 'default',
  disabled: true,
};
