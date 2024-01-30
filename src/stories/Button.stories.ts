import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/atoms/Button/Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "name" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    label: "Button",
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
    label: "Button",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    label: "Button",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Button",
  },
};

export const Disabled: Story = {
  args: {
    label: "Button",
    disabled: true,
  },
};
