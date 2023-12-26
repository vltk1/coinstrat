import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atomic/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: {
      control: 'text',
      description: 'Overwritten description',
    },
    variant: {
      control: 'select', options: ["text", "outline"]
    },
    color: {
      control: 'select', options: ["primary", "secondary", "success"]
    },
    size: {
      control: 'inline-radio', options: ['small', 'medium', 'large'],
      description: 'Kích thước',
      default: "ok",
    },
    state: {
      control: 'inline-check', options: ['disabled', 'loading'],
      description: 'Kích thước'
    },
  },


} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
    variant: "text",
    color: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: "outline",
    color: "primary",
    size: "medium",
  },
};

