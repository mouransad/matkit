import { createContext, useContext } from "react";
import type { RadioGroupContextValue } from "./types";

export const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

/**
 * Hook to access RadioGroup context
 * Returns null if Radio is used outside of RadioGroup (standalone mode)
 */
export const useRadioGroup = (): RadioGroupContextValue | null => {
  return useContext(RadioGroupContext);
};
