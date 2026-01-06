import { useState, type FC } from "react";
import ToggleButton from "@components/toggleButton";
import type { Variant } from "@components/toggleButton/types";
import CallIn from "@icons/CallIn";
import styles from "./styles.module.css";

const variants: Variant[] = ["filled", "tonal", "outline", "elevated"];
const sizes = ["xSmall", "small", "medium", "large", "xLarge"] as const;

const ToggleButtonsList: FC = () => {
    const [selectedStates, setSelectedStates] = useState<Record<string, boolean>>({});

    const toggleSelection = (key: string) => {
        setSelectedStates(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className={styles.container}>
            {variants.map((variant) => (
                <div key={variant} className={styles.variantGroup}>
                    <span>Toggle Button - {variant}</span>

                    {/* Unselected state */}
                    <div className={styles.buttonsGroup}>
                        <span className={styles.label}>Unselected</span>
                        {sizes.map((size) => (
                            <ToggleButton
                                key={`${variant}-${size}-unselected`}
                                variant={variant}
                                size={size}
                                isSelected={false}
                            >
                                Toggle
                            </ToggleButton>
                        ))}
                        <ToggleButton variant={variant} size="medium" isSelected={false} disabled>
                            Disabled
                        </ToggleButton>
                    </div>

                    {/* Selected state */}
                    <div className={styles.buttonsGroup}>
                        <span className={styles.label}>Selected</span>
                        {sizes.map((size) => (
                            <ToggleButton
                                key={`${variant}-${size}-selected`}
                                variant={variant}
                                size={size}
                                isSelected={true}
                            >
                                Toggle
                            </ToggleButton>
                        ))}
                        <ToggleButton variant={variant} size="medium" isSelected={true} disabled>
                            Disabled
                        </ToggleButton>
                    </div>

                    {/* Interactive toggle */}
                    <div className={styles.buttonsGroup}>
                        <span className={styles.label}>Interactive</span>
                        {sizes.map((size) => {
                            const key = `${variant}-${size}-interactive`;
                            return (
                                <ToggleButton
                                    key={key}
                                    variant={variant}
                                    size={size}
                                    isSelected={selectedStates[key] ?? false}
                                    onClick={() => toggleSelection(key)}
                                >
                                    {selectedStates[key] ? "Selected" : "Click me"}
                                </ToggleButton>
                            );
                        })}
                    </div>

                    {/* With icons */}
                    <div className={styles.buttonsGroup}>
                        <span className={styles.label}>With Icons</span>
                        {sizes.map((size) => {
                            const key = `${variant}-${size}-icon`;
                            return (
                                <ToggleButton
                                    key={key}
                                    variant={variant}
                                    size={size}
                                    isSelected={selectedStates[key] ?? false}
                                    onClick={() => toggleSelection(key)}
                                    startIcon={<CallIn />}
                                >
                                    {selectedStates[key] ? "On" : "Off"}
                                </ToggleButton>
                            );
                        })}
                    </div>

                    {/* Round with icons */}
                    <div className={styles.buttonsGroup}>
                        <span className={styles.label}>Round with Icons</span>
                        {sizes.map((size) => {
                            const key = `${variant}-${size}-round`;
                            return (
                                <ToggleButton
                                    key={key}
                                    variant={variant}
                                    size={size}
                                    round
                                    isSelected={selectedStates[key] ?? false}
                                    onClick={() => toggleSelection(key)}
                                    startIcon={<CallIn />}
                                    endIcon={<CallIn />}
                                >
                                    Toggle
                                </ToggleButton>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ToggleButtonsList;