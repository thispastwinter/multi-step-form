// Checkbox.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { Checkbox } from "./Checkbox"

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: (args) => <Checkbox {...args} />,
}
