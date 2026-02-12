import BaseButton from "@components/baseButton";
import type { FC } from "react";
import type { IconButtonProps } from "./types";
import { sizeConfigMap, colorConfigMap } from "./configs";
import "./styles.css";

const IconButton: FC<IconButtonProps> = (props) => {
    const {
        size = 'medium',
        variant = 'standard',
        widthType = 'regular',
        shape = 'round',
        children,
        style,
        colorConfig: propsColorConfig,
        ...restProps
    } = props;

    // Note: color prop is currently unused as colorConfigMap only has 'primary'
    const sizeConfig = sizeConfigMap[size][widthType];
    const colorConfig = propsColorConfig ?? colorConfigMap[variant].primary;

    const shapeStyles = shape === 'square' ? {
        '--border-radius-start-start': 'var(--border-radius-medium)',
        '--border-radius-start-end': 'var(--border-radius-medium)',
        '--border-radius-end-start': 'var(--border-radius-medium)',
        '--border-radius-end-end': 'var(--border-radius-medium)',
    } : {};

    return (
        <BaseButton
            colorConfig={colorConfig}
            sizeConfig={sizeConfig}
            style={{
                width: sizeConfig.width,
                ...shapeStyles,
                ...style,
            } as React.CSSProperties}
            {...restProps}
        >
            {children}
        </BaseButton>
    );
};

export default IconButton;