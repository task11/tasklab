import type { Meta, StoryObj } from "@storybook/react";

import Tooltip from "../components/atoms/Tooltip/Tooltip";

const meta = {
  title: "Atoms/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "회원가입부터 로그인까지, 단 30초",
  },
};
