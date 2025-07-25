import React, { useCallback } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { Card, Divider, Text } from 'react-native-paper';
import { Icon } from '../Icon/index.js';
import { useFontScale } from '../__contexts__/font-scale-context.js';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
const backgroundImageStyles = StyleSheet.create({
    root: {
        position: 'absolute',
        width: '100%',
        resizeMode: 'cover',
        height: '100%',
        opacity: 0.1,
    },
});
/**
 * BackgroundImage component
 *
 * This is a utility sub-component used to organize content in the ScoreCard. It
 * is responsible for laying out and styling the optional background image.
 */
const BackgroundImage = (props) => {
    const { headerBackgroundImage, style } = props;
    const defaultStyles = backgroundImageStyles;
    if (headerBackgroundImage) {
        return (React.createElement(Image, { testID: 'header-background-image', source: headerBackgroundImage, style: [defaultStyles.root, style] }));
    }
    return null;
};
/**
 * HeaderText component
 *
 * This is a utility sub-component used to organize content in the ScoreCard. It
 * is responsible for laying out and styling the text elements in the header.
 */
const HeaderText = (props) => {
    const { title, subtitle, info, color, styles = {} } = props;
    const textColor = color || 'white';
    return (React.createElement(View, { style: [{ flex: 1 }, styles.root] },
        React.createElement(Text, { testID: 'header_title', style: [{ color: textColor }, styles.title], variant: "titleLarge", numberOfLines: 1, ellipsizeMode: 'tail' }, title),
        subtitle ? (React.createElement(Text, { testID: 'header_subtitle', style: [{ color: textColor }, styles.subtitle], variant: "bodyMedium", numberOfLines: 1, ellipsizeMode: 'tail' }, subtitle)) : null,
        info ? (React.createElement(Text, { testID: 'header_info', style: [{ color: textColor }, styles.info], variant: "bodySmall", numberOfLines: 1, ellipsizeMode: 'tail' }, info)) : null));
};
/**
 * Footer component
 *
 * This is a utility sub-component used to organize content in the ScoreCard. It
 * is responsible for laying out and styling the action row / footer.
 */
const Footer = (props) => {
    const { actionRow, style } = props;
    if (actionRow) {
        return (React.createElement(React.Fragment, null,
            React.createElement(Divider, null),
            React.createElement(View, { style: [style] }, actionRow)));
    }
    return null;
};
/**
 * HeroPanel component
 *
 * This is a utility sub-component used to organize content in the ScoreCard. It
 * is responsible for laying out and styling the badge content (typically a Hero or Heroes).
 */
const HeroPanel = (props) => {
    const { badge, badgeOffset = 0, style } = props;
    if (badge) {
        return React.createElement(View, { style: [{ flex: 0, flexBasis: 'auto', marginTop: badgeOffset }, style] }, badge);
    }
    return null;
};
const actionPanelStyles = (fontScale) => StyleSheet.create({
    root: {
        flexDirection: 'row',
        margin: -8 * fontScale,
    },
    actionItem: {
        // vertical padding scales with fontSize, horizontal padding is fixed
        height: 40 * fontScale,
        width: 24 * fontScale + 16,
        paddingHorizontal: 8,
        paddingVertical: 8 * fontScale,
    },
});
/**
 * ActionPanel component
 *
 * This is a utility sub-component used to organize content in the ScoreCard. It
 * is responsible for laying out and styling the action item icons.
 */
const ActionPanel = (props) => {
    const { actionItems, color = 'white', styles = {} } = props;
    const fontScale = useFontScale();
    const defaultStyles = actionPanelStyles(fontScale);
    const getIcon = useCallback((icon) => {
        if (icon) {
            return React.createElement(Icon, { source: icon, size: 24, color: color });
        }
    }, [color]);
    if (actionItems) {
        return (React.createElement(View, { style: [defaultStyles.root, styles.root] }, actionItems.slice(0, 6).map((actionItem, index) => (React.createElement(TouchableOpacity, { key: `${index}`, testID: `action-item${index}`, onPress: actionItem.onPress, style: [defaultStyles.actionItem, styles.actionItem] }, getIcon(actionItem.icon))))));
    }
    return null;
};
const scoreCardStyles = (theme, props, fontScale) => StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: theme.colors.surface,
    },
    header: {
        height: 112 * fontScale,
        overflow: 'hidden',
        backgroundColor: props.headerColor || theme.colors.primaryContainer,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 16,
    },
    padded: {
        padding: 16,
    },
    body: {
        flexDirection: 'row',
        alignItems: 'stretch',
        padding: 16,
    },
    leftContent: {
        flex: 1,
        justifyContent: 'center',
        marginRight: props.badge ? 16 : 0,
    },
});
/**
 * [ScoreCard](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--score-card) component
 *
 * This component renders a "score card" which is typically used in dashboard
 * displays to show the status of individual items along with some details.
 * The header is configurable with various text elements and icon actions and the
 * main body is fully customizable. You can use the `badge` prop to supply elements
 * that can span between the header and the body, such as a [Hero](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--hero) with a grade icon.
 */
export const ScoreCard = (props) => {
    const { theme: themeOverride, ...otherProps } = props;
    const theme = useExtendedTheme(themeOverride);
    const { actionRow, actionItems, actionIconColor = theme.colors.onSurfaceVariant, badge, badgeOffset, children, headerBackgroundImage, headerColor, // eslint-disable-line @typescript-eslint/no-unused-vars
    headerTitle, headerSubtitle, headerInfo, headerFontColor = theme.colors.onPrimaryContainer, styles = {}, style, ...cardProps } = otherProps;
    const fontScale = useFontScale();
    const defaultStyles = scoreCardStyles(theme, props, fontScale);
    return (
    // @ts-ignore bad types from RNP
    React.createElement(Card, { elevation: 1, style: [defaultStyles.root, styles.root, style], ...cardProps },
        React.createElement(View, { style: [defaultStyles.header, styles.header] },
            React.createElement(BackgroundImage, { headerBackgroundImage: headerBackgroundImage, style: styles.backgroundImage }),
            React.createElement(View, { style: [defaultStyles.padded, defaultStyles.headerContent, styles.headerContent] },
                React.createElement(HeaderText, { title: headerTitle, subtitle: headerSubtitle, info: headerInfo, color: headerFontColor, styles: {
                        root: styles.headerText,
                        title: styles.title,
                        subtitle: styles.subtitle,
                        info: styles.info,
                    } }),
                React.createElement(ActionPanel, { actionItems: actionItems, color: actionIconColor, styles: {
                        root: styles.headerActions,
                        actionItem: styles.headerActionItem,
                    } }))),
        React.createElement(View, { style: [defaultStyles.body, styles.body] },
            React.createElement(View, { style: [defaultStyles.leftContent, styles.leftContent] }, children),
            React.createElement(HeroPanel, { badge: badge, badgeOffset: badgeOffset, style: styles.badge })),
        React.createElement(Footer, { actionRow: actionRow, style: styles.actionRow })));
};
