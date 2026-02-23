import type { FC, CSSProperties } from "react";
import { makeClass } from "@lib/internal-tools/makeClass";
import { getColorConfig, getSizeConfig } from "./configs";
import { useRadioGroup } from "./RadioGroupContext";
import type { RadioProps } from "./types";
import "./styles.css";

interface RadioCSSProperties extends CSSProperties {
  "--radio-outer-size"?: string;
  "--radio-inner-size"?: string;
  "--radio-border-width"?: string;
  "--radio-state-layer-size"?: string;
  "--radio-label-font-size"?: string;
  "--radio-gap"?: string;
  "--radio-border-color"?: string;
  "--radio-checked-border-color"?: string;
  "--radio-checked-dot-color"?: string;
  "--radio-hover-state-layer"?: string;
  "--radio-active-state-layer"?: string;
  "--radio-focus-state-layer"?: string;
  "--radio-checked-hover-state-layer"?: string;
  "--radio-disabled-border-color"?: string;
  "--radio-disabled-checked-border-color"?: string;
  "--radio-disabled-checked-dot-color"?: string;
}

const Radio: FC<RadioProps> = (props) => {
  const radioGroup = useRadioGroup();

  const {
    value,
    checked: checkedProp,
    disabled: disabledProp,
    color: colorProp,
    label,
    size: sizeProp,
    className,
    style,
    onChange: onChangeProp,
    name: nameProp,
    ...inputProps
  } = props;

  // Merge props with RadioGroup context (props take precedence for certain values)
  const name = nameProp ?? radioGroup?.name;
  const disabled = disabledProp ?? radioGroup?.disabled ?? false;
  const color = colorProp ?? radioGroup?.color ?? "primary";
  const size = sizeProp ?? radioGroup?.size ?? "medium";

  // Determine checked state
  const checked = checkedProp ?? (radioGroup?.value !== undefined ? radioGroup.value === value : undefined);

  // Handle change event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeProp?.(event);
    radioGroup?.onChange?.(value, event);
  };

  const colorConfig = getColorConfig(color);
  const sizeConfig = getSizeConfig(size);

  const cssVariables: RadioCSSProperties = {
    "--radio-outer-size": sizeConfig.outerSize,
    "--radio-inner-size": sizeConfig.innerSize,
    "--radio-border-width": sizeConfig.borderWidth,
    "--radio-state-layer-size": sizeConfig.stateLayerSize,
    "--radio-label-font-size": sizeConfig.labelFontSize,
    "--radio-gap": sizeConfig.gap,
    "--radio-border-color": colorConfig.borderColor,
    "--radio-checked-border-color": colorConfig.checkedBorderColor,
    "--radio-checked-dot-color": colorConfig.checkedDotColor,
    "--radio-hover-state-layer": colorConfig.hoverStateLayer,
    "--radio-active-state-layer": colorConfig.activeStateLayer,
    "--radio-focus-state-layer": colorConfig.focusStateLayer,
    "--radio-checked-hover-state-layer": `${colorConfig.checkedDotColor.replace(")", " / 0.08)")}`,
    "--radio-disabled-border-color": colorConfig.disabledBorderColor,
    "--radio-disabled-checked-border-color": colorConfig.disabledCheckedBorderColor,
    "--radio-disabled-checked-dot-color": colorConfig.disabledCheckedDotColor,
    ...style,
  };

  const containerClasses = makeClass(
    "matkit__radio",
    {
      "matkit__radio--disabled": disabled,
    },
    className
  );

  return (
    <label className={containerClasses} style={cssVariables}>
      <input
        type="radio"
        className="matkit__radio__input"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        {...inputProps}
      />
      <span className="matkit__radio__circle-container">
        <span className="matkit__radio__state-layer" />
        <span className="matkit__radio__outer-circle">
          <span className="matkit__radio__inner-dot" />
        </span>
      </span>
      {label && <span className="matkit__radio__label">{label}</span>}
    </label>
  );
};

export default Radio;
