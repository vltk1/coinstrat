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
    variant: {
      control: 'select', options: ["primary", "ghost", "link", "outline"],
      description: 'Kiểu mẫu',
    },
    color: {
      control: 'select', options: [
        "red", "orange", "green", "cyan", "blue", "violet", "dark", "light"
      ],
      description: 'Màu sắc',
    },
    size: {
      control: 'inline-radio', options: ['xs', 'sm', 'md', "lg"],
      description: 'Kích thước',
    },
    rounded: {
      control: 'inline-radio', options: ['md', "lg", "full"],
      description: 'Kích thước',
    }
  },


} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
    color: "blue",
    rounded: "lg",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
  },
};

