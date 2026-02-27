import type { Meta, StoryObj } from "@storybook/react-vite";
import IconButton from "./IconButton";
import CallIn from "@icons/CallIn";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xSmall", "small", "medium", "large", "xLarge"],
    },
    variant: {
      control: "select",
      options: ["filled", "outlined", "standard", "tonal"],
    },
    widthType: {
      control: "select",
      options: ["regular", "narrow", "wide"],
    },
    shape: {
      control: "select",
      options: ["round", "square"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Standard: Story = {
  args: {
    children: <CallIn />,
    variant: "standard",
    size: "medium",
  },
};

export const Filled: Story = {
  args: {
    children: <CallIn />,
    variant: "filled",
    size: "medium",
  },
};

export const Outlined: Story = {
  args: {
    children: <CallIn />,
    variant: "outlined",
    size: "medium",
  },
};

export const Tonal: Story = {
  args: {
    children: <CallIn />,
    variant: "tonal",
    size: "medium",
  },
};

export const XSmall: Story = {
  args: {
    children: <CallIn />,
    size: "xSmall",
    variant: "filled",
  },
};

export const Small: Story = {
  args: {
    children: <CallIn />,
    size: "small",
    variant: "filled",
  },
};

export const Medium: Story = {
  args: {
    children: <CallIn />,
    size: "medium",
    variant: "filled",
  },
};

export const Large: Story = {
  args: {
    children: <CallIn />,
    size: "large",
    variant: "filled",
  },
};

export const XLarge: Story = {
  args: {
    children: <CallIn />,
    size: "xLarge",
    variant: "filled",
  },
};

export const Round: Story = {
  args: {
    children: <CallIn />,
    shape: "round",
    variant: "filled",
    size: "medium",
  },
};

export const Square: Story = {
  args: {
    children: <CallIn />,
    shape: "square",
    variant: "filled",
    size: "medium",
  },
};

export const Narrow: Story = {
  args: {
    children: <CallIn />,
    widthType: "narrow",
    variant: "filled",
    size: "medium",
  },
};

export const Regular: Story = {
  args: {
    children: <CallIn />,
    widthType: "regular",
    variant: "filled",
    size: "medium",
  },
};

export const Wide: Story = {
  args: {
    children: <CallIn />,
    widthType: "wide",
    variant: "filled",
    size: "medium",
  },
};

export const Disabled: Story = {
  args: {
    children: <CallIn />,
    disabled: true,
    variant: "filled",
  },
};

export const DisabledOutlined: Story = {
  args: {
    children: <CallIn />,
    disabled: true,
    variant: "outlined",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <IconButton variant="standard">
        <CallIn />
      </IconButton>
      <IconButton variant="filled">
        <CallIn />
      </IconButton>
      <IconButton variant="outlined">
        <CallIn />
      </IconButton>
      <IconButton variant="tonal">
        <CallIn />
      </IconButton>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <IconButton size="xSmall" variant="filled">
        <CallIn />
      </IconButton>
      <IconButton size="small" variant="filled">
        <CallIn />
      </IconButton>
      <IconButton size="medium" variant="filled">
        <CallIn />
      </IconButton>
      <IconButton size="large" variant="filled">
        <CallIn />
      </IconButton>
      <IconButton size="xLarge" variant="filled">
        <CallIn />
      </IconButton>
    </div>
  ),
};

export const DifferentIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <IconButton variant="filled">
        <CallIn />
      </IconButton>
      <IconButton variant="filled">
        <CallIn />
      </IconButton>
      <IconButton variant="filled">
        <CallIn />
      </IconButton>
      <IconButton variant="filled">
        <CallIn />
      </IconButton>
    </div>
  ),
};
