import type { Meta, StoryObj } from '@storybook/svelte';
import Card from '../MembershipCard.svelte';

const meta = {
  title: 'Example/MembershipCard',
  component: Card,
  tags: ['autodocs'],

  // Controls - https://storybook.js.org/docs/react/essentials/controls
  argTypes: {
   src: { control: 'text' },
   borderRadius: { control: { type: 'number'} },
  },
} satisfies Meta<Card>;


export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Example: Story = {
  args: {
    src: 'https://149367133.v2.pressablecdn.com/wp-content/uploads/2020/07/Her-GadgetMatch-Starbucks-Rewards-03.jpg',
    borderRadius: 16,
  }
};

