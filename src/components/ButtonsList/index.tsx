import type { FC } from "react";
import Button from "@components/button";
import type { ButtonProps } from "@components/button/types";
import CallIn from "@icons/CallIn";
import styles from "./styles.module.css";

const variants: ButtonProps["variant"][] = ["filled", "tonal", "outlined", "elevated", "text"];
const colors: ButtonProps["color"][] = ["primary", "secondary", "tertiary", "error"];
const sizes: ButtonProps["size"][] = ["xSmall", "small", "medium", "large", "xLarge"];

const ButtonsList: FC = () => {
    return (
        <div className={styles.container}>
            {variants.map((variant) =>
                colors.map((color) => (
                    <div key={`${variant}-${color}`} className={styles.variantGroup}>
                        <span>Button {variant} {color}</span>

                        {/* Default */}
                        <div className={styles.buttonsGroup}>
                            <span className={styles.label}>Default</span>
                            {sizes.map((size) => (
                                <Button
                                    key={`${variant}-${color}-${size}`}
                                    color={color}
                                    variant={variant}
                                    size={size}
                                >
                                    hello
                                </Button>
                            ))}
                            <Button color={color} variant={variant} size="xLarge" disabled>
                                hello
                            </Button>
                        </div>

                        {/* Round */}
                        <div className={styles.buttonsGroup}>
                            <span className={styles.label}>Round</span>
                            {sizes.map((size) => (
                                <Button
                                    key={`${variant}-${color}-${size}-round`}
                                    color={color}
                                    variant={variant}
                                    size={size}
                                    round
                                >
                                    hello
                                </Button>
                            ))}
                            <Button color={color} variant={variant} size="xLarge" round disabled>
                                hello
                            </Button>
                        </div>

                        {/* Start Icon */}
                        <div className={styles.buttonsGroup}>
                            <span className={styles.label}>Start Icon</span>
                            {sizes.map((size) => (
                                <Button
                                    key={`${variant}-${color}-${size}-start`}
                                    color={color}
                                    variant={variant}
                                    size={size}
                                    round
                                    startIcon={<CallIn />}
                                >
                                    hello
                                </Button>
                            ))}
                            <Button color={color} variant={variant} size="xLarge" round startIcon={<CallIn />} disabled>
                                hello
                            </Button>
                        </div>

                        {/* End Icon */}
                        <div className={styles.buttonsGroup}>
                            <span className={styles.label}>End Icon</span>
                            {sizes.map((size) => (
                                <Button
                                    key={`${variant}-${color}-${size}-end`}
                                    color={color}
                                    variant={variant}
                                    size={size}
                                    round
                                    endIcon={<CallIn />}
                                >
                                    hello
                                </Button>
                            ))}
                            <Button color={color} variant={variant} size="xLarge" round endIcon={<CallIn />} disabled>
                                hello
                            </Button>
                        </div>

                        {/* Both Icons */}
                        <div className={styles.buttonsGroup}>
                            <span className={styles.label}>Both Icons</span>
                            {sizes.map((size) => (
                                <Button
                                    key={`${variant}-${color}-${size}-both`}
                                    color={color}
                                    variant={variant}
                                    size={size}
                                    round
                                    startIcon={<CallIn />}
                                    endIcon={<CallIn />}
                                >
                                    hello
                                </Button>
                            ))}
                            <Button
                                color={color}
                                variant={variant}
                                size="xLarge"
                                round
                                startIcon={<CallIn />}
                                endIcon={<CallIn />}
                                disabled
                            >
                                hello
                            </Button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ButtonsList;
