import {
  useState,
  useRef,
  useEffect,
  useId,
  useCallback,
  Children,
  isValidElement,
  type CSSProperties,
} from "react";
import type { SelectProps, OptionProps, OptionGroupProps, SelectContextValue } from "./types";
import { SelectContext } from "./SelectContext";
import { colorConfigMap, sizeConfigMap } from "./configs";
import { makeClass } from "@lib/internal-tools/makeClass";
import "./styles.css";

// Chevron down icon
const ChevronIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// Helper to extract all options from children (including nested in groups)
function extractOptions(
  children: React.ReactNode
): Array<{ value: string; label: React.ReactNode; disabled: boolean }> {
  const options: Array<{ value: string; label: React.ReactNode; disabled: boolean }> = [];

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;

    // Check if it's an Option
    if ((child.type as { displayName?: string }).displayName === "Option") {
      const props = child.props as OptionProps;
      options.push({
        value: props.value,
        label: props.children,
        disabled: props.disabled ?? false,
      });
    }
    // Check if it's an OptionGroup
    else if ((child.type as { displayName?: string }).displayName === "OptionGroup") {
      const props = child.props as OptionGroupProps;
      const groupDisabled = props.disabled ?? false;

      Children.forEach(props.children, (groupChild) => {
        if (
          isValidElement(groupChild) &&
          (groupChild.type as { displayName?: string }).displayName === "Option"
        ) {
          const optionProps = groupChild.props as OptionProps;
          options.push({
            value: optionProps.value,
            label: optionProps.children,
            disabled: groupDisabled || (optionProps.disabled ?? false),
          });
        }
      });
    }
  });

  return options;
}

