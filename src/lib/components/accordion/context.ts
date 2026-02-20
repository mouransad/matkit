import { createContext } from "react";
import type { AccordionContextValue } from "./types";

export const AccordionGroupContext = createContext<AccordionContextValue | null>(null);
