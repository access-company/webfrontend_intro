import React from 'react';
import { ComponentStory } from '@storybook/react';
import MainGrid from './MainGrid';

const getStyle = (background: string, height: string) => ({
  width: '100%',
  height,
  background,
  fontSize: '0.25rem',
});

export default {
  title: 'layouts/MainGrid',
  component: MainGrid,
};

const Template: ComponentStory<typeof MainGrid> = () => {
  return (
    <MainGrid>
      <div style={getStyle('red', '1.2rem')}>message</div>
      <div style={getStyle('yellow', '4rem')}>tile</div>
      <div style={getStyle('green', '1rem')}>label</div>
      <div style={getStyle('blue', '1.6rem')}>number</div>
      <div style={getStyle('purple', '.8rem')}>control</div>
    </MainGrid>
  );
};

export const Default = Template.bind({});
