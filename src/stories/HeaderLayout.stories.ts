import type { Meta, StoryObj } from "@storybook/react";

import HeaderLayout from "../components/atoms/HeaderLayout/HeaderLayout";

const meta = {
  title: "Atoms/HeaderLayout",
  component: HeaderLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "name" },
  },
} satisfies Meta<typeof HeaderLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: ``,
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: ``,
  },
};
