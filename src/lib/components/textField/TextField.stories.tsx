import type { Meta, StoryObj } from '@storybook/react-vite';
import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['outlined'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    multiline: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
  }
};

export const WithValue: Story = {
  args: {
    label: 'Name',
    defaultValue: 'John Doe',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'We will never share your email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    defaultValue: 'invalid-email',
    error: true,
    errorText: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    defaultValue: 'Cannot edit',
    disabled: true,
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Color',
    color: 'tertiary',
    placeholder: 'Tertiary color',
  },
};

export const Multiline: Story = {
  args: {
    label: 'Message',
    multiline: true,
    rows: 4,
    placeholder: 'Enter your message...',
  },
};

export const MultilineWithValue: Story = {
  args: {
    label: 'Description',
    multiline: true,
    rows: 5,
    defaultValue: 'This is a multi-line text field.\nIt can contain multiple lines of text.\nPerfect for longer content.',
  },
};

export const WithLeadingIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leadingIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
    ),
  },
};

export const WithTrailingIcon: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    trailingIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
      </svg>
    ),
  },
};
