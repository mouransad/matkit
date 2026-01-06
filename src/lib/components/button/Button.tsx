import type { FC } from "react";
import type { ButtonProps } from "./types";
import BaseButton from "@components/baseButton";
import { sizeConfigMap, getColorConfig } from "./configs";


const Button: FC<ButtonProps> = (props) => {
    const {
        color = 'primary',
        size = 'medium',
        variant = 'filled',
        round = false,
        startIcon,
        endIcon,
        children,
        ...restProps
    } = props;

    const { borderRadiusEndEnd, borderRadiusEndStart, borderRadiusStartEnd, borderRadiusStartStart, ...restSizeConfig } = sizeConfigMap[size];
    const colorConfig = getColorConfig(variant, color);

    return (
        <BaseButton
            colorConfig={colorConfig}
            sizeConfig={{
                ...restSizeConfig,
                borderRadiusEndEnd: round ? 'var(--border-radius-full)' : borderRadiusEndEnd,
                borderRadiusEndStart: round ? 'var(--border-radius-full)' : borderRadiusEndStart,
                borderRadiusStartEnd: round ? 'var(--border-radius-full)' : borderRadiusStartEnd,
                borderRadiusStartStart: round ? 'var(--border-radius-full)' : borderRadiusStartStart,
            }}
            {...restProps}
        >
            {startIcon}
            {children && <span>{children}</span>}
            {endIcon}
        </BaseButton>
    );
};

export default Button;