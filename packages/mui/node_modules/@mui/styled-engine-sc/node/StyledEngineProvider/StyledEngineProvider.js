"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StyledEngineProvider;

var _propTypes = _interopRequireDefault(require("prop-types"));

function StyledEngineProvider(props) {
  const {
    injectFirst,
    children
  } = props;

  if (injectFirst && typeof window !== 'undefined') {
    const head = document.head;

    if (!head.querySelector('[data-styled="active"]')) {
      const injectFirstNode = document.createElement('style');
      injectFirstNode.setAttribute('data-styled', 'active');
      head.insertBefore(injectFirstNode, head.firstChild);
    }
  }

  return children;
}

StyledEngineProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: _propTypes.default.node,

  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: _propTypes.default.bool
};