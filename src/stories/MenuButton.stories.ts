import type { Meta, StoryObj } from "@storybook/react"
import { MenuButton } from "@/components/MenuButton"

const meta = {
  title: "Button/MenuButton",
  component: MenuButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "clicked" },
    primary: { control: "boolean" },
  },
} satisfies Meta<typeof MenuButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
  },
}

export const Secondary: Story = {}
