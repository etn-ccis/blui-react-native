import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Icon } from '../Icon/index.js';
import { useFontScale } from '../__contexts__/font-scale-context.js';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
const makeStyles = (theme, fontScale) => StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        textAlign: 'center',
        marginTop: 16 * fontScale,
        fontSize: 22,
        letterSpacing: 0,
        color: theme.colors.onSurface,
    },
    description: {
        color: theme.colors.onSurfaceVariant,
        textAlign: 'center',
        fontSize: 14,
        letterSpacing: 0,
    },
    actions: {
        marginTop: 16 * fontScale,
    },
});
/**
 * [EmptyState](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--empty-state) component
 *
 * The `<EmptyState>` component is an element that can be used as a placeholder when no data is present (such as an empty list, or a placeholder page for future content). This is only used when no data is available, rather than during loading (see [empty states pattern](https://brightlayer-ui.github.io/patterns/empty-states)).
 */
export const EmptyState = (props) => {
    const { title, description, actions, icon, iconColor, iconSize, styles = {}, style, theme: themeOverride, ...viewProps } = props;
    const theme = useExtendedTheme(themeOverride);
    const fontScale = useFontScale();
    const defaultStyles = makeStyles(theme, fontScale);
    const normalizeIconSize = useCallback(() => {
        if (!iconSize)
            return 100;
        return Math.max(100, Math.min(200, iconSize));
    }, [iconSize]);
    const getColor = useCallback((color) => color || theme.colors.disabled, [theme]);
    const getIcon = useCallback(() => {
        if (icon) {
            return React.createElement(Icon, { source: icon, size: normalizeIconSize(), color: getColor(iconColor) });
        }
    }, [icon, normalizeIconSize, getColor, iconColor]);
    return (React.createElement(View, { style: [defaultStyles.root, styles.root, style], ...viewProps },
        getIcon(),
        React.createElement(Text, { variant: 'titleLarge', style: [defaultStyles.title, styles.title] }, title),
        description ? (React.createElement(Text, { variant: 'bodyMedium', style: [defaultStyles.description, styles.description] }, description)) : null,
        actions ? React.createElement(View, { style: [defaultStyles.actions, styles.actions] }, actions) : null));
};
