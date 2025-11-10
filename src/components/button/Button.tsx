import { ComponentProps, FC } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import Input from '../input';

interface PropTypes extends ComponentProps<'button'> { }

const Button: FC<PropTypes> = ({ children, className, ...props }) => {
    return (
        <>
        <button {...props} className={clsx(styles.button, className)}>
            {children}
        </button>
        <Input value='input value' />
        </>
    );
};

export default Button;
