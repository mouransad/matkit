import type { ComponentProps, ReactNode } from "react";

export type CheckboxColor = "primary" | "secondary" | "tertiary" | "error";

export interface CheckboxProps extends Omit<ComponentProps<"input">, "type" | "size"> {
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Whether the checkbox is in indeterminate state */
  indeterminate?: boolean;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** The color of the checkbox */
  color?: CheckboxColor;
  /** Label to display next to the checkbox */
  label?: ReactNode;
  /** Size of the checkbox */
  size?: "small" | "medium" | "large";
  /** Callback when checkbox state changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxColorConfig {
  /** Unchecked border color */
  borderColor: string;
  /** Checked background color */
  checkedBackground: string;
  /** Checked checkmark color */
  checkedColor: string;
  /** Hover state layer color */
  hoverStateLayer: string;
  /** Active/pressed state layer color */
  activeStateLayer: string;
  /** Focus state layer color */
  focusStateLayer: string;
  /** Disabled border color */
  disabledBorderColor: string;
  /** Disabled checked background */
  disabledCheckedBackground: string;
  /** Disabled checked checkmark color */
  disabledCheckedColor: string;
}

export interface CheckboxSizeConfig {
  /** Size of the checkbox box */
  boxSize: string;
  /** Size of the checkmark icon */
  iconSize: string;
  /** Border radius */
  borderRadius: string;
  /** State layer size */
  stateLayerSize: string;
  /** Label font size */
  labelFontSize: string;
  /** Gap between checkbox and label */
  gap: string;
}
