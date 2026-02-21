import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';

// Sample icons for demonstration
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

const AddIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
  </svg>
);

const DeleteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
  </svg>
);

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'standard', 'tonal'],
    },
    widthType: {
      control: 'select',
      options: ['regular', 'narrow', 'wide'],
    },
    shape: {
      control: 'select',
      options: ['round', 'square'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Standard: Story = {
  args: {
    children: <HeartIcon />,
    variant: 'standard',
    size: 'medium',
  },
};

export const Filled: Story = {
  args: {
    children: <HeartIcon />,
    variant: 'filled',
    size: 'medium',
  },
};

export const Outlined: Story = {
  args: {
    children: <SearchIcon />,
    variant: 'outlined',
    size: 'medium',
  },
};

export const Tonal: Story = {
  args: {
    children: <AddIcon />,
    variant: 'tonal',
    size: 'medium',
  },
};

export const XSmall: Story = {
  args: {
    children: <HeartIcon />,
    size: 'xSmall',
    variant: 'filled',
  },
};

export const Small: Story = {
  args: {
    children: <HeartIcon />,
    size: 'small',
    variant: 'filled',
  },
};

export const Medium: Story = {
  args: {
    children: <HeartIcon />,
    size: 'medium',
    variant: 'filled',
  },
};

export const Large: Story = {
  args: {
    children: <HeartIcon />,
    size: 'large',
    variant: 'filled',
  },
};

export const XLarge: Story = {
  args: {
    children: <HeartIcon />,
    size: 'xLarge',
    variant: 'filled',
  },
};

export const Round: Story = {
  args: {
    children: <AddIcon />,
    shape: 'round',
    variant: 'filled',
    size: 'medium',
  },
};

export const Square: Story = {
  args: {
    children: <AddIcon />,
    shape: 'square',
    variant: 'filled',
    size: 'medium',
  },
};

export const Narrow: Story = {
  args: {
    children: <SearchIcon />,
    widthType: 'narrow',
    variant: 'filled',
    size: 'medium',
  },
};

export const Regular: Story = {
  args: {
    children: <SearchIcon />,
    widthType: 'regular',
    variant: 'filled',
    size: 'medium',
  },
};

export const Wide: Story = {
  args: {
    children: <SearchIcon />,
    widthType: 'wide',
    variant: 'filled',
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    children: <DeleteIcon />,
    disabled: true,
    variant: 'filled',
  },
};

export const DisabledOutlined: Story = {
  args: {
    children: <DeleteIcon />,
    disabled: true,
    variant: 'outlined',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton variant="standard">
        <HeartIcon />
      </IconButton>
      <IconButton variant="filled">
        <HeartIcon />
      </IconButton>
      <IconButton variant="outlined">
        <HeartIcon />
      </IconButton>
      <IconButton variant="tonal">
        <HeartIcon />
      </IconButton>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton size="xSmall" variant="filled">
        <HeartIcon />
      </IconButton>
      <IconButton size="small" variant="filled">
        <HeartIcon />
      </IconButton>
      <IconButton size="medium" variant="filled">
        <HeartIcon />
      </IconButton>
      <IconButton size="large" variant="filled">
        <HeartIcon />
      </IconButton>
      <IconButton size="xLarge" variant="filled">
        <HeartIcon />
      </IconButton>
    </div>
  ),
};

export const DifferentIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton variant="filled">
        <HeartIcon />
      </IconButton>
      <IconButton variant="filled">
        <SearchIcon />
      </IconButton>
      <IconButton variant="filled">
        <AddIcon />
      </IconButton>
      <IconButton variant="filled">
        <DeleteIcon />
      </IconButton>
    </div>
  ),
};
