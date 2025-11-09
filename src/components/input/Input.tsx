import { ComponentProps, FC } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

interface PropTypes extends ComponentProps<'input'> {}

const Input: FC<PropTypes> = ({ children, className, ...props }) => {
    return (
        <input {...props} className={clsx(styles.button, className)}>
            {children}
        </input>
    );
};

export default Input;
