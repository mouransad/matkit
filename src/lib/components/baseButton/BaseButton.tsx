import type { FC, CSSProperties } from "react";
import { makeClass } from "@lib/sharedTools/makeClass";
import "./styles.css";
import type { BaseButtonProps } from "./types";

interface BaseButtonCSSProperties extends CSSProperties {
  "--base-button-border-start-start-radius"?: string;
  "--base-button-border-start-end-radius"?: string;
  "--base-button-border-end-start-radius"?: string;
  "--base-button-border-end-end-radius"?: string;
  "--base-button-height"?: string;
  "--base-button-font-size"?: string;
  "--base-button-padding-x"?: string;
  "--base-button-gap"?: string;
  "--base-button-icon-size"?: string;
  "--base-button-min-width"?: string;
  "--base-button-background"?: string;
  "--base-button-color"?: string;
  "--base-button-hover-background"?: string;
  "--base-button-active-background"?: string;
  "--base-button-disabled-background"?: string;
  "--base-button-disabled-color"?: string;
  "--base-button-border-color"?: string;
}

const BaseButton: FC<BaseButtonProps> = (props) => {
  const {
    sizeConfig,
    colorConfig,
    children,
    className,
    style,
    disabled,
    ...buttonProps
  } = props;

  const cssVariables: BaseButtonCSSProperties = {
    "--base-button-border-start-start-radius": sizeConfig.borderRadiusStartStart,
    "--base-button-border-start-end-radius": sizeConfig.borderRadiusStartEnd,
    "--base-button-border-end-start-radius": sizeConfig.borderRadiusEndStart,
    "--base-button-border-end-end-radius": sizeConfig.borderRadiusEndEnd,
    "--base-button-height": sizeConfig.height,
    "--base-button-font-size": sizeConfig.fontSize,
    "--base-button-padding-x": sizeConfig.paddingX,
    "--base-button-gap": sizeConfig.gap,
    "--base-button-icon-size": sizeConfig.iconSize,
    "--base-button-background": colorConfig.background,
    "--base-button-color": colorConfig.color,
    "--base-button-hover-background": colorConfig.hoverBackground,
    "--base-button-active-background": colorConfig.activeBackground,
    "--base-button-disabled-background": colorConfig.disabledBackground,
    "--base-button-disabled-color": colorConfig.disabledColor,
    "--base-button-border-color": colorConfig.borderColor,
    ...style,
  };

  const buttonClasses = makeClass(
    "matkit__base-button",
    {
      "matkit__base-button--disabled": disabled,
    },
    className
  );

  return (
    <button
      className={buttonClasses}
      style={cssVariables}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default BaseButton;