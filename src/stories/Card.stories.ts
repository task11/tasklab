import type { Meta, StoryObj } from "@storybook/react";

import Card from "../components/atoms/Card/Card";

const meta = {
  title: "Atoms/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "name" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: ``,
  },
};

export const Disabled: Story = {
  args: {
    variant: "disabled",
    children: ``,
  },
};

export const Sekeleton: Story = {
  args: {
    variant: "skeleton",
    children: ``,
  },
};
