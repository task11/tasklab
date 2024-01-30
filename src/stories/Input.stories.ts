import type { Meta, StoryObj } from "@storybook/react";

import Input from "../components/atoms/Input/Input";

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "name" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "username",
    label: "이름",
    value: "",
    isLabelVisible: true,
    placeholder: "asd",
  },
};
