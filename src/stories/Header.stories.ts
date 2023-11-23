import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "@/components/Header"

const meta = {
  title: "Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    backButton: { control: "boolean" },
    onMenuClick: { action: "menuButtonClicked" },
    onBackClick: { action: "backButtonClicked" },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    backButton: false,
  },
}

export const WithBackButton: Story = {
  args: {
    backButton: true,
  },
}
