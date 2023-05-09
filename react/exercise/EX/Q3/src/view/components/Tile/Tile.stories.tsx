import React from 'react';
import { ComponentStory } from '@storybook/react';
import Tile from './Tile';

export default {
  title: 'components/Tile',
  component: Tile,
  args: {
    text: '0',
    selected: false,
    key: 'key',
  },
};

const Template: ComponentStory<typeof Tile> = (props) => {
  return <Tile {...props} />;
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

export const Selected = Template.bind({});
Selected.args = {
  ...Normal.args,
  selected: true,
};
