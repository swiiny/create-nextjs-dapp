"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}

const GlobalStyles = (0, _styledComponents.createGlobalStyle)(props => {
  const {
    styles,
    defaultTheme = {}
  } = props;

  if (typeof styles === 'function') {
    return styles(isEmpty(props.theme) ? defaultTheme : props.theme);
  }

  return styles;
});
var _default = GlobalStyles;
exports.default = _default;
GlobalStyles.propTypes = {
  defaultTheme: _propTypes.default.object,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.func])
};