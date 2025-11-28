'use client';
import type { ComponentProps, FC } from 'react';
import './styles.css';
import { makeClass } from '@lib/sharedTools/makeClass';

const Button: FC<ComponentProps<'button'>> = ({ children, className, ...props }) => {
    return (
        <button {...props} className={makeClass("matkit-button", className)}>
            {children}
        </button>
    );
};

export default Button;
