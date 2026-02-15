import { useState, type FC } from "react";
import Checkbox from "@components/checkbox";
import type { CheckboxColor } from "@components/checkbox/types";
import styles from "./styles.module.css";

const colors: CheckboxColor[] = ["primary", "secondary", "tertiary", "error"];
const sizes = ["small", "medium", "large"] as const;

const CheckboxList: FC = () => {
    const [checkedStates, setCheckedStates] = useState<Record<string, boolean>>({});

    const toggleChecked = (key: string) => {
        setCheckedStates(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className={styles.container}>
            {colors.map((color) => (
                <div key={color} className={styles.variantGroup}>
                    <span>Checkbox - {color}</span>

                    {/* Unchecked state */}
                    <div className={styles.checkboxGroup}>
                        <span className={styles.label}>Unchecked</span>
                        {sizes.map((size) => (
                            <Checkbox
                                key={`${color}-${size}-unchecked`}
                                color={color}
                                size={size}
                                checked={false}
                                label={`${size} checkbox`}
                                onChange={() => {}}
                            />
                        ))}
                        <Checkbox
                            color={color}
                            size="medium"
                            checked={false}
                            disabled
                            label="Disabled"
                            onChange={() => {}}
                        />
                    </div>

                    {/* Checked state */}
                    <div className={styles.checkboxGroup}>
                        <span className={styles.label}>Checked</span>
                        {sizes.map((size) => (
                            <Checkbox
                                key={`${color}-${size}-checked`}
                                color={color}
                                size={size}
                                checked={true}
                                label={`${size} checkbox`}
                                onChange={() => {}}
                            />
                        ))}
                        <Checkbox
                            color={color}
                            size="medium"
                            checked={true}
                            disabled
                            label="Disabled"
                            onChange={() => {}}
                        />
                    </div>

                    {/* Indeterminate state */}
                    <div className={styles.checkboxGroup}>
                        <span className={styles.label}>Indeterminate</span>
                        {sizes.map((size) => (
                            <Checkbox
                                key={`${color}-${size}-indeterminate`}
                                color={color}
                                size={size}
                                checked={false}
                                indeterminate={true}
                                label={`${size} checkbox`}
                                onChange={() => {}}
                            />
                        ))}
                        <Checkbox
                            color={color}
                            size="medium"
                            checked={false}
                            indeterminate={true}
                            disabled
                            label="Disabled"
                            onChange={() => {}}
                        />
                    </div>

                    {/* Interactive */}
                    <div className={styles.checkboxGroup}>
                        <span className={styles.label}>Interactive</span>
                        {sizes.map((size) => {
                            const key = `${color}-${size}-interactive`;
                            return (
                                <Checkbox
                                    key={key}
                                    color={color}
                                    size={size}
                                    checked={checkedStates[key] ?? false}
                                    onChange={() => toggleChecked(key)}
                                    label={checkedStates[key] ? "Checked" : "Click me"}
                                />
                            );
                        })}
                    </div>

                    {/* Without label */}
                    <div className={styles.checkboxGroup}>
                        <span className={styles.label}>No Label</span>
                        {sizes.map((size) => {
                            const key = `${color}-${size}-nolabel`;
                            return (
                                <Checkbox
                                    key={key}
                                    color={color}
                                    size={size}
                                    checked={checkedStates[key] ?? false}
                                    onChange={() => toggleChecked(key)}
                                />
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CheckboxList;
