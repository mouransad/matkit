'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import styles from './styles.module.css';
import clsx from 'clsx';
const Button = ({ children, className, ...props })=>{
    return /*#__PURE__*/ _jsx("button", {
        ...props,
        className: clsx(styles.button, className),
        children: children
    });
};
export default Button;
