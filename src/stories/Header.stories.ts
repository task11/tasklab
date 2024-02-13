import type { Meta, StoryObj } from "@storybook/react";

import Header from "../components/atoms/Header/Header";

const meta = {
  title: "Atoms/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "name" },
  },
} satisfies Meta<typeof Header>;

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
