// Form.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { Form } from "./Form"
import { Card } from "../Card"

const meta: Meta<typeof Form> = {
  component: Form,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof Form>

export const Default: Story = {
  render: () => (
    <Card className="bg-white md:w-[1000px]">
      <Form />
    </Card>
  ),
}
