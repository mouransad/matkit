import type { ComponentProps, ReactNode } from "react";

export type RadioColor = "primary" | "secondary" | "tertiary" | "error";

export type RadioSize = "small" | "medium" | "large";

export interface RadioProps extends Omit<ComponentProps<"input">, "type" | "size"> {
  /** The value of the radio button */
  value: string;
  /** Whether the radio is checked (controlled) */
  checked?: boolean;
  /** Whether the radio is disabled */
  disabled?: boolean;
  /** The color of the radio */
  color?: RadioColor;
  /** Label to display next to the radio */
  label?: ReactNode;
  /** Size of the radio */
  size?: RadioSize;
  /** Callback when radio state changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioGroupProps {
  /** The name for all radio inputs in the group */
  name: string;
  /** Currently selected value (controlled) */
  value?: string;
  /** Default selected value (uncontrolled) */
  defaultValue?: string;
  /** Callback when selection changes */
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Whether the entire group is disabled */
  disabled?: boolean;
  /** The color for all radios in the group */
  color?: RadioColor;
  /** Size for all radios in the group */
  size?: RadioSize;
  /** Radio components */
  children: ReactNode;
  /** Additional class name */
  className?: string;
  /** Layout direction */
  orientation?: "horizontal" | "vertical";
  /** Gap between radio items */
  gap?: string;
  /** Accessible label for the radio group */
  "aria-label"?: string;
  /** ID of element that labels the radio group */
  "aria-labelledby"?: string;
}

export interface RadioGroupContextValue {
  name: string;
  value?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  color?: RadioColor;
  size?: RadioSize;
}

export interface RadioColorConfig {
  /** Unchecked border color */
  borderColor: string;
  /** Checked outer circle color */
  checkedBorderColor: string;
  /** Checked inner dot color */
  checkedDotColor: string;
  /** Hover state layer color */
  hoverStateLayer: string;
  /** Active/pressed state layer color */
  activeStateLayer: string;
  /** Focus state layer color */
  focusStateLayer: string;
  /** Disabled border color */
  disabledBorderColor: string;
  /** Disabled checked border color */
  disabledCheckedBorderColor: string;
  /** Disabled checked dot color */
  disabledCheckedDotColor: string;
}

export interface RadioSizeConfig {
  /** Outer circle size */
  outerSize: string;
  /** Inner dot size */
  innerSize: string;
  /** Border width */
  borderWidth: string;
  /** State layer size */
  stateLayerSize: string;
  /** Label font size */
  labelFontSize: string;
  /** Gap between radio and label */
  gap: string;
}
