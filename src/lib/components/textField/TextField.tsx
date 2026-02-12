import { forwardRef, useId, useState, type CSSProperties } from "react";
import type { TextFieldProps } from "./types";
import { colorConfigMap, sizeConfigMap } from "./configs";
import { makeClass } from "@lib/sharedTools/makeClass";
import "./styles.css";

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    const {
        variant = "outlined",
        color = "primary",
        size = "medium",
        label,
        helperText,
        errorText,
        error = false,
        disabled = false,
        leadingIcon,
        trailingIcon,
        slotProps = {},
        className,
        style,
        id: propId,
        onFocus,
        onBlur,
        value,
        defaultValue,
        ...restProps
    } = props;

    const generatedId = useId();
    const inputId = propId ?? generatedId;
    const helperId = `${inputId}-helper`;

    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(
        Boolean(value ?? defaultValue)
    );

    const colorConfig = colorConfigMap[color];
    const sizeConfig = sizeConfigMap[size];

    const isError = error || Boolean(errorText);
    const showFloatingLabel = isFocused || hasValue;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHasValue(e.target.value.length > 0);
        props.onChange?.(e);
    };

    const cssVariables = {
        // Colors
        "--tf-border-color": isError
            ? colorConfig.borderColorError
            : isFocused
                ? colorConfig.borderColorFocus
                : colorConfig.borderColor,
        "--tf-border-color-hover": isError
            ? colorConfig.borderColorError
            : colorConfig.borderColorHover,
        "--tf-label-color": isError
            ? colorConfig.labelColorError
            : isFocused
                ? colorConfig.labelColorFocus
                : colorConfig.labelColor,
        "--tf-input-color": colorConfig.inputColor,
        "--tf-input-placeholder-color": colorConfig.inputPlaceholderColor,
        "--tf-helper-color": isError
            ? colorConfig.errorTextColor
            : colorConfig.helperTextColor,
        "--tf-background-color": colorConfig.backgroundColor,
        "--tf-caret-color": colorConfig.caretColor,
        // Disabled colors
        "--tf-border-color-disabled": colorConfig.borderColorDisabled,
        "--tf-label-color-disabled": colorConfig.labelColorDisabled,
        "--tf-input-color-disabled": colorConfig.inputColorDisabled,
        // Sizes
        "--tf-height": sizeConfig.height,
        "--tf-padding-x": sizeConfig.paddingX,
        "--tf-font-size": sizeConfig.fontSize,
        "--tf-label-font-size": sizeConfig.labelFontSize,
        "--tf-helper-font-size": sizeConfig.helperFontSize,
        "--tf-icon-size": sizeConfig.iconSize,
        "--tf-border-radius": sizeConfig.borderRadius,
        "--tf-gap": sizeConfig.gap,
    } as CSSProperties;

    const rootClassName = makeClass(
        "matkit__text-field",
        `matkit__text-field--${variant}`,
        `matkit__text-field--${size}`,
        {
            "matkit__text-field--focused": isFocused,
            "matkit__text-field--error": isError,
            "matkit__text-field--disabled": disabled,
            "matkit__text-field--has-value": hasValue,
            "matkit__text-field--has-leading-icon": Boolean(leadingIcon),
            "matkit__text-field--has-trailing-icon": Boolean(trailingIcon),
        },
        className
    );

    return (
        <div
            {...slotProps.root}
            className={rootClassName}
            style={{ ...cssVariables, ...style, ...slotProps.root?.style }}
        >
            <div className="matkit__text-field__container">
                {leadingIcon && (
                    <span
                        {...slotProps.leadingIcon}
                        className={makeClass(
                            "matkit__text-field__icon",
                            "matkit__text-field__icon--leading",
                            slotProps.leadingIcon?.className
                        )}
                    >
                        {leadingIcon}
                    </span>
                )}

                <div className="matkit__text-field__input-wrapper">
                    {label && (
                        <label
                            {...slotProps.label}
                            htmlFor={inputId}
                            className={makeClass(
                                "matkit__text-field__label",
                                {
                                    "matkit__text-field__label--floating": showFloatingLabel,
                                },
                                slotProps.label?.className
                            )}
                        >
                            {label}
                        </label>
                    )}

                    <input
                        {...restProps}
                        {...slotProps.input}
                        ref={ref}
                        id={inputId}
                        disabled={disabled}
                        value={value}
                        defaultValue={defaultValue}
                        aria-invalid={isError}
                        aria-describedby={helperText || errorText ? helperId : undefined}
                        className={makeClass(
                            "matkit__text-field__input",
                            slotProps.input?.className
                        )}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>

                {trailingIcon && (
                    <span
                        {...slotProps.trailingIcon}
                        className={makeClass(
                            "matkit__text-field__icon",
                            "matkit__text-field__icon--trailing",
                            slotProps.trailingIcon?.className
                        )}
                    >
                        {trailingIcon}
                    </span>
                )}

                {/* Outlined border with notch for label */}
                <fieldset className="matkit__text-field__fieldset">
                    <legend
                        className={makeClass("matkit__text-field__legend", {
                            "matkit__text-field__legend--notched": showFloatingLabel && label,
                        })}
                    >
                        {showFloatingLabel && label && <span>{label}</span>}
                    </legend>
                </fieldset>
            </div>

            {(helperText || errorText) && (
                <span
                    {...slotProps.helperText}
                    id={helperId}
                    className={makeClass(
                        "matkit__text-field__helper-text",
                        slotProps.helperText?.className
                    )}
                >
                    {errorText ?? helperText}
                </span>
            )}
        </div>
    );
});

TextField.displayName = "TextField";

export default TextField;
