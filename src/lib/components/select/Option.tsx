import { useContext } from "react";
import type { OptionProps } from "./types";
import { SelectContext } from "./SelectContext";
import { makeClass } from "@lib/sharedTools/makeClass";

export const Option = ({ value, disabled = false, children, className }: OptionProps) => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error("Option must be used within a Select component");
  }

  const { value: selectedValue, onSelect, highlightedValue } = context;
  const isSelected = selectedValue === value;
  const isHighlighted = highlightedValue === value;

  const handleClick = () => {
    if (!disabled) {
      onSelect(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!disabled) {
        onSelect(value);
      }
    }
  };

  return (
    <div
      role="option"
      aria-selected={isSelected}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={makeClass(
        "matkit__select__option",
        {
          "matkit__select__option--selected": isSelected,
          "matkit__select__option--highlighted": isHighlighted,
          "matkit__select__option--disabled": disabled,
        },
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      data-value={value}
    >
      {children}
    </div>
  );
};

Option.displayName = "Option";

export default Option;
