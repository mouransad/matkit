'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _stylesmodulecss = /*#__PURE__*/ _interop_require_default(require("./styles.module.css"));
const _clsx = /*#__PURE__*/ _interop_require_default(require("clsx"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const Button = ({ children, className, ...props })=>{
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
        ...props,
        className: (0, _clsx.default)(_stylesmodulecss.default.button, className),
        children: children
    });
};
const _default = Button;
