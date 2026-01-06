import type { BaseButtonProps } from "@components/baseButton/types";
import type { Color, Size, Variant } from "./types";

export const sizeConfigMap: Record<Size, BaseButtonProps["sizeConfig"]> = {
  xSmall: {
    borderRadiusEndEnd: "var(--border-radius-extra-small)",
    borderRadiusEndStart: "var(--border-radius-extra-small)",
    borderRadiusStartEnd: "var(--border-radius-extra-small)",
    borderRadiusStartStart: "var(--border-radius-extra-small)",
    height: "32px",
    fontSize: "var(--typo-label-large-font-size)",
    paddingX: "12px",
    gap: "4px",
    iconSize: "1.25rem",
    minWidth: "32px",
  },
  small: {
    borderRadiusEndEnd: "var(--border-radius-extra-small)",
    borderRadiusEndStart: "var(--border-radius-extra-small)",
    borderRadiusStartEnd: "var(--border-radius-extra-small)",
    borderRadiusStartStart: "var(--border-radius-extra-small)",
    height: "40px",
    fontSize: "var(--typo-label-large-font-size)",
    paddingX: "16px",
    gap: "8px",
    iconSize: "1.25rem",
    minWidth: "40px",
  },
  medium: {
    borderRadiusEndEnd: "var(--border-radius-large)",
    borderRadiusEndStart: "var(--border-radius-large)",
    borderRadiusStartEnd: "var(--border-radius-large)",
    borderRadiusStartStart: "var(--border-radius-large)",
    height: "56px",
    fontSize: "var(--typo-title-medium-font-size)",
    paddingX: "24px",
    gap: "8px",
    iconSize: "1.5rem",
    minWidth: "56px",
  },
  large: {
    borderRadiusEndEnd: "var(--border-radius-extra-large)",
    borderRadiusEndStart: "var(--border-radius-extra-large)",
    borderRadiusStartEnd: "var(--border-radius-extra-large)",
    borderRadiusStartStart: "var(--border-radius-extra-large)",
    height: "96px",
    fontSize: "var(--typo-headline-small-font-size)",
    paddingX: "48px",
    gap: "12px",
    iconSize: "2rem",
    minWidth: "96px",
  },
  xLarge: {
    borderRadiusEndEnd: "var(--border-radius-extra-large)",
    borderRadiusEndStart: "var(--border-radius-extra-large)",
    borderRadiusStartEnd: "var(--border-radius-extra-large)",
    borderRadiusStartStart: "var(--border-radius-extra-large)",
    height: "136px",
    fontSize: "var(--typo-headline-large-font-size)",
    paddingX: "64px",
    gap: "16px",
    iconSize: "2.5rem",
    minWidth: "136px",
  },
};

