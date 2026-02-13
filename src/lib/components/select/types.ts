import type { ComponentProps, ReactNode } from "react";

export type Variant = "outlined";
export type Color = "primary" | "secondary" | "tertiary";
export type Size = "small" | "medium" | "large";

export interface SelectSlotProps {
  root?: ComponentProps<"div">;
  trigger?: ComponentProps<"button">;
  label?: ComponentProps<"label">;
  helperText?: ComponentProps<"span">;
  leadingIcon?: ComponentProps<"span">;
  dropdown?: ComponentProps<"div">;
}

export interface SelectProps {
  /** Visual variant of the select */
  variant?: Variant;
  /** Color scheme */
  color?: Color;
  /** Size of the select */
  size?: Size;
  /** Label text displayed above the select */
  label?: string;
  /** Placeholder text when no option is selected */
  placeholder?: string;
  /** Helper text displayed below the select */
  helperText?: string;
  /** Error message displayed below the select (replaces helperText when present) */
  errorText?: string;
  /** Whether the field is in error state */
  error?: boolean;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Icon displayed at the start of the select */
  leadingIcon?: ReactNode;
  /** Currently selected value (controlled) */
  value?: string;
  /** Default selected value (uncontrolled) */
  defaultValue?: string;
  /** Callback when selection changes */
  onChange?: (value: string) => void;
  /** Children (Option and OptionGroup components) */
  children?: ReactNode;
  /** Props for customizing internal slots */
  slotProps?: SelectSlotProps;
  /** Additional class name */
  className?: string;
  /** Additional styles */
  style?: React.CSSProperties;
  /** ID for the select */
  id?: string;
}

export interface OptionProps {
  /** The value of the option */
  value: string;
  /** Whether the option is disabled */
  disabled?: boolean;
  /** The content to display */
  children: ReactNode;
  /** Additional class name */
  className?: string;
}

export interface OptionGroupProps {
  /** The label for the group */
  label: string;
  /** Whether all options in the group are disabled */
  disabled?: boolean;
  /** The options in this group */
  children: ReactNode;
  /** Additional class name */
  className?: string;
}

// Internal context for Select
export interface SelectContextValue {
  value: string | undefined;
  onSelect: (value: string) => void;
  highlightedValue: string | undefined;
  size: Size;
  color: Color;
}
