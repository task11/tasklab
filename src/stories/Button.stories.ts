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

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Button",
  },
};

export const Kakao: Story = {
  args: {
    variant: "kakao",
    label: "Button",
  },
};

export const Facebook: Story = {
  args: {
    variant: "facebook",
    label: "Button",
  },
};

export const Google: Story = {
  args: {
    variant: "google",
    label: "Button",
  },
};

export const Github: Story = {
  args: {
    variant: "github",
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
    variant: "primary",
    disabled: true,
  },
};
