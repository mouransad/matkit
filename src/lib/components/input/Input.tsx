import type { ComponentProps, FC } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

const Input: FC<ComponentProps<'input'>> = ({ children, className, ...otherProps }) => {
    return (
        <input className={clsx(styles.input, className)}  {...otherProps}>
            {children}
        </input>
    );
};

export default Input;
