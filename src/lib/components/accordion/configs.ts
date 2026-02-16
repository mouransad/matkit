import type {
  AccordionColor,
  AccordionColorConfig,
  AccordionSize,
  AccordionSizeConfig,
  AccordionVariant,
} from "./types";

export const sizeConfigMap: Record<AccordionSize, AccordionSizeConfig> = {
  small: {
    headerPaddingX: "12px",
    headerPaddingY: "8px",
    contentPaddingX: "12px",
    contentPaddingY: "12px",
    headerFontSize: "var(--typo-label-large-font-size)",
    subtitleFontSize: "var(--typo-label-small-font-size)",
    contentFontSize: "var(--typo-body-small-font-size)",
    iconSize: "1.25rem",
    borderRadius: "var(--border-radius-small)",
    headerGap: "8px",
  },
  medium: {
    headerPaddingX: "16px",
    headerPaddingY: "12px",
    contentPaddingX: "16px",
    contentPaddingY: "16px",
    headerFontSize: "var(--typo-title-medium-font-size)",
    subtitleFontSize: "var(--typo-label-medium-font-size)",
    contentFontSize: "var(--typo-body-medium-font-size)",
    iconSize: "1.5rem",
    borderRadius: "var(--border-radius-medium)",
    headerGap: "12px",
  },
  large: {
    headerPaddingX: "24px",
    headerPaddingY: "16px",
    contentPaddingX: "24px",
    contentPaddingY: "20px",
    headerFontSize: "var(--typo-title-large-font-size)",
    subtitleFontSize: "var(--typo-label-large-font-size)",
    contentFontSize: "var(--typo-body-large-font-size)",
    iconSize: "1.75rem",
    borderRadius: "var(--border-radius-large)",
    headerGap: "16px",
  },
};

const filledColorConfigMap: Record<AccordionColor, AccordionColorConfig> = {
  primary: {
    headerBackground: "rgb(var(--rgb-primary-container))",
    headerColor: "rgb(var(--rgb-on-primary-container))",
    headerHoverBackground: "rgb(var(--rgb-primary-container) / 0.88)",
    contentBackground: "rgb(var(--rgb-surface-container-low))",
    contentColor: "rgb(var(--rgb-on-surface))",
    borderColor: "transparent",
    iconColor: "rgb(var(--rgb-on-primary-container))",
    disabledHeaderBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
  },
  secondary: {
    headerBackground: "rgb(var(--rgb-secondary-container))",
    headerColor: "rgb(var(--rgb-on-secondary-container))",
    headerHoverBackground: "rgb(var(--rgb-secondary-container) / 0.88)",
    contentBackground: "rgb(var(--rgb-surface-container-low))",
    contentColor: "rgb(var(--rgb-on-surface))",
    borderColor: "transparent",
    iconColor: "rgb(var(--rgb-on-secondary-container))",
    disabledHeaderBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
  },
  tertiary: {
    headerBackground: "rgb(var(--rgb-tertiary-container))",
    headerColor: "rgb(var(--rgb-on-tertiary-container))",
    headerHoverBackground: "rgb(var(--rgb-tertiary-container) / 0.88)",
    contentBackground: "rgb(var(--rgb-surface-container-low))",
    contentColor: "rgb(var(--rgb-on-surface))",
    borderColor: "transparent",
    iconColor: "rgb(var(--rgb-on-tertiary-container))",
    disabledHeaderBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
  },
  surface: {
    headerBackground: "rgb(var(--rgb-surface-container))",
    headerColor: "rgb(var(--rgb-on-surface))",
    headerHoverBackground: "rgb(var(--rgb-surface-container-high))",
    contentBackground: "rgb(var(--rgb-surface-container-low))",
    contentColor: "rgb(var(--rgb-on-surface))",
    borderColor: "transparent",
    iconColor: "rgb(var(--rgb-on-surface-variant))",
    disabledHeaderBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
  },
};

