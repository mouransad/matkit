import type { BaseButtonProps } from "@components/baseButton/types";
import type { ComponentProps, ReactNode } from "react";

export type Variant = "filled" | "tonal" | "outlined" | "elevated" | "text";

export type Size = "xSmall" | "small" | "medium" | "large" | "xLarge";

export type Color = "primary" | "secondary" | "tertiary" | "error";

export interface ButtonProps
  extends ComponentProps<"button">,
    Partial<Pick<BaseButtonProps, "sizeConfig" | "colorConfig">> {
  /**
   * this is the variant of the button
   */
  variant?: Variant;

  /**
   * this is the size of the button
   */
  size?: Size;

  /**
   * this is the color of the button
   */
  color?: Color;

  /**
   * if true, the button will have a circular shape, otherwise it will have a rectangular shape. This is only applicable for the filled and tonal variants.
   */
  round?: boolean;

  /**
   * the icon to be displayed at the start of the button, it can be any React node, such as an SVG or an icon component. This is only applicable for the filled and tonal variants.
   */
  startIcon?: ReactNode;

  /**
   * the icon to be displayed at the end of the button, it can be any React node, such as an SVG or an icon component. This is only applicable for the filled and tonal variants.
   */
  endIcon?: ReactNode;
}
