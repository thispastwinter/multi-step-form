// Switch.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { Switch } from "./Switch"
import { useState } from "react"

const meta: Meta<typeof Switch> = {
  component: Switch,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof Switch>

const SwitchWithState = () => {
  const [currentValue, setCurrentValue] = useState("One")

  return (
    <Switch
      values={["One", "Two"]}
      currentValue={currentValue}
      onToggle={setCurrentValue}
    />
  )
}

export const Default: Story = {
  render: () => <SwitchWithState />,
}
