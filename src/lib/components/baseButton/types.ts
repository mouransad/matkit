import type { ComponentProps } from "react";

export interface SizeConfig {
  borderRadiusStartStart: string;
  borderRadiusStartEnd: string;
  borderRadiusEndStart: string;
  borderRadiusEndEnd: string;
  height: string;
  fontSize: string;
  paddingX: string;
  gap: string;
  iconSize: string;
  minWidth: string;
}

export interface ColorConfig {
  background: string;
  color: string;
  hoverBackground: string;
  activeBackground: string;
  disabledBackground: string;
  disabledColor: string;
  borderColor: string;
}

/** Base button props interface */
export interface BaseButtonProps extends ComponentProps<"button"> {
  sizeConfig: SizeConfig;
  colorConfig: ColorConfig;
}
