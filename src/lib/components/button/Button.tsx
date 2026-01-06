import type { FC } from "react";
import type { ButtonProps } from "./types";
import BaseButton from "@components/baseButton";
import { sizeConfigMap, getColorConfig } from "./configs";
import { makeClass } from "@lib/sharedTools/makeClass";
import './styles.css'

const Button: FC<ButtonProps> = (props) => {
    const {
        color = 'primary',
        size = 'medium',
        variant = 'filled',
        round = false,
        startIcon,
        endIcon,
        children,
        sizeConfig: propsSizeConfig,
        colorConfig: propsColorConfig,
        ...restProps
    } = props;

    const sizeConfig = {
        ...sizeConfigMap[size],
        ...propsSizeConfig
    };
    const colorConfig = {
        ...getColorConfig(variant, color),
        ...propsColorConfig
    };

    return (
        <BaseButton
            colorConfig={colorConfig}
            sizeConfig={sizeConfig}
            className={makeClass({ ['matkit__button--round']: round })}
            {...restProps}
        >
            {startIcon}
            {children && <span>{children}</span>}
            {endIcon}
        </BaseButton>
    );
};

export default Button;