import type { BaseButtonProps } from "@components/baseButton/types";
import type { Variant } from "./types";

export interface ToggleIconButtonColorConfig {
  unselected: BaseButtonProps["colorConfig"];
  selected: BaseButtonProps["colorConfig"];
}

/**
 * Filled Toggle Icon Button - Material 3 Specs
 * Unselected: Surface container highest background, primary color icon
 * Selected: Primary background, on-primary color icon
 */
export const filledToggleColorConfig: ToggleIconButtonColorConfig = {
  unselected: {
    background: "rgb(var(--rgb-surface-container-highest))",
    color: "rgb(var(--rgb-primary))",
    hoverBackground: "rgb(var(--rgb-primary) / 0.08)",
    activeBackground: "rgb(var(--rgb-primary) / 0.12)",
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
 * Tonal Toggle Icon Button - Material 3 Specs
 * Unselected: Surface container highest background, on-surface-variant color icon
 * Selected: Secondary container background, on-secondary-container color icon
 */
export const tonalToggleColorConfig: ToggleIconButtonColorConfig = {
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
 * Outlined Toggle Icon Button - Material 3 Specs
 * Unselected: Transparent background, on-surface-variant color icon, outline border
 * Selected: Inverse surface background, inverse on-surface color icon, no border
 */
export const outlinedToggleColorConfig: ToggleIconButtonColorConfig = {
  unselected: {
    background: "transparent",
    color: "rgb(var(--rgb-on-surface-variant))",
    hoverBackground: "rgb(var(--rgb-on-surface-variant) / 0.08)",
    activeBackground: "rgb(var(--rgb-on-surface-variant) / 0.12)",
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
 * Standard Toggle Icon Button - Material 3 Specs
 * Unselected: Transparent background, on-surface-variant color icon
 * Selected: Transparent background, primary color icon
 */
export const standardToggleColorConfig: ToggleIconButtonColorConfig = {
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
    background: "transparent",
    color: "rgb(var(--rgb-primary))",
    hoverBackground: "rgb(var(--rgb-primary) / 0.08)",
    activeBackground: "rgb(var(--rgb-primary) / 0.12)",
    disabledBackground: "transparent",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
};

/**
 * Variant to color config mapping
 */
export const variantColorConfigMap: Record<
  Variant,
  ToggleIconButtonColorConfig
> = {
  filled: filledToggleColorConfig,
  tonal: tonalToggleColorConfig,
  outlined: outlinedToggleColorConfig,
  standard: standardToggleColorConfig,
};

/**
 * Get the color configuration for a toggle icon button based on variant and selected state
 */
export const getToggleIconButtonColorConfig = (
  variant: Variant,
  isSelected: boolean,
): BaseButtonProps["colorConfig"] => {
  const config = variantColorConfigMap[variant];
  return isSelected ? config.selected : config.unselected;
};