export const Select = (props: SelectProps) => {
  const {
    variant = "outlined",
    color = "primary",
    size = "medium",
    label,
    placeholder = "Select...",
    helperText,
    errorText,
    error = false,
    disabled = false,
    leadingIcon,
    value: controlledValue,
    defaultValue,
    onChange,
    children,
    slotProps = {},
    className,
    style,
    id: propId,
  } = props;

  const generatedId = useId();
  const selectId = propId ?? generatedId;
  const helperId = `${selectId}-helper`;
  const listboxId = `${selectId}-listbox`;

  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [searchString, setSearchString] = useState("");
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const colorConfig = colorConfigMap[color];
  const sizeConfig = sizeConfigMap[size];
  const isError = error || Boolean(errorText);

  const options = extractOptions(children);
  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = useCallback(
    (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
      setIsOpen(false);
      triggerRef.current?.focus();
    },
    [isControlled, onChange]
  );

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
      if (!isOpen) {
        // Find current value index
        const idx = options.findIndex((opt) => opt.value === value);
        setHighlightedIndex(idx >= 0 ? idx : 0);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        if (isOpen && highlightedIndex >= 0) {
          const option = options[highlightedIndex];
          if (option && !option.disabled) {
            handleSelect(option.value);
          }
        } else {
          setIsOpen(true);
        }
        break;

      case "ArrowDown":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setHighlightedIndex((prev) => {
            let next = prev + 1;
            while (next < options.length && options[next].disabled) {
              next++;
            }
            return next < options.length ? next : prev;
          });
        }
        break;

      case "ArrowUp":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setHighlightedIndex((prev) => {
            let next = prev - 1;
            while (next >= 0 && options[next].disabled) {
              next--;
            }
            return next >= 0 ? next : prev;
          });
        }
        break;

      case "Home":
        e.preventDefault();
        if (isOpen) {
          const firstEnabled = options.findIndex((opt) => !opt.disabled);
          if (firstEnabled >= 0) setHighlightedIndex(firstEnabled);
        }
        break;

      case "End":
        e.preventDefault();
        if (isOpen) {
          for (let i = options.length - 1; i >= 0; i--) {
            if (!options[i].disabled) {
              setHighlightedIndex(i);
              break;
            }
          }
        }
        break;

      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;

      case "Tab":
        if (isOpen) {
          setIsOpen(false);
        }
        break;

      default:
        // Type-to-search
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
          if (searchTimeoutRef.current) {
            clearTimeout(searchTimeoutRef.current);
          }
          const newSearch = searchString + e.key.toLowerCase();
          setSearchString(newSearch);

          const matchIndex = options.findIndex(
            (opt) =>
              !opt.disabled &&
              String(opt.label).toLowerCase().startsWith(newSearch)
          );

          if (matchIndex >= 0) {
            setHighlightedIndex(matchIndex);
            if (!isOpen) {
              handleSelect(options[matchIndex].value);
            }
          }

          searchTimeoutRef.current = setTimeout(() => {
            setSearchString("");
          }, 500);
        }
        break;
    }
  };

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Calculate and update dropdown position
  const updateDropdownPosition = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 4, // 4px gap
        left: rect.left,
        width: rect.width,
      });
    }
  }, []);

  // Update position when open, and on scroll/resize
  useEffect(() => {
    if (!isOpen) return;

    updateDropdownPosition();

    const handleScrollOrResize = () => {
      updateDropdownPosition();
    };

    window.addEventListener("scroll", handleScrollOrResize, true);
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize, true);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [isOpen, updateDropdownPosition]);

  // Scroll highlighted option into view
  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && dropdownRef.current) {
      const options = dropdownRef.current.querySelectorAll('[role="option"]');
      const highlighted = options[highlightedIndex] as HTMLElement | undefined;
      highlighted?.scrollIntoView({ block: "nearest" });
    }
  }, [isOpen, highlightedIndex]);

  const cssVariables = {
    // Colors
    "--sel-border-color": isError
      ? colorConfig.borderColorError
      : isOpen
        ? colorConfig.borderColorFocus
        : colorConfig.borderColor,
    "--sel-border-color-hover": isError
      ? colorConfig.borderColorError
      : colorConfig.borderColorHover,
    "--sel-label-color": isError
      ? colorConfig.labelColorError
      : isOpen
        ? colorConfig.labelColorFocus
        : colorConfig.labelColor,
    "--sel-value-color": colorConfig.valueColor,
    "--sel-placeholder-color": colorConfig.placeholderColor,
    "--sel-helper-color": isError
      ? colorConfig.errorTextColor
      : colorConfig.helperTextColor,
    "--sel-background-color": colorConfig.backgroundColor,
    // Disabled colors
    "--sel-border-color-disabled": colorConfig.borderColorDisabled,
    "--sel-label-color-disabled": colorConfig.labelColorDisabled,
    "--sel-value-color-disabled": colorConfig.valueColorDisabled,
    // Dropdown
    "--sel-dropdown-background": colorConfig.dropdownBackground,
    "--sel-dropdown-shadow": colorConfig.dropdownShadow,
    // Option
    "--sel-option-hover-bg": colorConfig.optionHoverBackground,
    "--sel-option-selected-bg": colorConfig.optionSelectedBackground,
    "--sel-option-selected-color": colorConfig.optionSelectedColor,
    // Sizes
    "--sel-height": sizeConfig.height,
    "--sel-padding-x": sizeConfig.paddingX,
    "--sel-font-size": sizeConfig.fontSize,
    "--sel-label-font-size": sizeConfig.labelFontSize,
    "--sel-helper-font-size": sizeConfig.helperFontSize,
    "--sel-icon-size": sizeConfig.iconSize,
    "--sel-border-radius": sizeConfig.borderRadius,
    "--sel-gap": sizeConfig.gap,
    "--sel-option-padding-y": sizeConfig.optionPaddingY,
  } as CSSProperties;

  const rootClassName = makeClass(
    "matkit__select",
    `matkit__select--${variant}`,
    `matkit__select--${size}`,
    {
      "matkit__select--open": isOpen,
      "matkit__select--error": isError,
      "matkit__select--disabled": disabled,
      "matkit__select--has-leading-icon": Boolean(leadingIcon),
      "matkit__select--has-value": Boolean(value),
    },
    className
  );

  const highlightedValue = highlightedIndex >= 0 ? options[highlightedIndex]?.value : undefined;

  const contextValue: SelectContextValue = {
    value,
    onSelect: handleSelect,
    highlightedValue,
    size,
    color,
  };

  return (
    <SelectContext.Provider value={contextValue}>
      <div
        {...slotProps.root}
        className={rootClassName}
        style={{ ...cssVariables, ...style, ...slotProps.root?.style }}
      >
        {label && (
          <label
            {...slotProps.label}
            htmlFor={selectId}
            className={makeClass("matkit__select__label", slotProps.label?.className)}
          >
            {label}
          </label>
        )}

        <div className="matkit__select__trigger-wrapper">
          <button
            {...slotProps.trigger}
            ref={triggerRef}
            type="button"
            id={selectId}
            disabled={disabled}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-controls={listboxId}
            aria-describedby={helperText || errorText ? helperId : undefined}
            className={makeClass("matkit__select__trigger", slotProps.trigger?.className)}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
          >
            {leadingIcon && (
              <span
                {...slotProps.leadingIcon}
                className={makeClass(
                  "matkit__select__icon",
                  "matkit__select__icon--leading",
                  slotProps.leadingIcon?.className
                )}
              >
                {leadingIcon}
              </span>
            )}

            <span
              className={makeClass("matkit__select__value", {
                "matkit__select__value--placeholder": !selectedOption,
              })}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>

            <span className="matkit__select__icon matkit__select__icon--chevron">
              <ChevronIcon />
            </span>
          </button>
        </div>

        {isOpen && (
          <div
            {...slotProps.dropdown}
            ref={dropdownRef}
            role="listbox"
            id={listboxId}
            aria-activedescendant={
              highlightedIndex >= 0 ? `${selectId}-option-${highlightedIndex}` : undefined
            }
            className={makeClass("matkit__select__dropdown", slotProps.dropdown?.className)}
            style={{
              position: "fixed",
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              width: dropdownPosition.width,
              ...slotProps.dropdown?.style,
            }}
          >
            {children}
          </div>
        )}

        {(helperText || errorText) && (
          <span
            {...slotProps.helperText}
            id={helperId}
            className={makeClass("matkit__select__helper-text", slotProps.helperText?.className)}
          >
            {errorText ?? helperText}
          </span>
        )}
      </div>
    </SelectContext.Provider>
  );
};

Select.displayName = "Select";

export default Select;
