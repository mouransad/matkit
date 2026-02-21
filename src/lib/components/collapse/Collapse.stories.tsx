import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Collapse from "./Collapse";
import Button from "../button/Button";

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

export const Default: Story = {
  render: function Render(args) {
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
  },
  args: {
    open: false,
  },
};

export const Open: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(args.open ?? true);
    return (
      <div style={{ width: "400px" }}>
        <Button onClick={() => setOpen(!open)}>
          {open ? "Hide" : "Show"} Content
        </Button>
        <Collapse {...args} open={open}>
          <div
            style={{ padding: "16px", background: "#f5f5f5", marginTop: "8px" }}
          >
            <h3 style={{ margin: "0 0 8px 0" }}>Expanded Content</h3>
            <p>This collapse is open by default.</p>
          </div>
        </Collapse>
      </div>
    );
  },
  args: {
    open: true,
  },
};

export const WithRichContent: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ width: "500px" }}>
        <Button onClick={() => setOpen(!open)}>Toggle Details</Button>
        <Collapse {...args} open={open}>
          <div
            style={{ padding: "16px", background: "#f5f5f5", marginTop: "8px" }}
          >
            <h3 style={{ margin: "0 0 12px 0" }}>Product Details</h3>
            <h4 style={{ margin: "0 0 8px 0" }}>Features:</h4>
            <ul style={{ margin: "0 0 12px 0", paddingLeft: "20px" }}>
              <li>High-quality materials</li>
              <li>Durable construction</li>
              <li>Modern design</li>
              <li>Easy to use</li>
            </ul>
            <h4 style={{ margin: "0 0 8px 0" }}>Specifications:</h4>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td
                    style={{ padding: "4px", borderBottom: "1px solid #ddd" }}
                  >
                    Weight
                  </td>
                  <td
                    style={{ padding: "4px", borderBottom: "1px solid #ddd" }}
                  >
                    2.5 kg
                  </td>
                </tr>
                <tr>
                  <td
                    style={{ padding: "4px", borderBottom: "1px solid #ddd" }}
                  >
                    Dimensions
                  </td>
                  <td
                    style={{ padding: "4px", borderBottom: "1px solid #ddd" }}
                  >
                    30x20x15 cm
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "4px" }}>Color</td>
                  <td style={{ padding: "4px" }}>Black</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Collapse>
      </div>
    );
  },
  args: {
    open: false,
  },
};

export const FastTransition: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ width: "400px" }}>
        <Button onClick={() => setOpen(!open)}>Fast Toggle</Button>
        <Collapse {...args} open={open}>
          <div
            style={{ padding: "16px", background: "#f5f5f5", marginTop: "8px" }}
          >
            <p>This collapse has a fast transition (150ms).</p>
          </div>
        </Collapse>
      </div>
    );
  },
  args: {
    open: false,
    transitionDelay: 150,
  },
};

export const SlowTransition: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ width: "400px" }}>
        <Button onClick={() => setOpen(!open)}>Slow Toggle</Button>
        <Collapse {...args} open={open}>
          <div
            style={{ padding: "16px", background: "#f5f5f5", marginTop: "8px" }}
          >
            <p>This collapse has a slow transition (800ms).</p>
          </div>
        </Collapse>
      </div>
    );
  },
  args: {
    open: false,
    transitionDelay: 800,
  },
};

export const MultipleCollapses: Story = {
  render: function Render(args) {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return (
      <div style={{ width: "500px" }}>
        <div style={{ marginBottom: "16px" }}>
          <Button
            onClick={() => setOpen1(!open1)}
            style={{ marginRight: "8px" }}
          >
            Section 1
          </Button>
          <Collapse open={open1} transitionDelay={args.transitionDelay}>
            <div
              style={{
                padding: "16px",
                background: "#e3f2fd",
                marginTop: "8px",
                marginBottom: "8px",
              }}
            >
              <p>Content for section 1</p>
            </div>
          </Collapse>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <Button
            onClick={() => setOpen2(!open2)}
            style={{ marginRight: "8px" }}
          >
            Section 2
          </Button>
          <Collapse open={open2} transitionDelay={args.transitionDelay}>
            <div
              style={{
                padding: "16px",
                background: "#fff3e0",
                marginTop: "8px",
                marginBottom: "8px",
              }}
            >
              <p>Content for section 2</p>
            </div>
          </Collapse>
        </div>

        <div>
          <Button onClick={() => setOpen3(!open3)}>Section 3</Button>
          <Collapse open={open3} transitionDelay={args.transitionDelay}>
            <div
              style={{
                padding: "16px",
                background: "#f3e5f5",
                marginTop: "8px",
              }}
            >
              <p>Content for section 3</p>
            </div>
          </Collapse>
        </div>
      </div>
    );
  },
  args: {
    transitionDelay: 300,
  },
};
