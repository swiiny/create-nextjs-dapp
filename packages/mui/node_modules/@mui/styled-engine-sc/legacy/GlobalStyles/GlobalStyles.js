import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}

var GlobalStyles = createGlobalStyle(function (props) {
  var styles = props.styles,
      _props$defaultTheme = props.defaultTheme,
      defaultTheme = _props$defaultTheme === void 0 ? {} : _props$defaultTheme;

  if (typeof styles === 'function') {
    return styles(isEmpty(props.theme) ? defaultTheme : props.theme);
  }

  return styles;
});
export default GlobalStyles;
GlobalStyles.propTypes = {
  defaultTheme: PropTypes.object,
  styles: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func])
};