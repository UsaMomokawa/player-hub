import type { Meta, StoryObj } from "@storybook/react"
import { Display } from "@/components/Display"

const meta = {
  title: "Display",
  component: Display,
  tags: ["autodocs"],
  args: {
    name: "翡翠 玲夢",
    furigana: "ひすい れむ",
    imgSrc: "/bio-portrait.png",
  },
  parameters: {
    layout: "page",
  },
} satisfies Meta<typeof Display>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
