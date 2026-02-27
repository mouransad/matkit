import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "error"],
    },
    size: {
      control: "select",
      options: ["xSmall", "small", "medium", "large", "xLarge"],
    },
    variant: {
      control: "select",
      options: ["filled", "tonal", "outlined", "elevated", "text"],
    },
    round: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    color: "primary",
    variant: "filled",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    color: "secondary",
    variant: "filled",
    size: "medium",
  },
};

export const Outlined: Story = {
  args: {
    children: "Button",
    color: "primary",
    variant: "outlined",
    size: "medium",
  },
};

export const Tonal: Story = {
  args: {
    children: "Button",
    color: "primary",
    variant: "tonal",
    size: "medium",
  },
};

export const Elevated: Story = {
  args: {
    children: "Button",
    color: "primary",
    variant: "elevated",
    size: "medium",
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    color: "primary",
    variant: "text",
    size: "medium",
  },
};

export const Round: Story = {
  args: {
    children: "Round",
    round: true,
    color: "primary",
    variant: "filled",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    color: "primary",
    variant: "filled",
    disabled: true,
  },
};
