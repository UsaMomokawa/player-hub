import type { Meta, StoryObj } from "@storybook/react"
import { List } from "@/components/List"

const meta = {
  title: "List",
  component: List,
  tags: ["autodocs"],
  args: {
    label: "通過シナリオ",
    values: ["hogohoge", "fugafuga", "piyopiyo"],
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
