import type { Meta, StoryObj } from "@storybook/react";

import HorizontalLine from "../components/atoms/HorizontalLine/HorizontalLine";

const meta = {
  title: "Atoms/HorizontalLine",
  component: HorizontalLine,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HorizontalLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "lg",
    variant: "default",
  },
};

export const Accent: Story = {
  args: {
    size: "lg",
    variant: "accent",
  },
};

export const Disabled: Story = {
  args: {
    size: "lg",
    variant: "disabled",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    variant: "default",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    variant: "default",
  },
};
