import { createContext, useContext } from "react";
import type { AccordionContextValue } from "./types";

export const AccordionContext = createContext<AccordionContextValue | null>(null);

/**
 * Hook to access Accordion context
 * @throws Error if used outside of Accordion
 */
export const useAccordion = (): AccordionContextValue => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion component");
  }
  return context;
};

/**
 * Hook to check if we're inside an Accordion (doesn't throw)
 */
export const useAccordionOptional = (): AccordionContextValue | null => {
  return useContext(AccordionContext);
};
