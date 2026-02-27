import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select, Option, OptionGroup, type SelectProps } from "./index";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    variant: {
      control: "select",
      options: ["outlined"],
    },
    disabled: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const SelectRenderer = (args: SelectProps) => {
  return (
    <Select {...args}>
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  );
};

export const Default: Story = {
  render: SelectRenderer,
  args: {
    label: "Select an option",
    placeholder: "Choose...",
  },
};

export const WithValue: Story = {
  render: SelectRenderer,
  args: {
    label: "Favorite Fruit",
    defaultValue: "banana",
  },
};

export const WithHelperText: Story = {
  render: SelectRenderer,
  args: {
    label: "Country",
    helperText: "Select your country of residence",
    placeholder: "Select a country",
  },
};

export const WithError: Story = {
  render: SelectRenderer,
  args: {
    label: "Required Field",
    error: true,
    errorText: "Please select an option",
  },
};

export const Disabled: Story = {
  render: SelectRenderer,
  args: {
    label: "Disabled Select",
    disabled: true,
    defaultValue: "option2",
  },
};

export const Secondary: Story = {
  render: SelectRenderer,
  args: {
    label: "Secondary Color",
    color: "secondary",
    placeholder: "Choose an option",
  },
};

export const Tertiary: Story = {
  render: SelectRenderer,
  args: {
    label: "Tertiary Color",
    color: "tertiary",
    placeholder: "Choose an option",
  },
};

export const WithGroups: Story = {
  render: (args) => (
    <Select {...args}>
      <OptionGroup label="Fruits">
        <Option value="apple">Apple</Option>
        <Option value="banana">Banana</Option>
        <Option value="orange">Orange</Option>
      </OptionGroup>
      <OptionGroup label="Vegetables">
        <Option value="carrot">Carrot</Option>
        <Option value="broccoli">Broccoli</Option>
        <Option value="spinach">Spinach</Option>
      </OptionGroup>
    </Select>
  ),
  args: {
    label: "Food",
    placeholder: "Select a food item",
  },
};

export const WithDisabledOptions: Story = {
  render: (args) => (
    <Select {...args}>
      <Option value="available1">Available Option 1</Option>
      <Option value="unavailable" disabled>
        Unavailable Option
      </Option>
      <Option value="available2">Available Option 2</Option>
      <Option value="sold-out" disabled>
        Sold Out
      </Option>
      <Option value="available3">Available Option 3</Option>
    </Select>
  ),
  args: {
    label: "Products",
    placeholder: "Select a product",
  },
};

export const WithLeadingIcon: Story = {
  render: SelectRenderer,
  args: {
    label: "Location",
    placeholder: "Select location",
    leadingIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
};
