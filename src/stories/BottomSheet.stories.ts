import type { Meta, StoryObj } from "@storybook/react";

import BottomSheet from "../components/atoms/BottomSheet/BottomSheet";

const meta = {
  title: "Atoms/BottomSheet",
  component: BottomSheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "",
  },
};
