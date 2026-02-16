import type { FC, CSSProperties } from "react";
import { useState, useCallback, useMemo } from "react";
import { makeClass } from "@lib/sharedTools/makeClass";
import { AccordionContext } from "./AccordionContext";
import type { AccordionProps, AccordionContextValue } from "./types";
import "./styles.css";

interface AccordionCSSProperties extends CSSProperties {
  "--accordion-gap"?: string;
}

const Accordion: FC<AccordionProps> = (props) => {
  const {
    multiple = false,
    expandedKeys: controlledExpandedKeys,
    defaultExpandedKeys = [],
    onChange,
    disabled = false,
    color = "surface",
    size = "medium",
    variant = "filled",
    children,
    className,
    style,
    ...restProps
  } = props;

  // Internal state for uncontrolled mode
  const [internalExpandedKeys, setInternalExpandedKeys] =
    useState<string[]>(defaultExpandedKeys);

  // Determine if controlled or uncontrolled
  const isControlled = controlledExpandedKeys !== undefined;
  const expandedKeys = isControlled
    ? controlledExpandedKeys
    : internalExpandedKeys;

  const toggle = useCallback(
    (key: string) => {
      let newExpandedKeys: string[];

      if (expandedKeys.includes(key)) {
        // Collapse: remove the key
        newExpandedKeys = expandedKeys.filter((k) => k !== key);
      } else {
        // Expand: add the key (or replace if not multiple)
        newExpandedKeys = multiple ? [...expandedKeys, key] : [key];
      }

      if (!isControlled) {
        setInternalExpandedKeys(newExpandedKeys);
      }
      onChange?.(newExpandedKeys);
    },
    [expandedKeys, multiple, isControlled, onChange]
  );

  const contextValue: AccordionContextValue = useMemo(
    () => ({
      expandedKeys,
      toggle,
      disabled,
      color,
      size,
      variant,
    }),
    [expandedKeys, toggle, disabled, color, size, variant]
  );

  const cssVariables: AccordionCSSProperties = {
    "--accordion-gap": "0px",
  };

  const accordionClasses = makeClass(
    "matkit__accordion",
    {
      "matkit__accordion--disabled": disabled,
      [`matkit__accordion--${variant}`]: true,
    },
    className
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      <div
        className={accordionClasses}
        style={{ ...cssVariables, ...style }}
        role="presentation"
        {...restProps}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
