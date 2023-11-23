import type { Meta, StoryObj } from "@storybook/react"
import { Table } from "@/components/ProfileTable"

const meta = {
  title: "ProfileTable",
  component: Table,
  tags: ["autodocs"],
  args: {
    age: 20,
    birthday: {
      month: 2,
      day: 11,
    },
    height: 180,
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Empty: Story = {
  args: {
    age: undefined,
    birthday: undefined,
    height: undefined,
  },
}

export const WithCustomRows: Story = {
  args: {
    custom: [
      {
        key: "好きなもの",
        value: "勉強、睡眠",
      },
      {
        key: "苦手なもの",
        value: "運動",
      },
    ],
  },
}
