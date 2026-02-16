import type { ComponentProps, ReactNode } from "react";

export type AccordionColor = "primary" | "secondary" | "tertiary" | "surface";

export type AccordionSize = "small" | "medium" | "large";

export type AccordionVariant = "filled" | "outlined" | "elevated";

export interface AccordionProps extends Omit<ComponentProps<"div">, "onChange"> {
  /** Allow multiple items to be expanded simultaneously */
  multiple?: boolean;
  /** Currently expanded item keys (controlled) */
  expandedKeys?: string[];
  /** Default expanded item keys (uncontrolled) */
  defaultExpandedKeys?: string[];
  /** Callback when expansion state changes */
  onChange?: (expandedKeys: string[]) => void;
  /** Whether the entire accordion is disabled */
  disabled?: boolean;
  /** The color variant for all items */
  color?: AccordionColor;
  /** Size for all items */
  size?: AccordionSize;
  /** Visual variant */
  variant?: AccordionVariant;
  /** AccordionItem components */
  children: ReactNode;
}

export interface AccordionItemProps extends Omit<ComponentProps<"div">, "title"> {
  /** Unique identifier for this item */
  itemKey: string;
  /** Title displayed in the header */
  title: ReactNode;
  /** Optional subtitle */
  subtitle?: ReactNode;
  /** Content to display when expanded */
  children: ReactNode;
  /** Whether this item is disabled */
  disabled?: boolean;
  /** Custom expand icon */
  expandIcon?: ReactNode;
  /** Custom collapse icon */
  collapseIcon?: ReactNode;
  /** Slot props for customizing internal elements */
  slotProps?: AccordionItemSlotProps;
}

export interface AccordionItemSlotProps {
  header?: ComponentProps<"div">;
  content?: ComponentProps<"div">;
  iconContainer?: ComponentProps<"div">;
}

export interface AccordionContextValue {
  expandedKeys: string[];
  toggle: (key: string) => void;
  disabled?: boolean;
  color?: AccordionColor;
  size?: AccordionSize;
  variant?: AccordionVariant;
}

export interface AccordionColorConfig {
  /** Header background color */
  headerBackground: string;
  /** Header text color */
  headerColor: string;
  /** Header hover background */
  headerHoverBackground: string;
  /** Content background color */
  contentBackground: string;
  /** Content text color */
  contentColor: string;
  /** Border color */
  borderColor: string;
  /** Icon color */
  iconColor: string;
  /** Disabled header background */
  disabledHeaderBackground: string;
  /** Disabled text color */
  disabledColor: string;
  /** Shadow for elevated variant */
  shadow?: string;
}

export interface AccordionSizeConfig {
  /** Header padding */
  headerPaddingX: string;
  headerPaddingY: string;
  /** Content padding */
  contentPaddingX: string;
  contentPaddingY: string;
  /** Header font size */
  headerFontSize: string;
  /** Subtitle font size */
  subtitleFontSize: string;
  /** Content font size */
  contentFontSize: string;
  /** Icon size */
  iconSize: string;
  /** Border radius */
  borderRadius: string;
  /** Gap between header elements */
  headerGap: string;
}
