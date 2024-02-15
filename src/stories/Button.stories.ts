import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/atoms/Button/Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Button",
    disabled: false,
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Kakao: Story = {
  args: {
    variant: "kakao",
    children: "Button",
  },
};

export const Facebook: Story = {
  args: {
    variant: "facebook",
    children: "Button",
  },
};

export const Google: Story = {
  args: {
    variant: "google",
    children: "Button",
  },
};

export const Github: Story = {
  args: {
    variant: "github",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    variant: "primary",
    disabled: true,
  },
};
