import type { ComponentProps } from "react";
import type { ColorConfig } from "@components/baseButton/types";

export type Shape = "round" | "square";
export type Size = "xSmall" | "small" | "medium" | "large" | "xLarge";
export type Variant = "filled" | "outlined" | "standard" | "tonal";
export type WidthType = "regular" | "narrow" | "wide";
export type Color = "primary" | "secondary" | "tertiary" | "error";

export interface IconButtonProps extends ComponentProps<"button"> {
  shape?: Shape;
  size?: Size;
  variant?: Variant;
  widthType?: WidthType;
  color?: Color;
  colorConfig?: ColorConfig;
}
