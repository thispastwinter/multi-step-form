// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { Button, Variant } from "./Button"

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: {
      type: "function",
    },
    variant: {
      options: ["outline", "solid", "text"] as Array<Variant>,
      control: { type: "radio" },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => <Button {...args}>Hello Button!</Button>,
}
