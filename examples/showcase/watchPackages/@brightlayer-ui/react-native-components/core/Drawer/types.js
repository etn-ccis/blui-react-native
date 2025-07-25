import PropTypes from 'prop-types';
export const SharedStylePropTypes = {
    activeChevronColor: PropTypes.string,
    activeItemBackgroundColor: PropTypes.string,
    activeItemFontColor: PropTypes.string,
    activeItemIconColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    chevronColor: PropTypes.string,
    divider: PropTypes.bool,
    itemFontColor: PropTypes.string,
    itemIconColor: PropTypes.string,
};
export const NavItemSharedStylePropTypes = {
    activeItemBackgroundShape: PropTypes.oneOf(['round', 'square']),
    chevron: PropTypes.bool,
    collapseIcon: PropTypes.element,
    expandIcon: PropTypes.element,
    hidePadding: PropTypes.bool,
    disableActiveItemParentStyles: PropTypes.bool,
    nestedBackgroundColor: PropTypes.string,
    nestedDivider: PropTypes.bool,
};
