import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import ToggleButton from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  title: "Components/ToggleButton",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "tonal", "outline", "elevated"],
    },
    size: {
      control: "select",
      options: ["xSmall", "small", "medium", "large", "xLarge"],
    },
    isSelected: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    round: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const UnselectedFilled: Story = {
  args: {
    children: "Toggle Button",
    isSelected: false,
    variant: "filled",
  },
};

export const SelectedFilled: Story = {
  args: {
    children: "Toggle Button",
    isSelected: true,
    variant: "filled",
  },
};

export const UnselectedTonal: Story = {
  args: {
    children: "Toggle Button",
    isSelected: false,
    variant: "tonal",
  },
};

export const SelectedTonal: Story = {
  args: {
    children: "Toggle Button",
    isSelected: true,
    variant: "tonal",
  },
};

export const UnselectedOutline: Story = {
  args: {
    children: "Toggle Button",
    isSelected: false,
    variant: "outline",
  },
};

export const SelectedOutline: Story = {
  args: {
    children: "Toggle Button",
    isSelected: true,
    variant: "outline",
  },
};

export const UnselectedElevated: Story = {
  args: {
    children: "Toggle Button",
    isSelected: false,
    variant: "elevated",
  },
};

export const SelectedElevated: Story = {
  args: {
    children: "Toggle Button",
    isSelected: true,
    variant: "elevated",
  },
};

export const Interactive: Story = {
  render: function Render(args) {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <ToggleButton
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      >
        {isSelected ? "Selected" : "Unselected"}
      </ToggleButton>
    );
  },
  args: {
    variant: "filled",
  },
};

export const Small: Story = {
  render: function Render(args) {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <ToggleButton
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      >
        Small
      </ToggleButton>
    );
  },
  args: {
    size: "small",
    variant: "filled",
  },
};

export const Large: Story = {
  render: function Render(args) {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <ToggleButton
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      >
        Large
      </ToggleButton>
    );
  },
  args: {
    size: "large",
    variant: "filled",
  },
};

export const Round: Story = {
  render: function Render(args) {
    const [isSelected, setIsSelected] = useState(true);
    return (
      <ToggleButton
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      >
        Round
      </ToggleButton>
    );
  },
  args: {
    round: true,
    variant: "filled",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    isSelected: false,
    disabled: true,
    variant: "filled",
  },
};

export const DisabledSelected: Story = {
  args: {
    children: "Disabled Selected",
    isSelected: true,
    disabled: true,
    variant: "filled",
  },
};

export const WithIcons: Story = {
  render: function Render(args) {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <ToggleButton
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
        startIcon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        }
      >
        Favorite
      </ToggleButton>
    );
  },
  args: {
    variant: "filled",
  },
};

export const ToggleGroup: Story = {
  render: function Render() {
    const [selected, setSelected] = useState<string>("left");

    return (
      <div style={{ display: "flex", gap: "0" }}>
        <ToggleButton
          isSelected={selected === "left"}
          onClick={() => setSelected("left")}
          variant="outline"
          style={{ borderRadius: "4px 0 0 4px" }}
        >
          Left
        </ToggleButton>
        <ToggleButton
          isSelected={selected === "center"}
          onClick={() => setSelected("center")}
          variant="outline"
          style={{ borderRadius: "0", marginLeft: "-1px" }}
        >
          Center
        </ToggleButton>
        <ToggleButton
          isSelected={selected === "right"}
          onClick={() => setSelected("right")}
          variant="outline"
          style={{ borderRadius: "0 4px 4px 0", marginLeft: "-1px" }}
        >
          Right
        </ToggleButton>
      </div>
    );
  },
};

export const MultiSelect: Story = {
  render: function Render() {
    const [selectedOptions, setSelectedOptions] = useState<Set<string>>(
      new Set(["bold"]),
    );

    const toggleOption = (option: string) => {
      const newSelection = new Set(selectedOptions);
      if (newSelection.has(option)) {
        newSelection.delete(option);
      } else {
        newSelection.add(option);
      }
      setSelectedOptions(newSelection);
    };

    return (
      <div style={{ display: "flex", gap: "8px" }}>
        <ToggleButton
          isSelected={selectedOptions.has("bold")}
          onClick={() => toggleOption("bold")}
          variant="tonal"
        >
          Bold
        </ToggleButton>
        <ToggleButton
          isSelected={selectedOptions.has("italic")}
          onClick={() => toggleOption("italic")}
          variant="tonal"
        >
          Italic
        </ToggleButton>
        <ToggleButton
          isSelected={selectedOptions.has("underline")}
          onClick={() => toggleOption("underline")}
          variant="tonal"
        >
          Underline
        </ToggleButton>
      </div>
    );
  },
};

export const AllVariantsComparison: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <ToggleButton isSelected={false} variant="filled">
          Filled Off
        </ToggleButton>
        <ToggleButton isSelected={true} variant="filled">
          Filled On
        </ToggleButton>
      </div>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <ToggleButton isSelected={false} variant="tonal">
          Tonal Off
        </ToggleButton>
        <ToggleButton isSelected={true} variant="tonal">
          Tonal On
        </ToggleButton>
      </div>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <ToggleButton isSelected={false} variant="outline">
          Outline Off
        </ToggleButton>
        <ToggleButton isSelected={true} variant="outline">
          Outline On
        </ToggleButton>
      </div>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <ToggleButton isSelected={false} variant="elevated">
          Elevated Off
        </ToggleButton>
        <ToggleButton isSelected={true} variant="elevated">
          Elevated On
        </ToggleButton>
      </div>
    </div>
  ),
};
