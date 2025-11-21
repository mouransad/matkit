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
const Input = ({ children, className, ...otherProps })=>{
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("input", {
        className: (0, _clsx.default)(_stylesmodulecss.default.input, className),
        ...otherProps,
        children: children
    });
};
const _default = Input;
