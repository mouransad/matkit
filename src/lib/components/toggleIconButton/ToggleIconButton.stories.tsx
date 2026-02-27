import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import ToggleIconButton from "./ToggleIconButton";

// Sample icons for demonstration
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const HeartOutlineIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
  </svg>
);

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const StarOutlineIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
  </svg>
);

const BookmarkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
  </svg>
);

const BookmarkOutlineIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
  </svg>
);

const meta: Meta<typeof ToggleIconButton> = {
  title: "Components/ToggleIconButton",
  component: ToggleIconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "tonal", "outlined", "standard"],
    },
    size: {
      control: "select",
      options: ["xSmall", "small", "medium", "large", "xLarge"],
    },
    shape: {
      control: "select",
      options: ["round", "square"],
    },
    widthType: {
      control: "select",
      options: ["regular", "narrow", "wide"],
    },
    isSelected: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleIconButton>;

export const UnselectedStandard: Story = {
  args: {
    children: <HeartOutlineIcon />,
    isSelected: false,
    variant: "standard",
  },
};

export const SelectedStandard: Story = {
  args: {
    children: <HeartIcon />,
    isSelected: true,
    variant: "standard",
  },
};

export const UnselectedFilled: Story = {
  args: {
    children: <HeartOutlineIcon />,
    isSelected: false,
    variant: "filled",
  },
};

export const SelectedFilled: Story = {
  args: {
    children: <HeartIcon />,
    isSelected: true,
    variant: "filled",
  },
};

export const UnselectedOutlined: Story = {
  args: {
    children: <StarOutlineIcon />,
    isSelected: false,
    variant: "outlined",
  },
};

export const SelectedOutlined: Story = {
  args: {
    children: <StarIcon />,
    isSelected: true,
    variant: "outlined",
  },
};

export const UnselectedTonal: Story = {
  args: {
    children: <BookmarkOutlineIcon />,
    isSelected: false,
    variant: "tonal",
  },
};

export const SelectedTonal: Story = {
  args: {
    children: <BookmarkIcon />,
    isSelected: true,
    variant: "tonal",
  },
};

export const InteractiveLike: Story = {
  render: function Render(args) {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <ToggleIconButton
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      >
        {isSelected ? <HeartIcon /> : <HeartOutlineIcon />}
      </ToggleIconButton>
    );
  },
  args: {
    variant: "standard",
    size: "medium",
  },
};

export const InteractiveFavorite: Story = {
  render: function Render(args) {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <ToggleIconButton
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      >
        {isSelected ? <StarIcon /> : <StarOutlineIcon />}
      </ToggleIconButton>
    );
  },
  args: {
    variant: "filled",
    size: "medium",
  },
};

export const InteractiveBookmark: Story = {
  render: function Render(args) {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <ToggleIconButton
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      >
        {isSelected ? <BookmarkIcon /> : <BookmarkOutlineIcon />}
      </ToggleIconButton>
    );
  },
  args: {
    variant: "tonal",
    size: "medium",
  },
};

export const Small: Story = {
  render: function Render(args) {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <ToggleIconButton
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      >
        {isSelected ? <HeartIcon /> : <HeartOutlineIcon />}
      </ToggleIconButton>
    );
  },
  args: {
    size: "small",
    variant: "filled",
  },
};

export const Large: Story = {
  render: function Render(args) {
    const [isSelected, setIsSelected] = useState(true);
    return (
      <ToggleIconButton
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      >
        {isSelected ? <StarIcon /> : <StarOutlineIcon />}
      </ToggleIconButton>
    );
  },
  args: {
    size: "large",
    variant: "filled",
  },
};

export const Square: Story = {
  render: function Render(args) {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <ToggleIconButton
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      >
        {isSelected ? <HeartIcon /> : <HeartOutlineIcon />}
      </ToggleIconButton>
    );
  },
  args: {
    shape: "square",
    variant: "filled",
  },
};

export const Disabled: Story = {
  args: {
    children: <HeartOutlineIcon />,
    isSelected: false,
    disabled: true,
    variant: "filled",
  },
};

export const DisabledSelected: Story = {
  args: {
    children: <HeartIcon />,
    isSelected: true,
    disabled: true,
    variant: "filled",
  },
};

export const AllVariantsComparison: Story = {
  render: function Render() {
    const [selected, setSelected] = useState<Set<string>>(new Set());

    const toggle = (key: string) => {
      const newSet = new Set(selected);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      setSelected(newSet);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <span style={{ width: "80px" }}>Standard:</span>
          <ToggleIconButton
            isSelected={selected.has("standard")}
            onClick={() => toggle("standard")}
            variant="standard"
          >
            {selected.has("standard") ? <HeartIcon /> : <HeartOutlineIcon />}
          </ToggleIconButton>
        </div>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <span style={{ width: "80px" }}>Filled:</span>
          <ToggleIconButton
            isSelected={selected.has("filled")}
            onClick={() => toggle("filled")}
            variant="filled"
          >
            {selected.has("filled") ? <HeartIcon /> : <HeartOutlineIcon />}
          </ToggleIconButton>
        </div>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <span style={{ width: "80px" }}>Outlined:</span>
          <ToggleIconButton
            isSelected={selected.has("outlined")}
            onClick={() => toggle("outlined")}
            variant="outlined"
          >
            {selected.has("outlined") ? <HeartIcon /> : <HeartOutlineIcon />}
          </ToggleIconButton>
        </div>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <span style={{ width: "80px" }}>Tonal:</span>
          <ToggleIconButton
            isSelected={selected.has("tonal")}
            onClick={() => toggle("tonal")}
            variant="tonal"
          >
            {selected.has("tonal") ? <HeartIcon /> : <HeartOutlineIcon />}
          </ToggleIconButton>
        </div>
      </div>
    );
  },
};

export const MultipleToggleIcons: Story = {
  render: function Render() {
    const [favorites, setFavorites] = useState<Set<number>>(new Set([1]));

    const toggleFavorite = (id: number) => {
      const newFavorites = new Set(favorites);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      setFavorites(newFavorites);
    };

    return (
      <div style={{ display: "flex", gap: "8px" }}>
        <ToggleIconButton
          isSelected={favorites.has(1)}
          onClick={() => toggleFavorite(1)}
          variant="standard"
        >
          {favorites.has(1) ? <HeartIcon /> : <HeartOutlineIcon />}
        </ToggleIconButton>
        <ToggleIconButton
          isSelected={favorites.has(2)}
          onClick={() => toggleFavorite(2)}
          variant="standard"
        >
          {favorites.has(2) ? <StarIcon /> : <StarOutlineIcon />}
        </ToggleIconButton>
        <ToggleIconButton
          isSelected={favorites.has(3)}
          onClick={() => toggleFavorite(3)}
          variant="standard"
        >
          {favorites.has(3) ? <BookmarkIcon /> : <BookmarkOutlineIcon />}
        </ToggleIconButton>
      </div>
    );
  },
};
