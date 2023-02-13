import type { Meta, StoryObj } from '@storybook/svelte';
import Tpl from '../Template.svelte';


// Barcode options
// https://github.com/lindell/JsBarcode/#options

const meta = {
  title: 'Example/component-name',
  component: Tpl,
  tags: ['autodocs'],

  // Controls - https://storybook.js.org/docs/react/essentials/controls
  argTypes: {
    label: { control: 'text' },
  },
} satisfies Meta<Tpl>;


export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Example: Story = {
  args: {
    label: 'Template test'
  },
};