export const filledColorConfigMap: Record<Color, BaseButtonProps['colorConfig']> = {
  primary: {
    background: "rgb(var(--rgb-primary))",
    color: "rgb(var(--rgb-on-primary))",
    hoverBackground: "rgb(var(--rgb-primary) / 0.88)",
    activeBackground: "rgb(var(--rgb-primary) / 0.76)",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
  secondary: {
    background: "rgb(var(--rgb-secondary))",
    color: "rgb(var(--rgb-on-secondary))",
    hoverBackground: "rgb(var(--rgb-secondary) / 0.88)",
    activeBackground: "rgb(var(--rgb-secondary) / 0.76)",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
  tertiary: {
    background: "rgb(var(--rgb-tertiary))",
    color: "rgb(var(--rgb-on-tertiary))",
    hoverBackground: "rgb(var(--rgb-tertiary) / 0.88)",
    activeBackground: "rgb(var(--rgb-tertiary) / 0.76)",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
  error: {
    background: "rgb(var(--rgb-error))",
    color: "rgb(var(--rgb-on-error))",
    hoverBackground: "rgb(var(--rgb-error) / 0.88)",
    activeBackground: "rgb(var(--rgb-error) / 0.76)",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
};

export const outlinedColorConfigMap: Record<Color, BaseButtonProps['colorConfig']> = {
  primary: {
    background: "transparent",
    color: "rgb(var(--rgb-primary))",
    hoverBackground: "rgb(var(--rgb-primary) / 0.08)",
    activeBackground: "rgb(var(--rgb-primary) / 0.16)",
    disabledBackground: "transparent",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "rgb(var(--rgb-outline))",
  },
  secondary: {
    background: "transparent",
    color: "rgb(var(--rgb-secondary))",
    hoverBackground: "rgb(var(--rgb-secondary) / 0.08)",
    activeBackground: "rgb(var(--rgb-secondary) / 0.16)",
    disabledBackground: "transparent",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "rgb(var(--rgb-outline))",
  },
  tertiary: {
    background: "transparent",
    color: "rgb(var(--rgb-tertiary))",
    hoverBackground: "rgb(var(--rgb-tertiary) / 0.08)",
    activeBackground: "rgb(var(--rgb-tertiary) / 0.16)",
    disabledBackground: "transparent",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "rgb(var(--rgb-outline))",
  },
  error: {
    background: "transparent",
    color: "rgb(var(--rgb-error))",
    hoverBackground: "rgb(var(--rgb-error) / 0.08)",
    activeBackground: "rgb(var(--rgb-error) / 0.16)",
    disabledBackground: "transparent",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "rgb(var(--rgb-outline))",
  },
};

export const textColorConfigMap: Record<Color, BaseButtonProps['colorConfig']> = {
  primary: {
    background: "transparent",
    color: "rgb(var(--rgb-primary))",
    hoverBackground: "rgb(var(--rgb-primary) / 0.08)",
    activeBackground: "rgb(var(--rgb-primary) / 0.16)",
    disabledBackground: "transparent",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
  secondary: {
    background: "transparent",
    color: "rgb(var(--rgb-secondary))",
    hoverBackground: "rgb(var(--rgb-secondary) / 0.08)",
    activeBackground: "rgb(var(--rgb-secondary) / 0.16)",
    disabledBackground: "transparent",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
  tertiary: {
    background: "transparent",
    color: "rgb(var(--rgb-tertiary))",
    hoverBackground: "rgb(var(--rgb-tertiary) / 0.08)",
    activeBackground: "rgb(var(--rgb-tertiary) / 0.16)",
    disabledBackground: "transparent",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
  error: {
    background: "transparent",
    color: "rgb(var(--rgb-error))",
    hoverBackground: "rgb(var(--rgb-error) / 0.08)",
    activeBackground: "rgb(var(--rgb-error) / 0.16)",
    disabledBackground: "transparent",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
};

export const tonalColorConfigMap: Record<Color, BaseButtonProps['colorConfig']> = {
  primary: {
    background: "rgb(var(--rgb-primary-container))",
    color: "rgb(var(--rgb-on-primary-container))",
    hoverBackground: "rgb(var(--rgb-primary-container) / 0.88)",
    activeBackground: "rgb(var(--rgb-primary-container) / 0.76)",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
  secondary: {
    background: "rgb(var(--rgb-secondary-container))",
    color: "rgb(var(--rgb-on-secondary-container))",
    hoverBackground: "rgb(var(--rgb-secondary-container) / 0.88)",
    activeBackground: "rgb(var(--rgb-secondary-container) / 0.76)",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
  tertiary: {
    background: "rgb(var(--rgb-tertiary-container))",
    color: "rgb(var(--rgb-on-tertiary-container))",
    hoverBackground: "rgb(var(--rgb-tertiary-container) / 0.88)",
    activeBackground: "rgb(var(--rgb-tertiary-container) / 0.76)",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
  error: {
    background: "rgb(var(--rgb-error-container))",
    color: "rgb(var(--rgb-on-error-container))",
    hoverBackground: "rgb(var(--rgb-error-container) / 0.88)",
    activeBackground: "rgb(var(--rgb-error-container) / 0.76)",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
};

export const elevatedColorConfigMap: Record<Color, BaseButtonProps['colorConfig']> = {
  primary: {
    background: "rgb(var(--rgb-surface-container-low))",
    color: "rgb(var(--rgb-primary))",
    hoverBackground: "rgb(var(--rgb-surface-container))",
    activeBackground: "rgb(var(--rgb-surface-container-high))",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
  secondary: {
    background: "rgb(var(--rgb-surface-container-low))",
    color: "rgb(var(--rgb-secondary))",
    hoverBackground: "rgb(var(--rgb-surface-container))",
    activeBackground: "rgb(var(--rgb-surface-container-high))",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
  tertiary: {
    background: "rgb(var(--rgb-surface-container-low))",
    color: "rgb(var(--rgb-tertiary))",
    hoverBackground: "rgb(var(--rgb-surface-container))",
    activeBackground: "rgb(var(--rgb-surface-container-high))",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
  error: {
    background: "rgb(var(--rgb-surface-container-low))",
    color: "rgb(var(--rgb-error))",
    hoverBackground: "rgb(var(--rgb-surface-container))",
    activeBackground: "rgb(var(--rgb-surface-container-high))",
    disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    borderColor: "transparent",
  },
};

export const getColorConfig = (
  buttonType: Variant,
  color: Color
): BaseButtonProps['colorConfig'] => {
  switch (buttonType) {
    case "filled":
      return filledColorConfigMap[color];
    case "outlined":
      return outlinedColorConfigMap[color];
    case "text":
      return textColorConfigMap[color];
    case "tonal":
      return tonalColorConfigMap[color];
    case "elevated":
      return elevatedColorConfigMap[color];
    default:
      return filledColorConfigMap[color];
  }
};