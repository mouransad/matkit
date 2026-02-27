import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, AccordionGroup } from "./index";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "error"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: "boolean",
    },
    expanded: {
      control: "boolean",
    },
    defaultExpanded: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  args: {
    header: "Accordion Header",
    children: (
      <div>
        <p>This is the accordion content. It can be expanded or collapsed.</p>
      </div>
    ),
  },
};

export const Secondary: Story = {
  args: {
    header: "Secondary Accordion",
    color: "secondary",
    children: (
      <div>
        <p>This accordion uses the secondary color scheme.</p>
      </div>
    ),
  },
};

export const Error: Story = {
  args: {
    header: "Error Accordion",
    color: "error",
    children: (
      <div>
        <p>This accordion uses the error color.</p>
      </div>
    ),
  },
};

export const WithRichContent: Story = {
  args: {
    header: "Rich Content Accordion",
    defaultExpanded: true,
    children: (
      <div style={{ padding: "8px 0" }}>
        <h4 style={{ margin: "0 0 8px 0" }}>Section Title</h4>
        <p style={{ margin: "0 0 8px 0" }}>
          This accordion contains rich content including:
        </p>
        <ul style={{ margin: "0 0 8px 0", paddingLeft: "20px" }}>
          <li>Bullet points</li>
          <li>Multiple elements</li>
          <li>Formatted text</li>
        </ul>
        <p style={{ margin: 0 }}>And more structured content.</p>
      </div>
    ),
  },
};

export const CustomTransitionDelay: Story = {
  args: {
    header: "Slow Transition",
    transitionDelay: 1000,
    children: (
      <div>
        <p>This accordion has a slower transition animation (1000ms).</p>
      </div>
    ),
  },
};

// AccordionGroup stories
const AccordionGroupMeta: Meta<typeof AccordionGroup> = {
  title: "Components/AccordionGroup",
  component: AccordionGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    exclusive: {
      control: "boolean",
    },
  },
};

type AccordionGroupStory = StoryObj<typeof AccordionGroupMeta>;

export const GroupDefault: AccordionGroupStory = {
  ...AccordionGroupMeta,
  storyName: "Accordion Group",
  render: (args) => (
    <div style={{ width: "500px" }}>
      <AccordionGroup {...args}>
        <Accordion value="panel1" header="Accordion 1">
          <p>Content for the first accordion panel.</p>
        </Accordion>
        <Accordion value="panel2" header="Accordion 2">
          <p>Content for the second accordion panel.</p>
        </Accordion>
        <Accordion value="panel3" header="Accordion 3">
          <p>Content for the third accordion panel.</p>
        </Accordion>
      </AccordionGroup>
    </div>
  ),
};

export const GroupExclusive: AccordionGroupStory = {
  ...AccordionGroupMeta,
  storyName: "Accordion Group Exclusive",
  render: (args) => (
    <div style={{ width: "500px" }}>
      <AccordionGroup {...args}>
        <Accordion value="panel1" header="Panel 1 (Exclusive)">
          <p>Only one panel can be open at a time in exclusive mode.</p>
        </Accordion>
        <Accordion value="panel2" header="Panel 2 (Exclusive)">
          <p>Opening this will close the other panels.</p>
        </Accordion>
        <Accordion value="panel3" header="Panel 3 (Exclusive)">
          <p>This ensures a cleaner, more focused interface.</p>
        </Accordion>
      </AccordionGroup>
    </div>
  ),
  args: {
    exclusive: true,
    defaultExpanded: "panel1",
  },
};

export const GroupWithDefaultExpanded: AccordionGroupStory = {
  ...AccordionGroupMeta,
  storyName: "Accordion Group Default Expanded",
  render: (args) => (
    <div style={{ width: "500px" }}>
      <AccordionGroup {...args}>
        <Accordion value="faq1" header="What is this component?">
          <p>This is an accordion component that can expand and collapse.</p>
        </Accordion>
        <Accordion value="faq2" header="How do I use it?">
          <p>Simply click on the header to expand or collapse the content.</p>
        </Accordion>
        <Accordion value="faq3" header="Can multiple be open?">
          <p>Yes, unless you set exclusive mode to true.</p>
        </Accordion>
      </AccordionGroup>
    </div>
  ),
  args: {
    defaultExpanded: ["faq1", "faq3"],
  },
};

export const GroupWithVariousSizes: AccordionGroupStory = {
  ...AccordionGroupMeta,
  storyName: "Accordion Group With Various Sizes",
  render: (args) => (
    <div style={{ width: "500px" }}>
      <AccordionGroup {...args}>
        <Accordion value="small" header="Small Accordion" size="small">
          <p>This accordion has a small size.</p>
        </Accordion>
        <Accordion value="medium" header="Medium Accordion" size="medium">
          <p>This accordion has a medium size.</p>
        </Accordion>
        <Accordion value="large" header="Large Accordion" size="large">
          <p>This accordion has a large size.</p>
        </Accordion>
      </AccordionGroup>
    </div>
  ),
  args: {
    defaultExpanded: ["small", "medium", "large"],
  },
};
