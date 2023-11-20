import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/MenuButton"

const meta = {
  title: "MenuButton",
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
  },
}

export const Secondary: Story = {}
