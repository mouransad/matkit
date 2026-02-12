import IconButton from "@components/iconButton";
import type { FC } from "react";
import type { ToggleIconButtonProps } from "./types";
import { getToggleIconButtonColorConfig } from "./configs";
import "./styles.css";

const ToggleIconButton: FC<ToggleIconButtonProps> = (props) => {
    const {
        variant = 'standard',
        isSelected,
        ...restProps
    } = props;

    const colorConfig = getToggleIconButtonColorConfig(variant, isSelected);

    return (
        <IconButton
            colorConfig={colorConfig}
            {...restProps}
        />
    );
};

export default ToggleIconButton;
