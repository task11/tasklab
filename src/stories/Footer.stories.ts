import type { Meta, StoryObj } from "@storybook/react";

import Footer from "../components/atoms/Footer/Footer";

const meta = {
  title: "Atoms/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "name" },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: ``,
  },
};
