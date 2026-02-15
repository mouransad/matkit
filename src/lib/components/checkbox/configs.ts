import type { CheckboxColorConfig, CheckboxSizeConfig, CheckboxColor } from "./types";

/**
 * Primary Checkbox - Material 3 Specs
 * Uses primary color for checked state
 */
export const primaryColorConfig: CheckboxColorConfig = {
  borderColor: "rgb(var(--rgb-on-surface-variant))",
  checkedBackground: "rgb(var(--rgb-primary))",
  checkedColor: "rgb(var(--rgb-on-primary))",
  hoverStateLayer: "rgb(var(--rgb-on-surface) / 0.08)",
  activeStateLayer: "rgb(var(--rgb-on-surface) / 0.12)",
  focusStateLayer: "rgb(var(--rgb-on-surface) / 0.12)",
  disabledBorderColor: "rgb(var(--rgb-on-surface) / 0.38)",
  disabledCheckedBackground: "rgb(var(--rgb-on-surface) / 0.38)",
  disabledCheckedColor: "rgb(var(--rgb-surface))",
};

/**
 * Secondary Checkbox - Material 3 Specs
 * Uses secondary color for checked state
 */
export const secondaryColorConfig: CheckboxColorConfig = {
  borderColor: "rgb(var(--rgb-on-surface-variant))",
  checkedBackground: "rgb(var(--rgb-secondary))",
  checkedColor: "rgb(var(--rgb-on-secondary))",
  hoverStateLayer: "rgb(var(--rgb-on-surface) / 0.08)",
  activeStateLayer: "rgb(var(--rgb-on-surface) / 0.12)",
  focusStateLayer: "rgb(var(--rgb-on-surface) / 0.12)",
  disabledBorderColor: "rgb(var(--rgb-on-surface) / 0.38)",
  disabledCheckedBackground: "rgb(var(--rgb-on-surface) / 0.38)",
  disabledCheckedColor: "rgb(var(--rgb-surface))",
};

/**
 * Tertiary Checkbox - Material 3 Specs
 * Uses tertiary color for checked state
 */
export const tertiaryColorConfig: CheckboxColorConfig = {
  borderColor: "rgb(var(--rgb-on-surface-variant))",
  checkedBackground: "rgb(var(--rgb-tertiary))",
  checkedColor: "rgb(var(--rgb-on-tertiary))",
  hoverStateLayer: "rgb(var(--rgb-on-surface) / 0.08)",
  activeStateLayer: "rgb(var(--rgb-on-surface) / 0.12)",
  focusStateLayer: "rgb(var(--rgb-on-surface) / 0.12)",
  disabledBorderColor: "rgb(var(--rgb-on-surface) / 0.38)",
  disabledCheckedBackground: "rgb(var(--rgb-on-surface) / 0.38)",
  disabledCheckedColor: "rgb(var(--rgb-surface))",
};

/**
 * Error Checkbox - Material 3 Specs
 * Uses error color for checked state
 */
export const errorColorConfig: CheckboxColorConfig = {
  borderColor: "rgb(var(--rgb-error))",
  checkedBackground: "rgb(var(--rgb-error))",
  checkedColor: "rgb(var(--rgb-on-error))",
  hoverStateLayer: "rgb(var(--rgb-error) / 0.08)",
  activeStateLayer: "rgb(var(--rgb-error) / 0.12)",
  focusStateLayer: "rgb(var(--rgb-error) / 0.12)",
  disabledBorderColor: "rgb(var(--rgb-on-surface) / 0.38)",
  disabledCheckedBackground: "rgb(var(--rgb-on-surface) / 0.38)",
  disabledCheckedColor: "rgb(var(--rgb-surface))",
};

export const colorConfigMap: Record<CheckboxColor, CheckboxColorConfig> = {
  primary: primaryColorConfig,
  secondary: secondaryColorConfig,
  tertiary: tertiaryColorConfig,
  error: errorColorConfig,
};

/**
 * Small Checkbox Size Config
 */
export const smallSizeConfig: CheckboxSizeConfig = {
  boxSize: "16px",
  iconSize: "14px",
  borderRadius: "2px",
  stateLayerSize: "32px",
  labelFontSize: "14px",
  gap: "8px",
};

/**
 * Medium Checkbox Size Config (Default)
 */
export const mediumSizeConfig: CheckboxSizeConfig = {
  boxSize: "18px",
  iconSize: "16px",
  borderRadius: "2px",
  stateLayerSize: "40px",
  labelFontSize: "16px",
  gap: "12px",
};

/**
 * Large Checkbox Size Config
 */
export const largeSizeConfig: CheckboxSizeConfig = {
  boxSize: "24px",
  iconSize: "20px",
  borderRadius: "3px",
  stateLayerSize: "48px",
  labelFontSize: "18px",
  gap: "14px",
};

export const sizeConfigMap: Record<"small" | "medium" | "large", CheckboxSizeConfig> = {
  small: smallSizeConfig,
  medium: mediumSizeConfig,
  large: largeSizeConfig,
};

export const getColorConfig = (color: CheckboxColor): CheckboxColorConfig => {
  return colorConfigMap[color];
};

export const getSizeConfig = (size: "small" | "medium" | "large"): CheckboxSizeConfig => {
  return sizeConfigMap[size];
};
