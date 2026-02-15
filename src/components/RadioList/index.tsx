import { useState, type FC } from "react";
import { Radio, RadioGroup } from "@components/radio";
import type { RadioColor, RadioSize } from "@components/radio/types";
import styles from "./styles.module.css";

const colors: RadioColor[] = ["primary", "secondary", "tertiary", "error"];
const sizes: RadioSize[] = ["small", "medium", "large"];

const RadioList: FC = () => {
    const [selectedValues, setSelectedValues] = useState<Record<string, string>>({});

    const handleChange = (groupKey: string) => (value: string) => {
        setSelectedValues(prev => ({ ...prev, [groupKey]: value }));
    };

    return (
        <div className={styles.container}>
            {colors.map((color) => (
                <div key={color} className={styles.variantGroup}>
                    <span>Radio - {color}</span>

                    {/* Unselected state */}
                    <div className={styles.radioGroup}>
                        <span className={styles.label}>Unselected</span>
                        {sizes.map((size) => (
                            <Radio
                                key={`${color}-${size}-unselected`}
                                name={`${color}-${size}-unselected`}
                                value="option"
                                color={color}
                                size={size}
                                checked={false}
                                label={`${size} radio`}
                                onChange={() => {}}
                            />
                        ))}
                        <Radio
                            name={`${color}-disabled-unselected`}
                            value="option"
                            color={color}
                            size="medium"
                            checked={false}
                            disabled
                            label="Disabled"
                            onChange={() => {}}
                        />
                    </div>

                    {/* Selected state */}
                    <div className={styles.radioGroup}>
                        <span className={styles.label}>Selected</span>
                        {sizes.map((size) => (
                            <Radio
                                key={`${color}-${size}-selected`}
                                name={`${color}-${size}-selected`}
                                value="option"
                                color={color}
                                size={size}
                                checked={true}
                                label={`${size} radio`}
                                onChange={() => {}}
                            />
                        ))}
                        <Radio
                            name={`${color}-disabled-selected`}
                            value="option"
                            color={color}
                            size="medium"
                            checked={true}
                            disabled
                            label="Disabled"
                            onChange={() => {}}
                        />
                    </div>

                    {/* Interactive RadioGroup */}
                    <div className={styles.radioGroup}>
                        <span className={styles.label}>Interactive Group</span>
                        {sizes.map((size) => {
                            const groupKey = `${color}-${size}-group`;
                            return (
                                <RadioGroup
                                    key={groupKey}
                                    name={groupKey}
                                    value={selectedValues[groupKey]}
                                    onChange={handleChange(groupKey)}
                                    color={color}
                                    size={size}
                                    orientation="horizontal"
                                    gap="0"
                                >
                                    <Radio value="a" label="A" />
                                    <Radio value="b" label="B" />
                                    <Radio value="c" label="C" />
                                </RadioGroup>
                            );
                        })}
                    </div>

                    {/* Vertical RadioGroup */}
                    <div className={styles.radioGroup}>
                        <span className={styles.label}>Vertical Group</span>
                        {(() => {
                            const groupKey = `${color}-vertical`;
                            return (
                                <RadioGroup
                                    name={groupKey}
                                    value={selectedValues[groupKey]}
                                    onChange={handleChange(groupKey)}
                                    color={color}
                                    size="medium"
                                    orientation="vertical"
                                    gap="4px"
                                >
                                    <Radio value="option1" label="Option 1" />
                                    <Radio value="option2" label="Option 2" />
                                    <Radio value="option3" label="Option 3" />
                                </RadioGroup>
                            );
                        })()}
                    </div>

                    {/* Without labels */}
                    <div className={styles.radioGroup}>
                        <span className={styles.label}>No Labels</span>
                        {(() => {
                            const groupKey = `${color}-no-label`;
                            return (
                                <RadioGroup
                                    name={groupKey}
                                    value={selectedValues[groupKey]}
                                    onChange={handleChange(groupKey)}
                                    color={color}
                                    size="medium"
                                    orientation="horizontal"
                                    gap="0"
                                >
                                    <Radio value="1" />
                                    <Radio value="2" />
                                    <Radio value="3" />
                                </RadioGroup>
                            );
                        })()}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RadioList;
