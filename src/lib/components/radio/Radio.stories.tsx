import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio, RadioGroup } from "./index";
import type { RadioGroupProps } from "./types";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
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
      options: ["small", "medium", "large"],
    },
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  args: {
    label: "Radio",
    value: "radio",
    color: "primary",
    checked: true,
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    label: "Radio",
    value: "secondary",
    checked: true,
    color: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    label: "Radio",
    value: "tertiary",
    checked: true,
    color: "tertiary",
  },
};

export const Error: Story = {
  args: {
    label: "Radio",
    value: "error",
    checked: true,
    color: "error",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Radio",
    value: "disabled",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled Checked",
    value: "disabled-checked",
    disabled: true,
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    value: "no-label",
    checked: true,
    color: "primary",
  },
};

// RadioGroup stories
const RadioGroupMeta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
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
      options: ["small", "medium", "large"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

const GroupRenderer = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args}>
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  );
};

export const GroupVertical: StoryObj<typeof RadioGroup> = {
  ...RadioGroupMeta,
  render: GroupRenderer,
  args: {
    name: "vertical-group",
    defaultValue: "option1",
    orientation: "vertical",
  },
};

export const GroupHorizontal: StoryObj<typeof RadioGroup> = {
  ...RadioGroupMeta,
  render: GroupRenderer,
  args: {
    name: "horizontal-group",
    defaultValue: "option2",
    orientation: "horizontal",
  },
};

export const GroupSecondary: StoryObj<typeof RadioGroup> = {
  ...RadioGroupMeta,
  render: GroupRenderer,
  args: {
    name: "size-group",
    defaultValue: "medium",
    color: "secondary",
  },
};

export const GroupDisabled: StoryObj<typeof RadioGroup> = {
  ...RadioGroupMeta,
  render: GroupRenderer,
  args: {
    name: "disabled-group",
    defaultValue: "option1",
    disabled: true,
  },
};
