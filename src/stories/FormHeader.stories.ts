import type { Meta, StoryObj } from "@storybook/react"
import { FormHeader } from "@/components/FormHeader"

const meta = {
  title: "Header/FormHeader",
  component: FormHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onSaveClick: { action: "saveButtonClicked" },
    onBackClick: { action: "backButtonClicked" },
  },
} satisfies Meta<typeof FormHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
