import type { Size, Color, AccordionSizeConfig, AccordionColorConfig } from "./types";

export const sizeConfigMap: Record<Size, AccordionSizeConfig> = {
  small: {
    headerPadding: "12px 16px",
    contentPadding: "0 16px 12px",
    headerFontSize: "var(--typo-label-large-font-size)",
    headerLineHeight: "var(--typo-label-large-line-height)",
    headerFontWeight: "var(--typo-label-large-primary-weight)",
    contentFontSize: "var(--typo-body-small-font-size)",
    contentLineHeight: "var(--typo-body-small-line-height)",
    iconSize: "20px",
    borderRadius: "var(--border-radius-small)",
    gap: "12px",
  },
  medium: {
    headerPadding: "16px 24px",
    contentPadding: "0 24px 16px",
    headerFontSize: "var(--typo-title-medium-font-size)",
    headerLineHeight: "var(--typo-title-medium-line-height)",
    headerFontWeight: "var(--typo-title-medium-primary-weight)",
    contentFontSize: "var(--typo-body-medium-font-size)",
    contentLineHeight: "var(--typo-body-medium-line-height)",
    iconSize: "24px",
    borderRadius: "var(--border-radius-medium)",
    gap: "16px",
  },
  large: {
    headerPadding: "20px 32px",
    contentPadding: "0 32px 20px",
    headerFontSize: "var(--typo-title-large-font-size)",
    headerLineHeight: "var(--typo-title-large-line-height)",
    headerFontWeight: "var(--typo-title-large-primary-weight)",
    contentFontSize: "var(--typo-body-large-font-size)",
    contentLineHeight: "var(--typo-body-large-line-height)",
    iconSize: "28px",
    borderRadius: "var(--border-radius-large)",
    gap: "20px",
  },
};

export const colorConfigMap: Record<Color, AccordionColorConfig> = {
  primary: {
    headerBackground: "rgb(var(--rgb-primary-container))",
    headerColor: "rgb(var(--rgb-on-primary-container))",
    headerHoverOverlay: "rgb(var(--rgb-on-primary-container) / 0.08)",
    headerFocusOverlay: "rgb(var(--rgb-on-primary-container) / 0.12)",
    headerActiveOverlay: "rgb(var(--rgb-on-primary-container) / 0.12)",
    contentBackground: "rgb(var(--rgb-surface-container-low))",
    contentColor: "rgb(var(--rgb-on-surface-variant))",
    iconColor: "rgb(var(--rgb-on-primary-container))",
    disabledHeaderColor: "rgb(var(--rgb-on-surface) / 0.38)",
    disabledIconColor: "rgb(var(--rgb-on-surface) / 0.38)",
    dividerColor: "rgb(var(--rgb-outline-variant))",
  },
  secondary: {
    headerBackground: "rgb(var(--rgb-secondary-container))",
    headerColor: "rgb(var(--rgb-on-secondary-container))",
    headerHoverOverlay: "rgb(var(--rgb-on-secondary-container) / 0.08)",
    headerFocusOverlay: "rgb(var(--rgb-on-secondary-container) / 0.12)",
    headerActiveOverlay: "rgb(var(--rgb-on-secondary-container) / 0.12)",
    contentBackground: "rgb(var(--rgb-surface-container-low))",
    contentColor: "rgb(var(--rgb-on-surface-variant))",
    iconColor: "rgb(var(--rgb-on-secondary-container))",
    disabledHeaderColor: "rgb(var(--rgb-on-surface) / 0.38)",
    disabledIconColor: "rgb(var(--rgb-on-surface) / 0.38)",
    dividerColor: "rgb(var(--rgb-outline-variant))",
  },
  error: {
    headerBackground: "rgb(var(--rgb-error-container))",
    headerColor: "rgb(var(--rgb-on-error-container))",
    headerHoverOverlay: "rgb(var(--rgb-on-error-container) / 0.08)",
    headerFocusOverlay: "rgb(var(--rgb-on-error-container) / 0.12)",
    headerActiveOverlay: "rgb(var(--rgb-on-error-container) / 0.12)",
    contentBackground: "rgb(var(--rgb-surface-container-low))",
    contentColor: "rgb(var(--rgb-on-surface-variant))",
    iconColor: "rgb(var(--rgb-on-error-container))",
    disabledHeaderColor: "rgb(var(--rgb-on-surface) / 0.38)",
    disabledIconColor: "rgb(var(--rgb-on-surface) / 0.38)",
    dividerColor: "rgb(var(--rgb-outline-variant))",
  },
};

export const getSizeConfig = (size: Size): AccordionSizeConfig => {
  return sizeConfigMap[size];
};

export const getColorConfig = (color: Color): AccordionColorConfig => {
  return colorConfigMap[color];
};
