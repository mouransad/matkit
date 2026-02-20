import type { FC, CSSProperties } from "react";
import type { AccordionProps, AccordionSizeConfig, AccordionColorConfig } from "./types";
import { useState, useCallback, useContext, useMemo } from "react";
import Collapse from "@components/collapse";
import ChevronDown from "@lib/icons/ChevronDown";
import { makeClass } from "@lib/sharedTools/makeClass";
import { AccordionGroupContext } from "./context";
import { getSizeConfig, getColorConfig } from "./configs";
import "./styles.css";

const Accordion: FC<AccordionProps & { value?: string }> = (props) => {
  const {
    header,
    children,
    expanded: controlledExpanded,
    defaultExpanded = false,
    onChange,
    transitionDelay = 300,
    disabled = false,
    expandIcon,
    size = "medium",
    color = "primary",
    sizeConfig: propsSizeConfig,
    colorConfig: propsColorConfig,
    className = "",
    slotProps = {},
    value,
  } = props;

  const groupContext = useContext(AccordionGroupContext);

  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);

  const isControlled = controlledExpanded !== undefined;
  const isInGroup = groupContext !== null && value !== undefined;

  const sizeConfig: AccordionSizeConfig = useMemo(
    () => ({ ...getSizeConfig(size), ...propsSizeConfig }),
    [size, propsSizeConfig],
  );

  const colorConfig: AccordionColorConfig = useMemo(
    () => ({ ...getColorConfig(color), ...propsColorConfig }),
    [color, propsColorConfig],
  );

  const cssVars = useMemo<CSSProperties>(
    () => ({
      "--accordion-header-padding": sizeConfig.headerPadding,
      "--accordion-content-padding": sizeConfig.contentPadding,
      "--accordion-header-font-size": sizeConfig.headerFontSize,
      "--accordion-header-line-height": sizeConfig.headerLineHeight,
      "--accordion-header-font-weight": sizeConfig.headerFontWeight,
      "--accordion-content-font-size": sizeConfig.contentFontSize,
      "--accordion-content-line-height": sizeConfig.contentLineHeight,
      "--accordion-icon-size": sizeConfig.iconSize,
      "--accordion-border-radius": sizeConfig.borderRadius,
      "--accordion-gap": sizeConfig.gap,
      "--accordion-header-background": colorConfig.headerBackground,
      "--accordion-header-color": colorConfig.headerColor,
      "--accordion-header-hover-overlay": colorConfig.headerHoverOverlay,
      "--accordion-header-focus-overlay": colorConfig.headerFocusOverlay,
      "--accordion-header-active-overlay": colorConfig.headerActiveOverlay,
      "--accordion-content-background": colorConfig.contentBackground,
      "--accordion-content-color": colorConfig.contentColor,
      "--accordion-icon-color": colorConfig.iconColor,
      "--accordion-disabled-header-color": colorConfig.disabledHeaderColor,
      "--accordion-disabled-icon-color": colorConfig.disabledIconColor,
      "--accordion-divider-color": colorConfig.dividerColor,
      "--accordion-transition-delay": `${transitionDelay}ms`,
    } as CSSProperties),
    [sizeConfig, colorConfig, transitionDelay],
  );

  const getExpanded = useCallback(() => {
    if (isInGroup && groupContext) {
      return groupContext.isExpanded(value);
    }
    return isControlled ? controlledExpanded : internalExpanded;
  }, [isInGroup, groupContext, value, isControlled, controlledExpanded, internalExpanded]);

  const expanded = getExpanded();

  const handleToggle = useCallback(() => {
    if (disabled) return;

    if (isInGroup && groupContext) {
      groupContext.toggleAccordion(value);
      return;
    }

    const newExpanded = !expanded;

    if (!isControlled) {
      setInternalExpanded(newExpanded);
    }

    onChange?.(newExpanded);
  }, [disabled, isInGroup, groupContext, value, expanded, isControlled, onChange]);

  const renderIcon = () => {
    const icon = expandIcon ?? <ChevronDown />;

    return (
      <span
        {...slotProps.icon}
        className={makeClass(
          "matkit__accordion__icon",
          {
            "matkit__accordion__icon--expanded": expanded,
          },
          slotProps.icon?.className,
        )}
      >
        {icon}
      </span>
    );
  };

  return (
    <div
      {...slotProps.root}
      className={makeClass(
        "matkit__accordion",
        {
          [className]: !!className,
        },
        slotProps.root?.className,
      )}
      style={{
        ...cssVars,
        ...slotProps.root?.style,
      }}
    >
      <button
        type="button"
        {...slotProps.header}
        disabled={disabled}
        onClick={handleToggle}
        aria-expanded={expanded}
        className={makeClass(
          "matkit__accordion__header",
          {
            "matkit__accordion__header--disabled": disabled,
          },
          slotProps.header?.className,
        )}
      >
        <div
          {...slotProps.headerContent}
          className={makeClass(
            "matkit__accordion__header-content",
            slotProps.headerContent?.className,
          )}
        >
          {header}
        </div>
        {renderIcon()}
      </button>
      <Collapse open={expanded} transitionDelay={transitionDelay}>
        <div
          {...slotProps.content}
          className={makeClass(
            "matkit__accordion__content",
            slotProps.content?.className,
          )}
        >
          {children}
        </div>
      </Collapse>
    </div>
  );
};

export default Accordion;
