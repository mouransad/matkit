import type { ComponentProps, ReactNode } from "react";

export type Variant = "outlined";
export type Color = "primary" | "secondary" | "tertiary";
export type Size = "small" | "medium" | "large";

export interface TextFieldSlotProps {
  root?: ComponentProps<"div">;
  input?: ComponentProps<"input">;
  textarea?: ComponentProps<"textarea">;
  label?: ComponentProps<"label">;
  helperText?: ComponentProps<"span">;
  leadingIcon?: ComponentProps<"span">;
  trailingIcon?: ComponentProps<"span">;
}

type BaseTextFieldProps = {
  /** Visual variant of the text field */
  variant?: Variant;
  /** Color scheme */
  color?: Color;
  /** Size of the text field */
  size?: Size;
  /** Label text displayed above the input */
  label?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message displayed below the input (replaces helperText when present) */
  errorText?: string;
  /** Whether the field is in error state */
  error?: boolean;
  /** Icon displayed at the start of the input */
  leadingIcon?: ReactNode;
  /** Icon displayed at the end of the input */
  trailingIcon?: ReactNode;
  /** Props for customizing internal slots */
  slotProps?: TextFieldSlotProps;
};

export type TextFieldProps =
  | (BaseTextFieldProps &
      Omit<ComponentProps<"input">, "size" | "color"> & {
        /** Whether the field should render as a textarea */
        multiline?: false;
      })
  | (BaseTextFieldProps &
      Omit<ComponentProps<"textarea">, "size" | "color"> & {
        /** Whether the field should render as a textarea */
        multiline: true;
        /** Number of rows for the textarea */
        rows?: number;
      });
