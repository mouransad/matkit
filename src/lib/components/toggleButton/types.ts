import type { ButtonProps } from "@components/button/types";

export type Variant = "filled" | "tonal" | "outline" | "elevated";

export interface ToggleButtonProps
  extends Omit<ButtonProps, "variant" | "color"> {
  variant?: Variant;
  isSelected: boolean;
}
