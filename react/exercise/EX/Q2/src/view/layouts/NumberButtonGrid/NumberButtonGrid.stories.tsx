import React from 'react';
import { ComponentStory } from '@storybook/react';
import NumberButtonGrid from './NumberButtonGrid';
import NumberButton from '../../components/NumberButton';

const onPush = (assignedKey: string) => console.log(assignedKey);

export default {
  title: 'layouts/NumberButtonGrid',
  component: NumberButtonGrid,
};

const buttons = [...new Array(10)].map((_, index) => (
  <NumberButton assignedKey={`${index}`} text={`${index}`} onPush={onPush} />
));

const Template: ComponentStory<typeof NumberButtonGrid> = () => {
  return <NumberButtonGrid>{buttons}</NumberButtonGrid>;
};

export const Default = Template.bind({});
