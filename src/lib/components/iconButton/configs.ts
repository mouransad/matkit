import type { SizeConfig as BaseButtonSizeConfig } from "@components/baseButton/types";
import type { Size, WidthType } from "./types";

interface SizeConfig extends BaseButtonSizeConfig {
  width: string;
}

const sizeConfigMap: Record<Size, Record<WidthType, SizeConfig>> = {
  xSmall: {
    regular: {
      borderRadiusEndEnd: "var(--border-radius-full)",
      borderRadiusEndStart: "var(--border-radius-full)",
      borderRadiusStartEnd: "var(--border-radius-full)",
      borderRadiusStartStart: "var(--border-radius-full)",
      height: "28px",
      fontSize: "var(--typo-label-large-font-size)",
      paddingX: "0px",
      gap: "0px",
      iconSize: "1rem",
      width: "28px",
    },
    narrow: {
      borderRadiusEndEnd: "var(--border-radius-full)",
      borderRadiusEndStart: "var(--border-radius-full)",
      borderRadiusStartEnd: "var(--border-radius-full)",
      borderRadiusStartStart: "var(--border-radius-full)",
      height: "28px",
      fontSize: "var(--typo-label-large-font-size)",
      paddingX: "0px",
      gap: "0px",
      iconSize: "1rem",
      width: "24px",
    },
    wide: {
      borderRadiusEndEnd: "var(--border-radius-full)",
      borderRadiusEndStart: "var(--border-radius-full)",
      borderRadiusStartEnd: "var(--border-radius-full)",
      borderRadiusStartStart: "var(--border-radius-full)",
      height: "28px",
      fontSize: "var(--typo-label-large-font-size)",
      paddingX: "0px",
      gap: "0px",
      iconSize: "1rem",
      width: "32px",
    },
  },
  small: {
    regular: {
      borderRadiusEndEnd: "var(--border-radius-full)",
      borderRadiusEndStart: "var(--border-radius-full)",
      borderRadiusStartEnd: "var(--border-radius-full)",
      borderRadiusStartStart: "var(--border-radius-full)",
      height: "40px",
      fontSize: "var(--typo-label-large-font-size)",
      paddingX: "0px",
      gap: "0px",
      iconSize: "1.25rem",
      width: "40px",
    },
    narrow: {
      borderRadiusEndEnd: "var(--border-radius-full)",
      borderRadiusEndStart: "var(--border-radius-full)",
      borderRadiusStartEnd: "var(--border-radius-full)",
      borderRadiusStartStart: "var(--border-radius-full)",
      height: "40px",
      fontSize: "var(--typo-label-large-font-size)",
      paddingX: "0px",
      gap: "0px",
      iconSize: "1.25rem",
      width: "36px",
    },
    wide: {
      borderRadiusEndEnd: "var(--border-radius-full)",
      borderRadiusEndStart: "var(--border-radius-full)",
      borderRadiusStartEnd: "var(--border-radius-full)",
      borderRadiusStartStart: "var(--border-radius-full)",
      height: "40px",
      fontSize: "var(--typo-label-large-font-size)",
      paddingX: "0px",
      gap: "0px",
      iconSize: "1.25rem",
      width: "48px",
    },
  },
  medium: {
    regular: {
      borderRadiusEndEnd: "var(--border-radius-full)",
      borderRadiusEndStart: "var(--border-radius-full)",
      borderRadiusStartEnd: "var(--border-radius-full)",
      borderRadiusStartStart: "var(--border-radius-full)",
      height: "48px",
      fontSize: "var(--typo-title-medium-font-size)",
      paddingX: "0px",
      gap: "0px",
      iconSize: "1.5rem",
      width: "48px",
    },
    narrow: {
      borderRadiusEndEnd: "var(--border-radius-full)",
      borderRadiusEndStart: "var(--border-radius-full)",
      borderRadiusStartEnd: "var(--border-radius-full)",
      borderRadiusStartStart: "var(--border-radius-full)",
      height: "48px",
      fontSize: "var(--typo-title-medium-font-size)",
      paddingX: "0px",
      gap: "0px",
      iconSize: "1.5rem",
      width: "40px",
    },
    wide: {
      borderRadiusEndEnd: "var(--border-radius-full)",
      borderRadiusEndStart: "var(--border-radius-full)",
      borderRadiusStartEnd: "var(--border-radius-full)",
      borderRadiusStartStart: "var(--border-radius-full)",
      height: "48px",
      fontSize: "var(--typo-title-medium-font-size)",
      paddingX: "0px",
      gap: "0px",
      iconSize: "1.5rem",
      width: "56px",
    },
  },
  large: {
    regular: {
      borderRadiusEndEnd: "var(--border-radius-full)",
      borderRadiusEndStart: "var(--border-radius-full)",
      borderRadiusStartEnd: "var(--border-radius-full)",
      borderRadiusStartStart: "var(--border-radius-full)",
      height: "56px",
      fontSize: "var(--typo-headline-small-font-size)",
      paddingX: "0px",
      gap: "0px",
      iconSize: "2rem",
      width: "56px",
    },
    narrow: {
      borderRadiusEndEnd: "var(--border-radius-full)",
      borderRadiusEndStart: "var(--border-radius-full)",
      borderRadiusStartEnd: "var(--border-radius-full)",
      borderRadiusStartStart: "var(--border-radius-full)",
      height: "56px",
      fontSize: "var(--typo-headline-small-font-size)",
      paddingX: "0px",
      gap: "0px",
      iconSize: "2rem",
      width: "48px",
    },
    wide: {
      borderRadiusEndEnd: "var(--border-radius-full)",
      borderRadiusEndStart: "var(--border-radius-full)",
      borderRadiusStartEnd: "var(--border-radius-full)",
      borderRadiusStartStart: "var(--border-radius-full)",
      height: "56px",
      fontSize: "var(--typo-headline-small-font-size)",
      paddingX: "0px",
      gap: "0px",
      iconSize: "2rem",
      width: "64px",
    },
  },
  xLarge: {
    regular: {
      borderRadiusEndEnd: "var(--border-radius-full)",
      borderRadiusEndStart: "var(--border-radius-full)",
      borderRadiusStartEnd: "var(--border-radius-full)",
      borderRadiusStartStart: "var(--border-radius-full)",
      height: "96px",
      fontSize: "var(--typo-headline-large-font-size)",
      paddingX: "0px",
      gap: "0px",
      iconSize: "2.5rem",
      width: "96px",
    },
    narrow: {
      borderRadiusEndEnd: "var(--border-radius-full)",
      borderRadiusEndStart: "var(--border-radius-full)",
      borderRadiusStartEnd: "var(--border-radius-full)",
      borderRadiusStartStart: "var(--border-radius-full)",
      height: "96px",
      fontSize: "var(--typo-headline-large-font-size)",
      paddingX: "0px",
      gap: "0px",
      iconSize: "2.5rem",
      width: "80px",
    },
    wide: {
      borderRadiusEndEnd: "var(--border-radius-full)",
      borderRadiusEndStart: "var(--border-radius-full)",
      borderRadiusStartEnd: "var(--border-radius-full)",
      borderRadiusStartStart: "var(--border-radius-full)",
      height: "96px",
      fontSize: "var(--typo-headline-large-font-size)",
      paddingX: "0px",
      gap: "0px",
      iconSize: "2.5rem",
      width: "112px",
    },
  },
};

