import { ComponentProps, FC } from 'react';
import styles from './button.module.css';

interface PropTypes extends ComponentProps<'button'> {}

const Button: FC<PropTypes> = ({ children, ...props }) => {
    return (
        <button {...props} className={styles.button}>
            {children}
        </button>
    );
};

export default Button;
