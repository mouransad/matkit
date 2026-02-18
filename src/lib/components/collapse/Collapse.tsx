import type { FC } from "react";
import type { CollapseProps } from "./types";
import { useEffect, useRef, useState } from "react";
import { makeClass } from "@lib/sharedTools/makeClass";
import "./styles.css";

const Collapse: FC<CollapseProps> = (props) => {
  const {
    children,
    open,
    transitionDelay = 300,
    slotProps = {},
    className = "",
  } = props;

  const [show, setShow] = useState(open);

  const showTimeoutRef = useRef<number | null>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentsRef = useRef<HTMLDivElement>(null);

  const resizeTimeoutRef = useRef<number | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }

    showTimeoutRef.current = setTimeout(
      () => setShow(open),
      open ? 0 : transitionDelay,
    );
  }, [open, transitionDelay]);

  useEffect(() => {
    const contentsElm = contentsRef.current;

    if (!open || !contentsElm) return;

    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries.length) return;

      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        setContentHeight(entries[0].contentRect.height);
      }, 100);
    });

    resizeObserver.observe(contentsElm);

    return () => resizeObserver.disconnect();
  }, [open]);

  if (!open && !show) return null;

  const isVisible = open && show;

  return (
    <div
      {...slotProps.root}
      ref={wrapperRef}
      className={makeClass("matkit__collapse__wrapper", {
        "matkit__collapse__wrapper--open": isVisible,
        [className]: !!className,
      })}
      style={{
        "--collapse-transition-delay": `${transitionDelay}ms`,
        "--collapse-contents-height": `${isVisible ? contentHeight : 0}px`,
        ...slotProps.root?.style,
      }}
    >
      <div
        {...slotProps.content}
        ref={contentsRef}
        className={makeClass(
          "matkit__collapse__contents",
          slotProps.content?.className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
