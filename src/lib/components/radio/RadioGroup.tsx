import type { FC, CSSProperties } from "react";
import { useState, useCallback, useMemo } from "react";
import { makeClass } from "@lib/sharedTools/makeClass";
import { RadioGroupContext } from "./RadioGroupContext";
import type { RadioGroupProps, RadioGroupContextValue } from "./types";
import "./styles.css";

interface RadioGroupCSSProperties extends CSSProperties {
  "--radio-group-gap"?: string;
}

const RadioGroup: FC<RadioGroupProps> = (props) => {
  const {
    name,
    value: valueProp,
    defaultValue,
    onChange,
    disabled = false,
    color = "primary",
    size = "medium",
    children,
    className,
    orientation = "vertical",
    gap = "8px",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
  } = props;

  // Internal state for uncontrolled mode
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);

  // Determine if controlled or uncontrolled
  const isControlled = valueProp !== undefined;
  const currentValue = isControlled ? valueProp : internalValue;

  const handleChange = useCallback(
    (newValue: string, event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue, event);
    },
    [isControlled, onChange]
  );

  const contextValue: RadioGroupContextValue = useMemo(
    () => ({
      name,
      value: currentValue,
      onChange: handleChange,
      disabled,
      color,
      size,
    }),
    [name, currentValue, handleChange, disabled, color, size]
  );

  const cssVariables: RadioGroupCSSProperties = {
    "--radio-group-gap": gap,
  };

  const groupClasses = makeClass(
    "matkit__radio-group",
    {
      "matkit__radio-group--vertical": orientation === "vertical",
      "matkit__radio-group--horizontal": orientation === "horizontal",
    },
    className
  );

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <fieldset
        className={groupClasses}
        style={{ ...cssVariables, gap }}
        role="radiogroup"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-disabled={disabled}
      >
        {children}
      </fieldset>
    </RadioGroupContext.Provider>
  );
};

export default RadioGroup;
