import type { Meta, StoryObj } from '@storybook/svelte';

import Barcode from './Barcode.svelte';

// Barcode options
// https://github.com/lindell/JsBarcode/#options

const meta = {
  title: 'Example/Barcode',
  component: Barcode,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    elementTag: { control: 'select', options: ['img', 'canvas', 'svg'] },
    options: { control: 'object' },
  },
} satisfies Meta<Barcode>;


export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Basic: Story = {
  args: {
    value: '123456789012',
    elementTag: 'img',
    options:{
      format: 'CODE128',
      width: 2,
      height: 100,
      text: '',
      textAlign: 'center',
      textPosition: 'bottom',
      textMargin: 2,
      fontSize: 20,
      background: '#ffffff',
      lineColor: '#000000',
    }
  },
};

