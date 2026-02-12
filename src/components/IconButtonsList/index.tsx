import type { FC } from "react";
import IconButton from "@components/iconButton";
import type { IconButtonProps } from "@components/iconButton/types";
import CallIn from "@icons/CallIn";
import styles from "./styles.module.css";

const variants: IconButtonProps["variant"][] = ["filled", "tonal", "outlined", "standard"];
const sizes: IconButtonProps["size"][] = ["xSmall", "small", "medium", "large", "xLarge"];

const IconButtonsList: FC = () => {
    return (
        <div className={styles.container}>
            {variants.map((variant) => (
                <div key={variant} className={styles.variantGroup}>
                    <span>IconButton - {variant}</span>

                    {/* Round shape (default) */}
                    <div className={styles.buttonsGroup}>
                        <span className={styles.label}>Round</span>
                        {sizes.map((size) => (
                            <IconButton
                                key={`${variant}-${size}-round`}
                                variant={variant}
                                size={size}
                                shape="round"
                            >
                                <CallIn />
                            </IconButton>
                        ))}
                        <IconButton variant={variant} size="medium" shape="round" disabled>
                            <CallIn />
                        </IconButton>
                    </div>

                    {/* Square shape */}
                    <div className={styles.buttonsGroup}>
                        <span className={styles.label}>Square</span>
                        {sizes.map((size) => (
                            <IconButton
                                key={`${variant}-${size}-square`}
                                variant={variant}
                                size={size}
                                shape="square"
                            >
                                <CallIn />
                            </IconButton>
                        ))}
                        <IconButton variant={variant} size="medium" shape="square" disabled>
                            <CallIn />
                        </IconButton>
                    </div>

                    {/* Width types - narrow */}
                    <div className={styles.buttonsGroup}>
                        <span className={styles.label}>Narrow</span>
                        {sizes.map((size) => (
                            <IconButton
                                key={`${variant}-${size}-narrow`}
                                variant={variant}
                                size={size}
                                widthType="narrow"
                            >
                                <CallIn />
                            </IconButton>
                        ))}
                    </div>

                    {/* Width types - regular */}
                    <div className={styles.buttonsGroup}>
                        <span className={styles.label}>Regular</span>
                        {sizes.map((size) => (
                            <IconButton
                                key={`${variant}-${size}-regular`}
                                variant={variant}
                                size={size}
                                widthType="regular"
                            >
                                <CallIn />
                            </IconButton>
                        ))}
                    </div>

                    {/* Width types - wide */}
                    <div className={styles.buttonsGroup}>
                        <span className={styles.label}>Wide</span>
                        {sizes.map((size) => (
                            <IconButton
                                key={`${variant}-${size}-wide`}
                                variant={variant}
                                size={size}
                                widthType="wide"
                            >
                                <CallIn />
                            </IconButton>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IconButtonsList;
