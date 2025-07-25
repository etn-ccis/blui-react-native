import React, { useCallback } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TouchableWithoutFeedback, } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHeaderDimensions } from '../__hooks__/useHeaderDimensions.js';
import { Icon } from '../Icon/index.js';
import { useFontScale, useFontScaleSettings } from '../__contexts__/font-scale-context.js';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
import { useFontStyles } from '../Utility/shared.js';
const makeStyles = (props, theme, insets, height, fontScale, fontStyleSemiBold, fontStyleRegular) => StyleSheet.create({
    root: {
        paddingTop: insets.top,
        backgroundColor: props.backgroundColor || theme.colors.surface,
        height: height,
        borderTopRightRadius: 15,
    },
    icon: {
        marginLeft: 16,
        height: 56 * fontScale,
        width: 40 * fontScale,
        justifyContent: 'center',
    },
    content: {
        flexDirection: 'row',
        paddingLeft: insets.left,
        height: '100%',
    },
    textContent: {
        flexDirection: 'column',
        paddingVertical: 4 * fontScale,
        flex: 1,
        height: '100%',
        ...fontStyleSemiBold,
        justifyContent: 'center',
    },
    title: {
        color: props.fontColor || theme.colors.primary,
        lineHeight: 32,
        fontSize: 24,
        letterSpacing: 0,
        ...fontStyleSemiBold,
    },
    subtitle: {
        color: props.fontColor || theme.colors.onSurfaceVariant,
        lineHeight: 20,
        fontSize: 14,
        letterSpacing: 0,
        ...fontStyleRegular,
    },
    backgroundImageWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: props.backgroundOpacity,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});
/**
 * [DrawerHeader](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--drawer) component
 *
 * The DrawerHeader holds the content at the top of your navigation Drawer. You can supply a title and subtitle to
 * use the default styles, or you can supply your own custom titleContent to render. This section will always be pinned
 * at the top of the Drawer.
 */
export const DrawerHeader = (props) => {
    const { title, subtitle, titleContent, backgroundImage, fontColor, icon, onPress, onIconPress, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    backgroundOpacity = 0.3, styles = {}, style, theme: themeOverride, ...viewProps } = props;
    const theme = useExtendedTheme(themeOverride);
    const insets = useSafeAreaInsets();
    const { REGULAR_HEIGHT } = useHeaderDimensions();
    const { disableScaling } = useFontScaleSettings();
    const fontScale = useFontScale();
    const { fontStyleSemiBold, fontStyleRegular } = useFontStyles();
    const defaultStyles = makeStyles(props, theme, insets, REGULAR_HEIGHT, fontScale, fontStyleSemiBold, fontStyleRegular);
    const getIcon = useCallback(() => {
        if (icon) {
            return (React.createElement(View, { style: [defaultStyles.icon, styles.icon] },
                React.createElement(TouchableOpacity, { testID: 'drawer-header-navigation', onPress: onIconPress, style: { padding: 8, marginLeft: -8 }, disabled: !onIconPress },
                    React.createElement(Icon, { source: icon, size: 24, color: fontColor || theme.colors.onSurface, allowFontScaling: !disableScaling }))));
        }
    }, [defaultStyles, styles, icon, fontColor, onIconPress, disableScaling, theme.colors.onSurface]);
    const getHeaderContent = useCallback(() => titleContent || (React.createElement(View, { style: [defaultStyles.textContent, styles.textContent] },
        title && (React.createElement(Text, { variant: 'headlineSmall', style: [defaultStyles.title, styles.title], numberOfLines: 1 }, title)),
        subtitle && (React.createElement(Text, { variant: 'bodyMedium', style: [defaultStyles.subtitle, styles.subtitle], numberOfLines: 1 }, subtitle)))), [title, subtitle, titleContent, defaultStyles, styles]);
    const getBackgroundImage = useCallback(() => {
        if (backgroundImage) {
            return (React.createElement(View, { style: [defaultStyles.backgroundImageWrapper, styles.backgroundImageWrapper] },
                React.createElement(Image, { source: backgroundImage, resizeMethod: 'resize', style: [defaultStyles.backgroundImage, styles.backgroundImage] })));
        }
    }, [backgroundImage, defaultStyles, styles]);
    return (React.createElement(TouchableWithoutFeedback, { onPress: onPress },
        React.createElement(View, { style: [defaultStyles.root, styles.root, style], ...viewProps },
            getBackgroundImage(),
            React.createElement(View, { style: [defaultStyles.content, styles.content, { paddingLeft: icon ? 0 : 16 }] },
                icon && getIcon(),
                getHeaderContent()),
            React.createElement(Divider, null))));
};
DrawerHeader.displayName = 'DrawerHeader';
