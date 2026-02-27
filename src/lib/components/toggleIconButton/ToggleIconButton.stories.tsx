import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useState } from "react";
import ToggleIconButton from "./ToggleIconButton";
import CallIn from "@icons/CallIn";
import type { ToggleIconButtonProps } from "./types";

const meta: Meta<typeof ToggleIconButton> = {
  title: "Components/ToggleIconButton",
  component: ToggleIconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "tonal", "outlined", "standard"],
    },
    size: {
      control: "select",
      options: ["xSmall", "small", "medium", "large", "xLarge"],
    },
    shape: {
      control: "select",
      options: ["round", "square"],
    },
    widthType: {
      control: "select",
      options: ["regular", "narrow", "wide"],
    },
    isSelected: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleIconButton>;

const ToggleIconButtonRenderer = (args: ToggleIconButtonProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const switchSelect = useCallback(() => {
    setIsSelected((currentIsSelected) => {
      return !currentIsSelected;
    });
  }, []);

  return (
    <ToggleIconButton
      {...args}
      onClick={switchSelect}
      isSelected={isSelected}
    />
  );
};

export const Filled: Story = {
  render: ToggleIconButtonRenderer,
  args: {
    children: <CallIn />,
    variant: "filled",
  },
};

export const Outlined: Story = {
  render: ToggleIconButtonRenderer,
  args: {
    children: <CallIn />,
    variant: "outlined",
  },
};

export const Tonal: Story = {
  render: ToggleIconButtonRenderer,
  args: {
    children: <CallIn />,
    variant: "tonal",
  },
};

export const Disabled: Story = {
  args: {
    children: <CallIn />,
    isSelected: false,
    disabled: true,
    variant: "filled",
  },
};

export const DisabledSelected: Story = {
  args: {
    children: <CallIn />,
    isSelected: true,
    disabled: true,
    variant: "filled",
  },
};
