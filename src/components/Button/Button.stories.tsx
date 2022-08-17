import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'ui/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  primary: true,
  label: 'Default Button',
  size: 'medium',
  block: false,
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  primary: true,
  label: 'Outline Button',
  size: 'medium',
  typeBtn: 'outline'
};

export const ExtraSmallButton = Template.bind({});
ExtraSmallButton.args = {
  primary: true,
  label: 'Outline Button',
  size: 'extra-small'
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  primary: true,
  label: 'Outline Button',
  size: 'small'
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  primary: true,
  label: 'Outline Button',
  size: 'medium'
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  primary: true,
  label: 'Outline Button',
  size: 'large'
};

export const ExtraLargeeButton = Template.bind({});
ExtraLargeeButton.args = {
  primary: true,
  label: 'Outline Button',
  size: 'extra-large'
};