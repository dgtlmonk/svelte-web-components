import type { Meta, StoryObj } from '@storybook/svelte';

import Component from '../StyleViaPropsButton.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: 'Example/StyleViaPropsComponent',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    bg_color: { control: 'color' },
    color: { control: 'color' },
    label: { control: 'text' },

  },
} satisfies Meta<Component>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Example: Story = {
  args: {
    label: 'Click Me',
    bg_color: '#377cd7',
    color: 'white'
  },
};

