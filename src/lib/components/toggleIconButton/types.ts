import type { IconButtonProps } from "@components/iconButton/types";

export type Variant = "filled" | "tonal" | "outlined" | "standard";

export interface ToggleIconButtonProps
  extends Omit<IconButtonProps, "variant" | "colorConfig"> {
  variant?: Variant;
  isSelected: boolean;
}
