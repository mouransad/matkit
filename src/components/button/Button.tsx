'use client';
import { ComponentProps, FC } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

interface PropTypes extends ComponentProps<'button'> { }

const Button: FC<PropTypes> = ({ children, className, ...props }) => {
    return (
        <button {...props} className={clsx(styles.button, className)}>
            {children}
        </button>
    );
};

export default Button;
