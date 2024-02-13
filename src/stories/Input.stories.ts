import type { Meta, StoryObj } from "@storybook/react";

import Input from "../components/atoms/Input/Input";

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "name" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "username",
    label: "목표 작성",
    value: "",
    isRequired: false,
    validation: "default",
    isLabelVisible: true,
    placeholder: "test",
  },
};

export const Small: Story = {
  args: {
    name: "username",
    size: "sm",
    label: "목표 작성",
    value: "",
    isLabelVisible: true,
    placeholder: "test",
  },
};

export const Medium: Story = {
  args: {
    name: "username",
    size: "md",
    label: "목표 작성",
    value: "",
    isLabelVisible: true,
    placeholder: "test",
  },
};

export const Large: Story = {
  args: {
    name: "username",
    size: "lg",
    label: "목표 작성",
    value: "",
    isLabelVisible: true,
    placeholder: "test",
  },
};

export const Required: Story = {
  args: {
    name: "username",
    size: "md",
    label: "목표 작성",
    isRequired: true,
    value: "",
    isLabelVisible: true,
    placeholder: "test",
  },
};

export const Error: Story = {
  args: {
    name: "username",
    size: "md",
    label: "목표 작성",
    isRequired: true,
    validation: "error",
    value: "",
    isLabelVisible: true,
    placeholder: "test",
  },
};
