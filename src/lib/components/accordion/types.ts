import type { ComponentProps, PropsWithChildren, ReactNode } from "react";

export type Size = "small" | "medium" | "large";

export type Color = "primary" | "secondary" | "error";

export interface AccordionSizeConfig {
  headerPadding: string;
  contentPadding: string;
  headerFontSize: string;
  headerLineHeight: string;
  headerFontWeight: string;
  contentFontSize: string;
  contentLineHeight: string;
  iconSize: string;
  borderRadius: string;
  gap: string;
}

export interface AccordionColorConfig {
  headerBackground: string;
  headerColor: string;
  headerHoverOverlay: string;
  headerFocusOverlay: string;
  headerActiveOverlay: string;
  contentBackground: string;
  contentColor: string;
  iconColor: string;
  disabledHeaderColor: string;
  disabledIconColor: string;
  dividerColor: string;
}

export interface AccordionSlotProps {
  root?: ComponentProps<"div">;
  header?: ComponentProps<"button">;
  headerContent?: ComponentProps<"div">;
  icon?: ComponentProps<"span">;
  content?: ComponentProps<"div">;
}

export interface AccordionProps extends PropsWithChildren {
  /** The header/title content of the accordion */
  header: ReactNode;
  /** Whether the accordion is expanded */
  expanded?: boolean;
  /** Default expanded state for uncontrolled usage */
  defaultExpanded?: boolean;
  /** Callback fired when the expanded state changes */
  onChange?: (expanded: boolean) => void;
  /** Transition delay in milliseconds */
  transitionDelay?: number;
  /** Whether the accordion is disabled */
  disabled?: boolean;
  /** Custom expand icon */
  expandIcon?: ReactNode;
  /** Accordion size */
  size?: Size;
  /** Accordion color */
  color?: Color;
  /** Custom size config to override defaults */
  sizeConfig?: Partial<AccordionSizeConfig>;
  /** Custom color config to override defaults */
  colorConfig?: Partial<AccordionColorConfig>;
  /** Additional class name */
  className?: string;
  /** Slot props for customizing internal elements */
  slotProps?: AccordionSlotProps;
}

export interface AccordionGroupSlotProps {
  root?: ComponentProps<"div">;
}

export interface AccordionGroupProps extends PropsWithChildren {
  /** Whether only one accordion can be expanded at a time */
  exclusive?: boolean;
  /** The value(s) of the currently expanded accordion(s) in controlled mode */
  expanded?: string | string[];
  /** Default expanded value(s) for uncontrolled usage */
  defaultExpanded?: string | string[];
  /** Callback fired when expanded state changes */
  onChange?: (expanded: string | string[]) => void;
  /** Additional class name */
  className?: string;
  /** Slot props for customizing internal elements */
  slotProps?: AccordionGroupSlotProps;
}

export interface AccordionContextValue {
  registerAccordion: (value: string) => void;
  unregisterAccordion: (value: string) => void;
  isExpanded: (value: string) => boolean;
  toggleAccordion: (value: string) => void;
}
