import { useState, type FC } from "react";
import ToggleIconButton from "@components/toggleIconButton";
import type { Variant } from "@components/toggleIconButton/types";
import CallIn from "@icons/CallIn";
import styles from "./styles.module.css";

const variants: Variant[] = ["filled", "tonal", "outlined", "standard"];
const sizes = ["xSmall", "small", "medium", "large", "xLarge"] as const;

const ToggleIconButtonsList: FC = () => {
    const [selectedStates, setSelectedStates] = useState<Record<string, boolean>>({});

    const toggleSelection = (key: string) => {
        setSelectedStates(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className={styles.container}>
            {variants.map((variant) => (
                <div key={variant} className={styles.variantGroup}>
                    <span>ToggleIconButton - {variant}</span>

                    {/* Unselected state */}
                    <div className={styles.buttonsGroup}>
                        <span className={styles.label}>Unselected</span>
                        {sizes.map((size) => (
                            <ToggleIconButton
                                key={`${variant}-${size}-unselected`}
                                variant={variant}
                                size={size}
                                isSelected={false}
                            >
                                <CallIn />
                            </ToggleIconButton>
                        ))}
                        <ToggleIconButton variant={variant} size="medium" isSelected={false} disabled>
                            <CallIn />
                        </ToggleIconButton>
                    </div>

                    {/* Selected state */}
                    <div className={styles.buttonsGroup}>
                        <span className={styles.label}>Selected</span>
                        {sizes.map((size) => (
                            <ToggleIconButton
                                key={`${variant}-${size}-selected`}
                                variant={variant}
                                size={size}
                                isSelected={true}
                            >
                                <CallIn />
                            </ToggleIconButton>
                        ))}
                        <ToggleIconButton variant={variant} size="medium" isSelected={true} disabled>
                            <CallIn />
                        </ToggleIconButton>
                    </div>

                    {/* Interactive toggle */}
                    <div className={styles.buttonsGroup}>
                        <span className={styles.label}>Interactive</span>
                        {sizes.map((size) => {
                            const key = `${variant}-${size}-interactive`;
                            return (
                                <ToggleIconButton
                                    key={key}
                                    variant={variant}
                                    size={size}
                                    isSelected={selectedStates[key] ?? false}
                                    onClick={() => toggleSelection(key)}
                                >
                                    <CallIn />
                                </ToggleIconButton>
                            );
                        })}
                    </div>

                    {/* Square shape */}
                    <div className={styles.buttonsGroup}>
                        <span className={styles.label}>Square</span>
                        {sizes.map((size) => {
                            const key = `${variant}-${size}-square`;
                            return (
                                <ToggleIconButton
                                    key={key}
                                    variant={variant}
                                    size={size}
                                    shape="square"
                                    isSelected={selectedStates[key] ?? false}
                                    onClick={() => toggleSelection(key)}
                                >
                                    <CallIn />
                                </ToggleIconButton>
                            );
                        })}
                    </div>

                    {/* Width types */}
                    <div className={styles.buttonsGroup}>
                        <span className={styles.label}>Narrow</span>
                        {sizes.map((size) => {
                            const key = `${variant}-${size}-narrow`;
                            return (
                                <ToggleIconButton
                                    key={key}
                                    variant={variant}
                                    size={size}
                                    widthType="narrow"
                                    isSelected={selectedStates[key] ?? false}
                                    onClick={() => toggleSelection(key)}
                                >
                                    <CallIn />
                                </ToggleIconButton>
                            );
                        })}
                    </div>

                    <div className={styles.buttonsGroup}>
                        <span className={styles.label}>Wide</span>
                        {sizes.map((size) => {
                            const key = `${variant}-${size}-wide`;
                            return (
                                <ToggleIconButton
                                    key={key}
                                    variant={variant}
                                    size={size}
                                    widthType="wide"
                                    isSelected={selectedStates[key] ?? false}
                                    onClick={() => toggleSelection(key)}
                                >
                                    <CallIn />
                                </ToggleIconButton>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ToggleIconButtonsList;
