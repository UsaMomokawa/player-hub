import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/Button"

const meta = {
  title: "Button/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Button",
  },
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "clicked" },
    primary: { control: "boolean" },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
  },
}

export const Secondary: Story = {}

export const Large: Story = {
  args: {
    size: "large",
  },
}

export const Small: Story = {
  args: {
    size: "small",
  },
}
