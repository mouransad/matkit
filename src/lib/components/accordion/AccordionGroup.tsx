import type { FC } from "react";
import type { AccordionGroupProps, AccordionContextValue } from "./types";
import { useState, useCallback, useMemo } from "react";
import { makeClass } from "@lib/sharedTools/makeClass";
import { AccordionGroupContext } from "./context";
import "./styles.css";

const AccordionGroup: FC<AccordionGroupProps> = (props) => {
  const {
    children,
    exclusive = false,
    expanded: controlledExpanded,
    defaultExpanded,
    onChange,
    className = "",
    slotProps = {},
  } = props;

  const getInitialExpanded = (): string[] => {
    if (defaultExpanded === undefined) return [];
    return Array.isArray(defaultExpanded) ? defaultExpanded : [defaultExpanded];
  };

  const [internalExpanded, setInternalExpanded] = useState<string[]>(getInitialExpanded);

  const isControlled = controlledExpanded !== undefined;

  const getExpandedArray = useCallback((): string[] => {
    if (isControlled) {
      return Array.isArray(controlledExpanded) ? controlledExpanded : [controlledExpanded];
    }
    return internalExpanded;
  }, [isControlled, controlledExpanded, internalExpanded]);

  const isExpanded = useCallback(
    (value: string): boolean => {
      return getExpandedArray().includes(value);
    },
    [getExpandedArray],
  );

  const toggleAccordion = useCallback(
    (value: string) => {
      const currentExpanded = getExpandedArray();
      let newExpanded: string[];

      if (exclusive) {
        newExpanded = currentExpanded.includes(value) ? [] : [value];
      } else {
        newExpanded = currentExpanded.includes(value)
          ? currentExpanded.filter((v) => v !== value)
          : [...currentExpanded, value];
      }

      if (!isControlled) {
        setInternalExpanded(newExpanded);
      }

      if (onChange) {
        onChange(exclusive ? (newExpanded[0] ?? "") : newExpanded);
      }
    },
    [exclusive, getExpandedArray, isControlled, onChange],
  );

  const registerAccordion = useCallback(() => {
    // Registration logic if needed in the future
  }, []);

  const unregisterAccordion = useCallback(() => {
    // Unregistration logic if needed in the future
  }, []);

  const contextValue = useMemo<AccordionContextValue>(
    () => ({
      registerAccordion,
      unregisterAccordion,
      isExpanded,
      toggleAccordion,
    }),
    [registerAccordion, unregisterAccordion, isExpanded, toggleAccordion],
  );

  return (
    <AccordionGroupContext.Provider value={contextValue}>
      <div
        {...slotProps.root}
        className={makeClass(
          "matkit__accordion-group",
          {
            [className]: !!className,
          },
          slotProps.root?.className,
        )}
      >
        {children}
      </div>
    </AccordionGroupContext.Provider>
  );
};

export default AccordionGroup;