type ColorConfig = {
  background: string;
  color: string;
  hoverBackground: string;
  activeBackground: string;
  disabledBackground: string;
  disabledColor: string;
  borderColor: string;
};

type Variant = "filled" | "tonal" | "outlined" | "standard";
type Color = "primary";

const colorConfigMap: Record<Variant, Record<Color, ColorConfig>> = {
  filled: {
    primary: {
      background: "rgb(var(--rgb-primary))",
      color: "rgb(var(--rgb-on-primary))",
      hoverBackground: "rgb(var(--rgb-primary) / 0.88)",
      activeBackground: "rgb(var(--rgb-primary) / 0.76)",
      disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
      disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
      borderColor: "transparent",
    },
  },
  tonal: {
    primary: {
      background: "rgb(var(--rgb-primary-container))",
      color: "rgb(var(--rgb-on-primary-container))",
      hoverBackground: "rgb(var(--rgb-primary-container) / 0.88)",
      activeBackground: "rgb(var(--rgb-primary-container) / 0.76)",
      disabledBackground: "rgb(var(--rgb-on-surface) / 0.12)",
      disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
      borderColor: "transparent",
    },
  },
  outlined: {
    primary: {
      background: "transparent",
      color: "rgb(var(--rgb-on-surface-variant))",
      hoverBackground: "rgb(var(--rgb-on-surface-variant) / 0.08)",
      activeBackground: "rgb(var(--rgb-on-surface-variant) / 0.12)",
      disabledBackground: "transparent",
      disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
      borderColor: "rgb(var(--rgb-outline))",
    },
  },
  standard: {
    primary: {
      background: "transparent",
      color: "rgb(var(--rgb-on-surface-variant))",
      hoverBackground: "rgb(var(--rgb-on-surface-variant) / 0.08)",
      activeBackground: "rgb(var(--rgb-on-surface-variant) / 0.12)",
      disabledBackground: "transparent",
      disabledColor: "rgb(var(--rgb-on-surface) / 0.38)",
      borderColor: "transparent",
    },
  },
};

export { sizeConfigMap, colorConfigMap };
