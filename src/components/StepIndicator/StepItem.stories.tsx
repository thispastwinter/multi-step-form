// StepItem.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { StepItem } from "./StepItem"

const meta: Meta<typeof StepItem> = {
  component: StepItem,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="bg-blue-ribbon-500 p-4 text-white">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof StepItem>

export const Active: Story = {
  render: () => (
    <StepItem
      {...{ href: "/?step=1", id: "1", subTitle: "Subtitle", title: "Title" }}
    />
  ),
}

export const InActive: Story = {
  render: () => (
    <StepItem
      {...{ href: "/?step=2", id: "2", subTitle: "Subtitle", title: "Title" }}
    />
  ),
}
