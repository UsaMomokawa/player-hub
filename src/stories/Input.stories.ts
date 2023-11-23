import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "@/components/Input"

const meta = {
  title: "TextInput",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "名前",
    value: "翡翠 玲夢",
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
