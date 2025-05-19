import type { Meta, StoryObj } from '@storybook/react';
import MainGrid from './MainGrid';

const getStyle = (background: string, height: string) => ({
  width: '100%',
  height,
  background,
  fontSize: '0.25rem',
});

const meta: Meta<typeof MainGrid> = {
  title: 'layouts/MainGrid',
  component: MainGrid,
};

export default meta;
type Story = StoryObj<typeof MainGrid>;

export const Default: Story = {
  render: () => (
    <MainGrid>
      <div style={getStyle('red', '1.2rem')}>message</div>
      <div style={getStyle('yellow', '4rem')}>tile</div>
      <div style={getStyle('green', '1rem')}>label</div>
      <div style={getStyle('blue', '1.6rem')}>number</div>
      <div style={getStyle('purple', '.8rem')}>control</div>
    </MainGrid>
  ),
};
