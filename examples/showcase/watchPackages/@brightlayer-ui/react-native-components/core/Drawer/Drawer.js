import React, { useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Surface } from 'react-native-paper';
import { findChildByType, inheritSharedProps } from './utilities.js';
import { DrawerContext } from './context/index.js';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
const makeStyles = (props, theme, insets) => StyleSheet.create({
    root: {
        backgroundColor: props.backgroundColor || theme.colors.surfaceContainerLow,
        zIndex: 2,
        flex: 1,
        height: '100%',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        paddingBottom: insets.bottom,
    },
});
/**
 * [Drawer](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--drawer) component
 *
 * The Drawer is a parent container that manages all of the content displayed in your primary
 * navigation drawer. It can contain a DrawerHeader, DrawerSubheader, DrawerBody, and DrawerFooter.
 */
export const Drawer = (props) => {
    const { 
    // Inheritable Props
    /* eslint-disable @typescript-eslint/no-unused-vars */
    activeChevronColor, activeItemBackgroundColor, activeItemBackgroundShape = 'square', activeItemFontColor, activeItemIconColor, backgroundColor, chevron = false, chevronColor, collapseIcon, disableActiveItemParentStyles, divider = false, expandIcon, hidePadding = true, itemFontColor, itemIconColor, nestedBackgroundColor, nestedDivider, theme: themeOverride, 
    /* eslint-enable @typescript-eslint/no-unused-vars */
    // Drawer-specific props
    activeItem, onItemSelect, styles = {}, 
    // Other View Props
    style, ...viewProps } = props;
    const theme = useExtendedTheme(themeOverride);
    const insets = useSafeAreaInsets();
    const defaultProps = useMemo(() => ({
        activeItemBackgroundShape: 'square',
        chevron: false,
        divider: false,
        hidePadding: true,
        styles: {},
    }), []);
    const defaultStyles = makeStyles(props, theme, insets);
    const getSectionByDisplayName = useCallback((displayName, inherit = false) => findChildByType(props.children, [displayName])
        .slice(0, 1)
        .map((child) => {
        let inheritableProps = {};
        if (inherit) {
            inheritableProps = inheritSharedProps({ ...defaultProps, ...props, theme }, child.props);
        }
        return React.cloneElement(child, inheritableProps);
    }), [props, theme, defaultProps]);
    return (React.createElement(DrawerContext.Provider, { value: {
            activeItem,
            onItemSelect,
        } },
        React.createElement(Surface, { style: [defaultStyles.root, styles.root, style], ...viewProps },
            getSectionByDisplayName('DrawerHeader'),
            getSectionByDisplayName('DrawerSubheader'),
            getSectionByDisplayName('DrawerBody', true),
            getSectionByDisplayName('DrawerFooter'))));
};
