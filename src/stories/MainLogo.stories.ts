import type { Meta, StoryObj } from "@storybook/react";

import MainLogo from "../components/atoms/MainLogo/MainLogo";

const meta = {
  title: "Atoms/MainLogo",
  component: MainLogo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MainLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 300,
  },
};

export const lg: Story = {
  args: {
    width: 340,
  },
};
