import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/BackButton"

const meta = {
  title: "Button/BackButton",
  component: Button,
  tags: ["autodocs"],
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
