import type { RadioColorConfig, RadioSizeConfig, RadioColor, RadioSize } from "./types";

/**
 * Primary Radio - Material 3 Specs
 * Uses primary color for selected state
 */
export const primaryColorConfig: RadioColorConfig = {
  borderColor: "rgb(var(--rgb-on-surface-variant))",
  checkedBorderColor: "rgb(var(--rgb-primary))",
  checkedDotColor: "rgb(var(--rgb-primary))",
  hoverStateLayer: "rgb(var(--rgb-on-surface) / 0.08)",
  activeStateLayer: "rgb(var(--rgb-on-surface) / 0.12)",
  focusStateLayer: "rgb(var(--rgb-on-surface) / 0.12)",
  disabledBorderColor: "rgb(var(--rgb-on-surface) / 0.38)",
  disabledCheckedBorderColor: "rgb(var(--rgb-on-surface) / 0.38)",
  disabledCheckedDotColor: "rgb(var(--rgb-on-surface) / 0.38)",
};

/**
 * Secondary Radio - Material 3 Specs
 * Uses secondary color for selected state
 */
export const secondaryColorConfig: RadioColorConfig = {
  borderColor: "rgb(var(--rgb-on-surface-variant))",
  checkedBorderColor: "rgb(var(--rgb-secondary))",
  checkedDotColor: "rgb(var(--rgb-secondary))",
  hoverStateLayer: "rgb(var(--rgb-on-surface) / 0.08)",
  activeStateLayer: "rgb(var(--rgb-on-surface) / 0.12)",
  focusStateLayer: "rgb(var(--rgb-on-surface) / 0.12)",
  disabledBorderColor: "rgb(var(--rgb-on-surface) / 0.38)",
  disabledCheckedBorderColor: "rgb(var(--rgb-on-surface) / 0.38)",
  disabledCheckedDotColor: "rgb(var(--rgb-on-surface) / 0.38)",
};

/**
 * Tertiary Radio - Material 3 Specs
 * Uses tertiary color for selected state
 */
export const tertiaryColorConfig: RadioColorConfig = {
  borderColor: "rgb(var(--rgb-on-surface-variant))",
  checkedBorderColor: "rgb(var(--rgb-tertiary))",
  checkedDotColor: "rgb(var(--rgb-tertiary))",
  hoverStateLayer: "rgb(var(--rgb-on-surface) / 0.08)",
  activeStateLayer: "rgb(var(--rgb-on-surface) / 0.12)",
  focusStateLayer: "rgb(var(--rgb-on-surface) / 0.12)",
  disabledBorderColor: "rgb(var(--rgb-on-surface) / 0.38)",
  disabledCheckedBorderColor: "rgb(var(--rgb-on-surface) / 0.38)",
  disabledCheckedDotColor: "rgb(var(--rgb-on-surface) / 0.38)",
};

/**
 * Error Radio - Material 3 Specs
 * Uses error color for selected state
 */
export const errorColorConfig: RadioColorConfig = {
  borderColor: "rgb(var(--rgb-error))",
  checkedBorderColor: "rgb(var(--rgb-error))",
  checkedDotColor: "rgb(var(--rgb-error))",
  hoverStateLayer: "rgb(var(--rgb-error) / 0.08)",
  activeStateLayer: "rgb(var(--rgb-error) / 0.12)",
  focusStateLayer: "rgb(var(--rgb-error) / 0.12)",
  disabledBorderColor: "rgb(var(--rgb-on-surface) / 0.38)",
  disabledCheckedBorderColor: "rgb(var(--rgb-on-surface) / 0.38)",
  disabledCheckedDotColor: "rgb(var(--rgb-on-surface) / 0.38)",
};

export const colorConfigMap: Record<RadioColor, RadioColorConfig> = {
  primary: primaryColorConfig,
  secondary: secondaryColorConfig,
  tertiary: tertiaryColorConfig,
  error: errorColorConfig,
};

/**
 * Small Radio Size Config
 */
export const smallSizeConfig: RadioSizeConfig = {
  outerSize: "16px",
  innerSize: "8px",
  borderWidth: "2px",
  stateLayerSize: "32px",
  labelFontSize: "14px",
  gap: "8px",
};

/**
 * Medium Radio Size Config (Default)
 */
export const mediumSizeConfig: RadioSizeConfig = {
  outerSize: "20px",
  innerSize: "10px",
  borderWidth: "2px",
  stateLayerSize: "40px",
  labelFontSize: "16px",
  gap: "12px",
};

/**
 * Large Radio Size Config
 */
export const largeSizeConfig: RadioSizeConfig = {
  outerSize: "24px",
  innerSize: "12px",
  borderWidth: "2px",
  stateLayerSize: "48px",
  labelFontSize: "18px",
  gap: "14px",
};

export const sizeConfigMap: Record<RadioSize, RadioSizeConfig> = {
  small: smallSizeConfig,
  medium: mediumSizeConfig,
  large: largeSizeConfig,
};

export const getColorConfig = (color: RadioColor): RadioColorConfig => {
  return colorConfigMap[color];
};

export const getSizeConfig = (size: RadioSize): RadioSizeConfig => {
  return sizeConfigMap[size];
};