const outlinedColorConfigMap: Record<AccordionColor, AccordionColorConfig> = {
  primary: {
    headerBackground: "transparent",
    headerColor: "rgb(var(--rgb-primary))",
    headerHoverBackground: "rgb(var(--rgb-primary) / 0.08)",
    contentBackground: "transparent",
    contentColor: "rgb(var(--rgb-on-surface))",
    borderColor: "rgb(var(--rgb-primary) / 0.5)",
    iconColor: "rgb(var(--rgb-primary))",
    disabledHeaderBackground: "transparent",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
  },
  secondary: {
    headerBackground: "transparent",
    headerColor: "rgb(var(--rgb-secondary))",
    headerHoverBackground: "rgb(var(--rgb-secondary) / 0.08)",
    contentBackground: "transparent",
    contentColor: "rgb(var(--rgb-on-surface))",
    borderColor: "rgb(var(--rgb-secondary) / 0.5)",
    iconColor: "rgb(var(--rgb-secondary))",
    disabledHeaderBackground: "transparent",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
  },
  tertiary: {
    headerBackground: "transparent",
    headerColor: "rgb(var(--rgb-tertiary))",
    headerHoverBackground: "rgb(var(--rgb-tertiary) / 0.08)",
    contentBackground: "transparent",
    contentColor: "rgb(var(--rgb-on-surface))",
    borderColor: "rgb(var(--rgb-tertiary) / 0.5)",
    iconColor: "rgb(var(--rgb-tertiary))",
    disabledHeaderBackground: "transparent",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
  },
  surface: {
    headerBackground: "transparent",
    headerColor: "rgb(var(--rgb-on-surface))",
    headerHoverBackground: "rgb(var(--rgb-on-surface) / 0.08)",
    contentBackground: "transparent",
    contentColor: "rgb(var(--rgb-on-surface))",
    borderColor: "rgb(var(--rgb-outline))",
    iconColor: "rgb(var(--rgb-on-surface-variant))",
    disabledHeaderBackground: "transparent",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
  },
};

const elevatedColorConfigMap: Record<AccordionColor, AccordionColorConfig> = {
  primary: {
    headerBackground: "rgb(var(--rgb-surface-container-low))",
    headerColor: "rgb(var(--rgb-primary))",
    headerHoverBackground: "rgb(var(--rgb-primary) / 0.08)",
    contentBackground: "rgb(var(--rgb-surface-container-lowest))",
    contentColor: "rgb(var(--rgb-on-surface))",
    borderColor: "transparent",
    iconColor: "rgb(var(--rgb-primary))",
    disabledHeaderBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    shadow: "var(--elevation-level1)",
  },
  secondary: {
    headerBackground: "rgb(var(--rgb-surface-container-low))",
    headerColor: "rgb(var(--rgb-secondary))",
    headerHoverBackground: "rgb(var(--rgb-secondary) / 0.08)",
    contentBackground: "rgb(var(--rgb-surface-container-lowest))",
    contentColor: "rgb(var(--rgb-on-surface))",
    borderColor: "transparent",
    iconColor: "rgb(var(--rgb-secondary))",
    disabledHeaderBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    shadow: "var(--elevation-level1)",
  },
  tertiary: {
    headerBackground: "rgb(var(--rgb-surface-container-low))",
    headerColor: "rgb(var(--rgb-tertiary))",
    headerHoverBackground: "rgb(var(--rgb-tertiary) / 0.08)",
    contentBackground: "rgb(var(--rgb-surface-container-lowest))",
    contentColor: "rgb(var(--rgb-on-surface))",
    borderColor: "transparent",
    iconColor: "rgb(var(--rgb-tertiary))",
    disabledHeaderBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    shadow: "var(--elevation-level1)",
  },
  surface: {
    headerBackground: "rgb(var(--rgb-surface-container-low))",
    headerColor: "rgb(var(--rgb-on-surface))",
    headerHoverBackground: "rgb(var(--rgb-on-surface) / 0.08)",
    contentBackground: "rgb(var(--rgb-surface-container-lowest))",
    contentColor: "rgb(var(--rgb-on-surface))",
    borderColor: "transparent",
    iconColor: "rgb(var(--rgb-on-surface-variant))",
    disabledHeaderBackground: "rgb(var(--rgb-on-surface) / 0.12)",
    disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
    shadow: "var(--elevation-level1)",
  },
};

export const getColorConfig = (
  variant: AccordionVariant,
  color: AccordionColor
): AccordionColorConfig => {
  switch (variant) {
    case "filled":
      return filledColorConfigMap[color];
    case "outlined":
      return outlinedColorConfigMap[color];
    case "elevated":
      return elevatedColorConfigMap[color];
    default:
      return filledColorConfigMap[color];
  }
};
