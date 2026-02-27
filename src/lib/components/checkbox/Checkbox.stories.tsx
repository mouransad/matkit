import type { Meta, StoryObj } from '@storybook/react-vite';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
    indeterminate: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    label: 'Checkbox',
    color: 'primary',
    size: 'medium',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
    color: 'primary',
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate Checkbox',
    indeterminate: true,
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Checkbox',
    checked: true,
    color: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Checkbox',
    checked: true,
    color: 'tertiary',
  },
};

export const Error: Story = {
  args: {
    label: 'Error Checkbox',
    checked: true,
    color: 'error',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Checkbox',
    size: 'small',
    checked: true,
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Checkbox',
    size: 'medium',
    checked: true,
  },
};

export const Large: Story = {
  args: {
    label: 'Large Checkbox',
    size: 'large',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked',
    disabled: true,
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: true,
    color: 'primary',
  },
};
