import clsx from "clsx";

export const makeClass: typeof clsx = (inputs) => {
  return clsx("matkit", inputs);
};
