import type { FC, CSSProperties } from "react";
import { useRef, useId } from "react";
import { makeClass } from "@lib/sharedTools/makeClass";
import { useAccordion } from "./AccordionContext";
import { sizeConfigMap, getColorConfig } from "./configs";
import type { AccordionItemProps } from "./types";
import "./styles.css";

interface AccordionItemCSSProperties extends CSSProperties {
  "--accordion-header-padding-x"?: string;
  "--accordion-header-padding-y"?: string;
  "--accordion-content-padding-x"?: string;
  "--accordion-content-padding-y"?: string;
  "--accordion-header-font-size"?: string;
  "--accordion-subtitle-font-size"?: string;
  "--accordion-content-font-size"?: string;
  "--accordion-icon-size"?: string;
  "--accordion-border-radius"?: string;
  "--accordion-header-gap"?: string;
  "--accordion-header-background"?: string;
  "--accordion-header-color"?: string;
  "--accordion-header-hover-background"?: string;
  "--accordion-content-background"?: string;
  "--accordion-content-color"?: string;
  "--accordion-border-color"?: string;
  "--accordion-icon-color"?: string;
  "--accordion-shadow"?: string;
}

const ChevronIcon: FC<{ expanded: boolean }> = ({ expanded }) => (
  <svg
    className={makeClass("matkit__accordion-item__chevron", {
      "matkit__accordion-item__chevron--expanded": expanded,
    })}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
      fill="currentColor"
    />
  </svg>
);

const AccordionItem: FC<AccordionItemProps> = (props) => {
  const {
    itemKey,
    title,
    subtitle,
    children,
    disabled: itemDisabled,
    expandIcon,
    collapseIcon,
    slotProps,
    className,
    ...restProps
  } = props;

  const {
    expandedKeys,
    toggle,
    disabled: groupDisabled,
    color = "surface",
    size = "medium",
    variant = "filled",
  } = useAccordion();

  const contentRef = useRef<HTMLDivElement>(null);
  const headerId = useId();
  const contentId = useId();

  const isDisabled = groupDisabled || itemDisabled;
  const isExpanded = expandedKeys.includes(itemKey);

  const sizeConfig = sizeConfigMap[size];
  const colorConfig = getColorConfig(variant, color);

  const handleClick = () => {
    if (!isDisabled) {
      toggle(itemKey);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (isDisabled) return;
    
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle(itemKey);
    }
  };

  const cssVariables: AccordionItemCSSProperties = {
    "--accordion-header-padding-x": sizeConfig.headerPaddingX,
    "--accordion-header-padding-y": sizeConfig.headerPaddingY,
    "--accordion-content-padding-x": sizeConfig.contentPaddingX,
    "--accordion-content-padding-y": sizeConfig.contentPaddingY,
    "--accordion-header-font-size": sizeConfig.headerFontSize,
    "--accordion-subtitle-font-size": sizeConfig.subtitleFontSize,
    "--accordion-content-font-size": sizeConfig.contentFontSize,
    "--accordion-icon-size": sizeConfig.iconSize,
    "--accordion-border-radius": sizeConfig.borderRadius,
    "--accordion-header-gap": sizeConfig.headerGap,
    "--accordion-header-background": isDisabled
      ? colorConfig.disabledHeaderBackground
      : colorConfig.headerBackground,
    "--accordion-header-color": isDisabled
      ? colorConfig.disabledColor
      : colorConfig.headerColor,
    "--accordion-header-hover-background": colorConfig.headerHoverBackground,
    "--accordion-content-background": colorConfig.contentBackground,
    "--accordion-content-color": isDisabled
      ? colorConfig.disabledColor
      : colorConfig.contentColor,
    "--accordion-border-color": colorConfig.borderColor,
    "--accordion-icon-color": isDisabled
      ? colorConfig.disabledColor
      : colorConfig.iconColor,
    "--accordion-shadow": colorConfig.shadow,
  };

  const itemClasses = makeClass(
    "matkit__accordion-item",
    {
      "matkit__accordion-item--expanded": isExpanded,
      "matkit__accordion-item--disabled": isDisabled,
      [`matkit__accordion-item--${variant}`]: true,
    },
    className
  );

  const renderIcon = () => {
    if (isExpanded && collapseIcon) {
      return collapseIcon;
    }
    if (!isExpanded && expandIcon) {
      return expandIcon;
    }
    return <ChevronIcon expanded={isExpanded} />;
  };

  return (
    <div className={itemClasses} style={cssVariables} {...restProps}>
      <div
        id={headerId}
        className={makeClass("matkit__accordion-item__header")}
        role="button"
        tabIndex={isDisabled ? -1 : 0}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        aria-disabled={isDisabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...slotProps?.header}
      >
        <div className={makeClass("matkit__accordion-item__header-content")}>
          <span className={makeClass("matkit__accordion-item__title")}>
            {title}
          </span>
          {subtitle && (
            <span className={makeClass("matkit__accordion-item__subtitle")}>
              {subtitle}
            </span>
          )}
        </div>
        <div
          className={makeClass("matkit__accordion-item__icon")}
          {...slotProps?.iconContainer}
        >
          {renderIcon()}
        </div>
      </div>
      <div
        id={contentId}
        ref={contentRef}
        className={makeClass("matkit__accordion-item__content")}
        role="region"
        aria-labelledby={headerId}
        aria-hidden={!isExpanded}
        {...slotProps?.content}
      >
        <div className={makeClass("matkit__accordion-item__content-inner")}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
