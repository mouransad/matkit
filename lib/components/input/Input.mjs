import { jsx as _jsx } from "react/jsx-runtime";
import styles from './styles.module.css';
import clsx from 'clsx';
const Input = ({ children, className, ...otherProps })=>{
    return /*#__PURE__*/ _jsx("input", {
        className: clsx(styles.input, className),
        ...otherProps,
        children: children
    });
};
export default Input;
