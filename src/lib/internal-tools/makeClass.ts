import clsx, { type ClassValue } from "clsx";

export const makeClass = (...inputs: ClassValue[]): string => {
  return clsx("matkit", ...inputs);
};
