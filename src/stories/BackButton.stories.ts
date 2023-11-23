import type { Meta, StoryObj } from "@storybook/react"
import { BackButton } from "@/components/BackButton"

const meta = {
  title: "Button/BackButton",
  component: BackButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "clicked" },
    primary: { control: "boolean" },
  },
} satisfies Meta<typeof BackButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
  },
}

export const Secondary: Story = {}
