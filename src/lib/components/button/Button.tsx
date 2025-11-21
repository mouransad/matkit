'use client';
import type { ComponentProps, FC } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';


const Button: FC<ComponentProps<'button'>> = ({ children, className, ...props }) => {
    return (
        <button {...props} className={clsx(styles.button, className)}>
            {children}
        </button>
    );
};

export default Button;
