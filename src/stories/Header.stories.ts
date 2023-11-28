import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "@/components/Header"

const meta = {
  title: "Header/BaseHeader",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    hasBackButton: { control: "boolean" },
    onBackClick: { action: "backButtonClicked" },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    hasBackButton: false,
  },
}

export const WithBackButton: Story = {
  args: {
    hasBackButton: true,
  },
}
