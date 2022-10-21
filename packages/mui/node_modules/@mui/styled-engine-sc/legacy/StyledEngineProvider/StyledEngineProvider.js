import PropTypes from 'prop-types';
export default function StyledEngineProvider(props) {
  var injectFirst = props.injectFirst,
      children = props.children;

  if (injectFirst && typeof window !== 'undefined') {
    var head = document.head;

    if (!head.querySelector('[data-styled="active"]')) {
      var injectFirstNode = document.createElement('style');
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
  children: PropTypes.node,

  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: PropTypes.bool
};