import React from 'react';
import { ComponentStory } from '@storybook/react';
import Main from './Main';

export default {
  title: 'containers/Main',
  component: Main,
};

const Template: ComponentStory<typeof Main> = (props) => {
  return <Main {...props} />;
};

export const Default = Template.bind({});
