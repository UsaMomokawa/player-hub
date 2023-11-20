import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/Button"

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
}

export const Secondary: Story = {
  args: {
    label: "Button",
  },
}

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
}

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
}
