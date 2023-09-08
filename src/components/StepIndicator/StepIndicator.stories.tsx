// StepIndicator.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { StepIndicator } from "./StepIndicator"
import { StepIndicatorMobile } from "./StepIndicatorMobile"

const meta: Meta<typeof StepIndicator> = {
  component: StepIndicator,
}

export default meta
type Story = StoryObj<typeof StepIndicator>

export const DesktopStepIndicator: Story = {
  render: () => (
    <div className="flex w-1/6 h-[50vh]">
      <StepIndicator />
    </div>
  ),
}

export const MobileStepIndicator: Story = {
  render: () => <StepIndicatorMobile />,
}

MobileStepIndicator.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
}
