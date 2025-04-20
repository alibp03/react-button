import React from 'react';
import { Button } from './Button';
import { ArgTypes } from '@storybook/blocks';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Defines the size of the button',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      description: 'Defines the visual style of the button',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'back'],
    },
    children: {
      description: 'Text or element inside the button',
      control: 'text',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
  size: 'small',
  variant: 'primary',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'primary',
  size: 'small',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'secondary',
  size: 'small',
  variant: 'secondary',
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'medium',
  size: 'medium',
  variant: 'primary',
};

export const Large = Template.bind({});
Large.args = {
  children: 'large',
  size: 'large',
  variant: 'primary',
};

export const Back = Template.bind({});
Back.args = {
  children: 'back',
  size: 'small',
  variant: 'back',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'disabled',
  size: 'small',
  variant: 'primary',
};
