import Button from "@components/button";
import type { FC } from "react";
import type { ToggleButtonProps } from "./types";
import { getToggleButtonColorConfig } from "./configs";

const ToggleButton: FC<ToggleButtonProps> = (props) => {
    const {
        variant = 'filled',
        isSelected,
        ...restProps
    } = props;

    const colorConfig = getToggleButtonColorConfig(variant, isSelected)

    return (
        <Button {...restProps} colorConfig={colorConfig} />
    )
}

export default ToggleButton;