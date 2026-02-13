import type { Color, Size } from "./types";

export interface ColorConfig {
  // Border colors
  borderColor: string;
  borderColorHover: string;
  borderColorFocus: string;
  borderColorError: string;
  borderColorDisabled: string;
  // Label colors
  labelColor: string;
  labelColorFocus: string;
  labelColorError: string;
  labelColorDisabled: string;
  // Input colors
  inputColor: string;
  inputColorDisabled: string;
  inputPlaceholderColor: string;
  // Helper/Error text colors
  helperTextColor: string;
  errorTextColor: string;
  // Background
  backgroundColor: string;
  backgroundColorDisabled: string;
  // Caret color
  caretColor: string;
}

export interface SizeConfig {
  height: string;
  paddingX: string;
  fontSize: string;
  labelFontSize: string;
  helperFontSize: string;
  iconSize: string;
  borderRadius: string;
  gap: string;
}

/**
 * Material 3 Outlined Text Field - Color configurations
 */
export const colorConfigMap: Record<Color, ColorConfig> = {
  primary: {
    // Border
    borderColor: "rgb(var(--rgb-outline))",
    borderColorHover: "rgb(var(--rgb-on-surface))",
    borderColorFocus: "rgb(var(--rgb-primary))",
    borderColorError: "rgb(var(--rgb-error))",
    borderColorDisabled: "rgb(var(--rgb-on-surface) / 0.12)",
    // Label
    labelColor: "rgb(var(--rgb-on-surface-variant))",
    labelColorFocus: "rgb(var(--rgb-primary))",
    labelColorError: "rgb(var(--rgb-error))",
    labelColorDisabled: "rgb(var(--rgb-on-surface) / 0.38)",
    // Input
    inputColor: "rgb(var(--rgb-on-surface))",
    inputColorDisabled: "rgb(var(--rgb-on-surface) / 0.38)",
    inputPlaceholderColor: "rgb(var(--rgb-on-surface-variant))",
    // Helper/Error
    helperTextColor: "rgb(var(--rgb-on-surface-variant))",
    errorTextColor: "rgb(var(--rgb-error))",
    // Background
    backgroundColor: "transparent",
    backgroundColorDisabled: "transparent",
    // Caret
    caretColor: "rgb(var(--rgb-primary))",
  },
  secondary: {
    // Border
    borderColor: "rgb(var(--rgb-outline))",
    borderColorHover: "rgb(var(--rgb-on-surface))",
    borderColorFocus: "rgb(var(--rgb-secondary))",
    borderColorError: "rgb(var(--rgb-error))",
    borderColorDisabled: "rgb(var(--rgb-on-surface) / 0.12)",
    // Label
    labelColor: "rgb(var(--rgb-on-surface-variant))",
    labelColorFocus: "rgb(var(--rgb-secondary))",
    labelColorError: "rgb(var(--rgb-error))",
    labelColorDisabled: "rgb(var(--rgb-on-surface) / 0.38)",
    // Input
    inputColor: "rgb(var(--rgb-on-surface))",
    inputColorDisabled: "rgb(var(--rgb-on-surface) / 0.38)",
    inputPlaceholderColor: "rgb(var(--rgb-on-surface-variant))",
    // Helper/Error
    helperTextColor: "rgb(var(--rgb-on-surface-variant))",
    errorTextColor: "rgb(var(--rgb-error))",
    // Background
    backgroundColor: "transparent",
    backgroundColorDisabled: "transparent",
    // Caret
    caretColor: "rgb(var(--rgb-secondary))",
  },
  tertiary: {
    // Border
    borderColor: "rgb(var(--rgb-outline))",
    borderColorHover: "rgb(var(--rgb-on-surface))",
    borderColorFocus: "rgb(var(--rgb-tertiary))",
    borderColorError: "rgb(var(--rgb-error))",
    borderColorDisabled: "rgb(var(--rgb-on-surface) / 0.12)",
    // Label
    labelColor: "rgb(var(--rgb-on-surface-variant))",
    labelColorFocus: "rgb(var(--rgb-tertiary))",
    labelColorError: "rgb(var(--rgb-error))",
    labelColorDisabled: "rgb(var(--rgb-on-surface) / 0.38)",
    // Input
    inputColor: "rgb(var(--rgb-on-surface))",
    inputColorDisabled: "rgb(var(--rgb-on-surface) / 0.38)",
    inputPlaceholderColor: "rgb(var(--rgb-on-surface-variant))",
    // Helper/Error
    helperTextColor: "rgb(var(--rgb-on-surface-variant))",
    errorTextColor: "rgb(var(--rgb-error))",
    // Background
    backgroundColor: "transparent",
    backgroundColorDisabled: "transparent",
    // Caret
    caretColor: "rgb(var(--rgb-tertiary))",
  },
};

/**
 * Material 3 Outlined Text Field - Size configurations
 */
export const sizeConfigMap: Record<Size, SizeConfig> = {
  small: {
    height: "40px",
    paddingX: "12px",
    fontSize: "var(--typo-body-medium-font-size)",
    labelFontSize: "var(--typo-body-small-font-size)",
    helperFontSize: "var(--typo-body-small-font-size)",
    iconSize: "1.25rem",
    borderRadius: "var(--border-radius-extra-small)",
    gap: "8px",
  },
  medium: {
    height: "56px",
    paddingX: "16px",
    fontSize: "var(--typo-body-large-font-size)",
    labelFontSize: "var(--typo-body-small-font-size)",
    helperFontSize: "var(--typo-body-small-font-size)",
    iconSize: "1.5rem",
    borderRadius: "var(--border-radius-extra-small)",
    gap: "8px",
  },
  large: {
    height: "64px",
    paddingX: "20px",
    fontSize: "var(--typo-body-large-font-size)",
    labelFontSize: "var(--typo-body-medium-font-size)",
    helperFontSize: "var(--typo-body-small-font-size)",
    iconSize: "1.75rem",
    borderRadius: "var(--border-radius-small)",
    gap: "12px",
  },
};
