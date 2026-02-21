import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from './index';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'error'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  args: {
    label: 'Radio',
    value: 'radio',
    color: 'primary',
    size: 'medium',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Radio',
    value: 'checked',
    checked: true,
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Radio',
    value: 'secondary',
    checked: true,
    color: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Radio',
    value: 'tertiary',
    checked: true,
    color: 'tertiary',
  },
};

export const Error: Story = {
  args: {
    label: 'Error Radio',
    value: 'error',
    checked: true,
    color: 'error',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Radio',
    value: 'small',
    size: 'small',
    checked: true,
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Radio',
    value: 'medium',
    size: 'medium',
    checked: true,
  },
};

export const Large: Story = {
  args: {
    label: 'Large Radio',
    value: 'large',
    size: 'large',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Radio',
    value: 'disabled',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked',
    value: 'disabled-checked',
    disabled: true,
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    value: 'no-label',
    checked: true,
    color: 'primary',
  },
};

// RadioGroup stories
const RadioGroupMeta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'error'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const GroupVertical: StoryObj<typeof RadioGroup> = {
  ...RadioGroupMeta,
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  ),
  args: {
    name: 'vertical-group',
    defaultValue: 'option1',
    orientation: 'vertical',
  },
};

export const GroupHorizontal: StoryObj<typeof RadioGroup> = {
  ...RadioGroupMeta,
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  ),
  args: {
    name: 'horizontal-group',
    defaultValue: 'option2',
    orientation: 'horizontal',
  },
};

export const GroupSecondary: StoryObj<typeof RadioGroup> = {
  ...RadioGroupMeta,
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="small" label="Small" />
      <Radio value="medium" label="Medium" />
      <Radio value="large" label="Large" />
    </RadioGroup>
  ),
  args: {
    name: 'size-group',
    defaultValue: 'medium',
    color: 'secondary',
  },
};

export const GroupDisabled: StoryObj<typeof RadioGroup> = {
  ...RadioGroupMeta,
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  ),
  args: {
    name: 'disabled-group',
    defaultValue: 'option1',
    disabled: true,
  },
};
