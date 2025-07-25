import React from 'react';
import { TouchableOpacity, StyleSheet, I18nManager } from 'react-native';
import { ICON_SIZE } from './constants.js';
import Icon from '@react-native-vector-icons/material-icons';
import { HeaderIcon } from './HeaderIcon.js';
import { useSearch } from './contexts/SearchContextProvider.js';
import { useColor } from './contexts/ColorContextProvider.js';
import { useFontScale, useFontScaleSettings } from '../__contexts__/font-scale-context.js';
const useStyles = () => {
    const fontScale = useFontScale();
    return StyleSheet.create({
        navigation: {
            height: 40 * fontScale,
            width: 40 * fontScale,
            marginLeft: -8 * fontScale,
            marginRight: 24,
            padding: 8 * fontScale,
            marginTop: 8 * fontScale,
        },
        flipIcon: {
            transform: [{ scaleX: -1 }],
        },
        backArrow: {
            marginTop: 0,
        },
    });
};
/**
 * HeaderNavigationIcon component
 *
 * The HeaderNavigationIcon is a helper component that is used to properly size and space the main navigation icon (on the left) in the Header component.
 */
export const HeaderNavigationIcon = (props) => {
    const { icon, navigationIconColor, onPress, style } = props;
    const { searching, onClose } = useSearch();
    const { color } = useColor();
    const defaultStyles = useStyles();
    const { disableScaling, maxScale } = useFontScaleSettings();
    if (searching) {
        return (React.createElement(TouchableOpacity, { testID: 'header-search-close', accessibilityLabel: 'header-search-close', onPress: onClose ? () => onClose() : undefined, style: [defaultStyles.navigation, defaultStyles.backArrow, style] },
            React.createElement(Icon, { name: 'arrow-back', size: ICON_SIZE, color: color, allowFontScaling: !disableScaling, style: I18nManager.isRTL ? defaultStyles.flipIcon : {}, maxFontSizeMultiplier: maxScale })));
    }
    if (icon) {
        return (React.createElement(TouchableOpacity, { testID: 'header-navigation', accessibilityLabel: 'header-navigation', onPress: onPress, style: [defaultStyles.navigation, style], disabled: !onPress },
            React.createElement(HeaderIcon, { icon: icon, color: navigationIconColor })));
    }
    return null;
};
