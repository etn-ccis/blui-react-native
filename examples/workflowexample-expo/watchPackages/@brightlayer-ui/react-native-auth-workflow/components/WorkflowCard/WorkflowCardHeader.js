import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Icon } from '@brightlayer-ui/react-native-components';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
import { Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Color from 'color';
import { useScreenDimensions } from '../../hooks/useScreenDimensions.js';
const makeStyles = (theme, isTablet, backgroundColor, textColor) => StyleSheet.create({
    header: {
        height: 64,
        paddingHorizontal: isTablet ? 24 : 16,
        paddingVertical: 12,
        alignItems: 'center',
        flexDirection: 'row',
    },
    mobileHeader: {
        backgroundColor: backgroundColor ?? theme.colors.primaryContainer,
    },
    tabletHeader: {
        backgroundColor: backgroundColor ?? 'transparent',
    },
    headerContent: {
        marginLeft: 16,
        justifyContent: 'center',
        color: textColor ?? (isTablet ? theme.colors.onSurface : theme.colors.onPrimaryContainer),
    },
    headerText: {
        color: textColor ?? (isTablet ? theme.colors.onSurface : theme.colors.onPrimaryContainer),
    },
});
/**
 * Component that renders the Header for the workflow card.
 *
 * @param {WorkflowCardHeaderProps} props - Props of WorkflowCardHeader component
 *
 * @category Component
 */
export const WorkflowCardHeader = (props) => {
    const { title, subTitle, backgroundColor, textColor, iconColor, icon, style, onIconPress, ...otherprops } = props;
    const theme = useExtendedTheme();
    const { isTablet } = useScreenDimensions();
    const defaultStyles = makeStyles(theme, isTablet, backgroundColor, textColor);
    const insets = useSafeAreaInsets();
    const statusBarHeight = insets.top;
    const getIcon = () => {
        if (icon) {
            return _jsx(Icon, { source: icon, color: iconColor ?? theme.colors.onSurface, size: 24 });
        }
        return _jsx(Icon, { source: { name: 'close' }, color: iconColor ?? theme.colors.onSurface, size: 24 });
    };
    return (_jsxs(View, { children: [!isTablet && (_jsx(View, { style: {
                    backgroundColor: backgroundColor ?? theme.colors.primaryContainer,
                    height: statusBarHeight,
                }, children: _jsx(StatusBar, { barStyle: Color(backgroundColor ?? theme.colors.primaryContainer).isDark()
                        ? 'light-content'
                        : 'dark-content' }) })), isTablet && (_jsx(StatusBar, { barStyle: Color(theme.colors.primary).isDark() ? 'light-content' : 'dark-content' })), _jsxs(View, { style: [
                    isTablet ? defaultStyles.tabletHeader : defaultStyles.mobileHeader,
                    defaultStyles.header,
                    style,
                ], ...otherprops, children: [_jsx(TouchableOpacity, { testID: "blui-workflow-card-header-icon", onPress: onIconPress, children: getIcon() }), _jsxs(View, { style: defaultStyles.headerContent, children: [_jsx(Text, { variant: "titleLarge", style: [defaultStyles.headerText], children: title }), subTitle && (_jsx(Text, { variant: "bodyMedium", style: [defaultStyles.headerText], children: subTitle }))] })] })] }));
};
