import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "@/components/Card"

const meta = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    href: "/",
    imgSrc: "/bio-portrait.png",
    label: "翡翠 玲夢",
  },
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
