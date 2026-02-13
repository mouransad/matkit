import { Children, cloneElement, isValidElement } from "react";
import type { OptionGroupProps, OptionProps } from "./types";
import { makeClass } from "@lib/sharedTools/makeClass";

export const OptionGroup = ({ label, disabled = false, children, className }: OptionGroupProps) => {
  // Pass disabled state to child options
  const enhancedChildren = Children.map(children, (child) => {
    if (isValidElement<OptionProps>(child)) {
      return cloneElement(child, {
        disabled: disabled || child.props.disabled,
      });
    }
    return child;
  });

  return (
    <div
      role="group"
      aria-label={label}
      className={makeClass(
        "matkit__select__option-group",
        {
          "matkit__select__option-group--disabled": disabled,
        },
        className
      )}
    >
      <div className="matkit__select__option-group-label">{label}</div>
      {enhancedChildren}
    </div>
  );
};

OptionGroup.displayName = "OptionGroup";

export default OptionGroup;
