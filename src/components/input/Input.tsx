import { ComponentProps, FC } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

interface PropTypes extends ComponentProps<'input'> {}

const Input: FC<PropTypes> = ({ children, className, ...otherProps }) => {
    return (
        <input className={clsx(styles.input, className)}  {...otherProps}>
            {children}
        </input>
    );
};

export default Input;
