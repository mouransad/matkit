import type { ComponentProps, ReactNode } from "react";

export type Variant = "filled" | "tonal" | "outlined" | "elevated" | "text";

export type Size = "xSmall" | "small" | "medium" | "large" | "xLarge";

export type Color = "primary" | "secondary" | "tertiary" | 'error';

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: Variant;
  size?: Size;
  color?: Color;
  round?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
