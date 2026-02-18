import type { ComponentProps, PropsWithChildren } from "react";

export interface CollapseSlotProps {
  root?: ComponentProps<"div">;
  content?: ComponentProps<"div">;
}

export interface CollapseProps extends PropsWithChildren {
  open: boolean;
  transitionDelay?: number;
  slotProps?: CollapseSlotProps;
  className?: string;
}

