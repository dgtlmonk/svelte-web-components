import type { Meta, StoryObj } from "@storybook/svelte"
import Component from "../AppletHeader.svelte"

// Barcode options
// https://github.com/lindell/JsBarcode/#options

const meta = {
  title: "Example/AppletHeader",
  component: Component,
  tags: ["autodocs"],

  // Controls - https://storybook.js.org/docs/react/essentials/controls
  argTypes: {
    back: { control: "boolean" },
    bg_color: { control: "color" },
    close: { control: "boolean" },
    font_size: { control: "number" },
    icon_color: { control: "color" },
    text_color: { control: "color" },
  },
} satisfies Meta<Component>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Example: Story = {
  args: {
    text: "Issue Card:Classic",
  },
}
