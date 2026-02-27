import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Collapse from "./Collapse";
import Button from "../button/Button";
import type { CollapseProps } from "./types";

const meta: Meta<typeof Collapse> = {
  title: "Components/Collapse",
  component: Collapse,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
    },
    transitionDelay: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Collapse>;

const CollapseRenderer = (args: CollapseProps) => {
  const [open, setOpen] = useState(args.open ?? false);
  return (
    <div style={{ width: "400px" }}>
      <Button onClick={() => setOpen(!open)}>
        {open ? "Hide" : "Show"} Content
      </Button>
      <Collapse {...args} open={open}>
        <div
          style={{ padding: "16px", background: "#f5f5f5", marginTop: "8px" }}
        >
          <p>This is collapsible content.</p>
          <p>Click the button to toggle visibility.</p>
        </div>
      </Collapse>
    </div>
  );
};

export const Default: Story = {
  render: CollapseRenderer,
  storyName: "Collapse",
  args: {
    open: false,
  },
};

export const CustomTransitionDelay: Story = {
  render: CollapseRenderer,
  args: {
    open: false,
    transitionDelay: 800,
  },
};
