import type { BaseButtonProps } from "@components/baseButton/types";
import type { Variant } from "./types";

export interface ToggleButtonColorConfig {
  unselected: BaseButtonProps["colorConfig"];
  selected: BaseButtonProps["colorConfig"];
}

/**
 * Filled Toggle Button - Material 3 Specs
 * Unselected: Surface container highest background, on-surface color
 * Selected: Primary background, on-primary color
 */
export const filledToggleColorConfig: ToggleButtonColorConfig = {
  unselected: {
    background: "rgb(var(--rgb-surface-container-highest))",
    color: "rgb(var(--rgb-on-surface))",
    hoverBackground: "rgb(var(--rgb-on-surface) / 0.08)",
    activeBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
  selected: {
    background: "rgb(var(--rgb-primary))",
    color: "rgb(var(--rgb-on-primary))",
    hoverBackground: "rgb(var(--rgb-primary) / 0.88)",
    activeBackground: "rgb(var(--rgb-primary) / 0.76)",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
};

/**
 * Tonal Toggle Button - Material 3 Specs
 * Unselected: Surface container highest background, on-surface-variant color
 * Selected: Secondary container background, on-secondary-container color
 */
export const tonalToggleColorConfig: ToggleButtonColorConfig = {
  unselected: {
    background: "rgb(var(--rgb-surface-container-highest))",
    color: "rgb(var(--rgb-on-surface-variant))",
    hoverBackground: "rgb(var(--rgb-on-surface-variant) / 0.08)",
    activeBackground: "rgb(var(--rgb-on-surface-variant) / 0.12)",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
  selected: {
    background: "rgb(var(--rgb-secondary-container))",
    color: "rgb(var(--rgb-on-secondary-container))",
    hoverBackground: "rgb(var(--rgb-secondary-container) / 0.88)",
    activeBackground: "rgb(var(--rgb-secondary-container) / 0.76)",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
};

/**
 * Outlined Toggle Button - Material 3 Specs
 * Unselected: Transparent background, on-surface color, outline border
 * Selected: Inverse surface background, inverse on-surface color, no border
 */
export const outlineToggleColorConfig: ToggleButtonColorConfig = {
  unselected: {
    background: "transparent",
    color: "rgb(var(--rgb-on-surface))",
    hoverBackground: "rgb(var(--rgb-on-surface) / 0.08)",
    activeBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledBackground: "transparent",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "rgb(var(--rgb-outline))",
  },
  selected: {
    background: "rgb(var(--rgb-inverse-surface))",
    color: "rgb(var(--rgb-inverse-on-surface))",
    hoverBackground: "rgb(var(--rgb-inverse-surface) / 0.88)",
    activeBackground: "rgb(var(--rgb-inverse-surface) / 0.76)",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
};

/**
 * Standard/Elevated Toggle Button - Material 3 Specs (Icon Button style)
 * Unselected: Transparent background, on-surface-variant color
 * Selected: Primary color (icon style selected state)
 */
export const elevatedToggleColorConfig: ToggleButtonColorConfig = {
  unselected: {
    background: "transparent",
    color: "rgb(var(--rgb-on-surface-variant))",
    hoverBackground: "rgb(var(--rgb-on-surface-variant) / 0.08)",
    activeBackground: "rgb(var(--rgb-on-surface-variant) / 0.12)",
    disabledBackground: "transparent",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
  selected: {
    background: "rgb(var(--rgb-primary))",
    color: "rgb(var(--rgb-on-primary))",
    hoverBackground: "rgb(var(--rgb-primary) / 0.88)",
    activeBackground: "rgb(var(--rgb-primary) / 0.76)",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
};

/**
 * Variant to color config mapping
 */
export const variantColorConfigMap: Record<Variant, ToggleButtonColorConfig> = {
  filled: filledToggleColorConfig,
  tonal: tonalToggleColorConfig,
  outline: outlineToggleColorConfig,
  elevated: elevatedToggleColorConfig,
};

/**
 * Get the color configuration for a toggle button based on variant and selected state
 */
export const getToggleButtonColorConfig = (
  variant: Variant,
  isSelected: boolean
): BaseButtonProps["colorConfig"] => {
  const config = variantColorConfigMap[variant];
  return isSelected ? config.selected : config.unselected;
};
