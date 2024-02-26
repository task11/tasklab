import type { Meta, StoryObj } from "@storybook/react";

import FooterLayout from "../components/atoms/FooterLayout/FooterLayout";

const meta = {
  title: "Atoms/FooterLayout",
  component: FooterLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "name" },
  },
} satisfies Meta<typeof FooterLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: ``,
  },
};
