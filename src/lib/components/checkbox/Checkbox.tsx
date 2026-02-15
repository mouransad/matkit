import type { FC, CSSProperties } from "react";
import { useRef, useEffect } from "react";
import { makeClass } from "@lib/sharedTools/makeClass";
import { getColorConfig, getSizeConfig } from "./configs";
import type { CheckboxProps } from "./types";
import "./styles.css";

interface CheckboxCSSProperties extends CSSProperties {
  "--checkbox-box-size"?: string;
  "--checkbox-icon-size"?: string;
  "--checkbox-border-radius"?: string;
  "--checkbox-state-layer-size"?: string;
  "--checkbox-label-font-size"?: string;
  "--checkbox-gap"?: string;
  "--checkbox-border-color"?: string;
  "--checkbox-checked-background"?: string;
  "--checkbox-checked-color"?: string;
  "--checkbox-hover-state-layer"?: string;
  "--checkbox-active-state-layer"?: string;
  "--checkbox-focus-state-layer"?: string;
  "--checkbox-checked-hover-state-layer"?: string;
  "--checkbox-disabled-border-color"?: string;
  "--checkbox-disabled-checked-background"?: string;
  "--checkbox-disabled-checked-color"?: string;
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
      fill="currentColor"
    />
  </svg>
);

const IndeterminateIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 13H5v-2h14v2z" fill="currentColor" />
  </svg>
);

const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    checked,
    defaultChecked,
    indeterminate = false,
    disabled = false,
    color = "primary",
    label,
    size = "medium",
    className,
    style,
    onChange,
    id,
    ...inputProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  // Handle indeterminate state via ref (can only be set via JS)
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const colorConfig = getColorConfig(color);
  const sizeConfig = getSizeConfig(size);

  const cssVariables: CheckboxCSSProperties = {
    "--checkbox-box-size": sizeConfig.boxSize,
    "--checkbox-icon-size": sizeConfig.iconSize,
    "--checkbox-border-radius": sizeConfig.borderRadius,
    "--checkbox-state-layer-size": sizeConfig.stateLayerSize,
    "--checkbox-label-font-size": sizeConfig.labelFontSize,
    "--checkbox-gap": sizeConfig.gap,
    "--checkbox-border-color": colorConfig.borderColor,
    "--checkbox-checked-background": colorConfig.checkedBackground,
    "--checkbox-checked-color": colorConfig.checkedColor,
    "--checkbox-hover-state-layer": colorConfig.hoverStateLayer,
    "--checkbox-active-state-layer": colorConfig.activeStateLayer,
    "--checkbox-focus-state-layer": colorConfig.focusStateLayer,
    "--checkbox-checked-hover-state-layer": `${colorConfig.checkedBackground.replace(")", " / 0.08)")}`,
    "--checkbox-disabled-border-color": colorConfig.disabledBorderColor,
    "--checkbox-disabled-checked-background": colorConfig.disabledCheckedBackground,
    "--checkbox-disabled-checked-color": colorConfig.disabledCheckedColor,
    ...style,
  };

  const containerClasses = makeClass(
    "matkit__checkbox",
    {
      "matkit__checkbox--disabled": disabled,
    },
    className
  );

  return (
    <label className={containerClasses} style={cssVariables}>
      <input
        ref={inputRef}
        type="checkbox"
        className="matkit__checkbox__input"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        id={id}
        data-indeterminate={indeterminate}
        {...inputProps}
      />
      <span className="matkit__checkbox__box-container">
        <span className="matkit__checkbox__state-layer" />
        <span className="matkit__checkbox__box">
          <span className="matkit__checkbox__icon">
            {indeterminate ? <IndeterminateIcon /> : <CheckIcon />}
          </span>
        </span>
      </span>
      {label && <span className="matkit__checkbox__label">{label}</span>}
    </label>
  );
};

export default Checkbox;
