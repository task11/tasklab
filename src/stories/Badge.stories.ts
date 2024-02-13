import type { Meta, StoryObj } from "@storybook/react";

import Badge from "../components/atoms/Badge/Badge";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "default",
    label: "D+60",
  },
};

export const Priamry: Story = {
  args: {
    size: "md",
    variant: "primary",
    label: "D+60",
  },
};
