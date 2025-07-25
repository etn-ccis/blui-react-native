import React, { useCallback } from 'react';
import { StyleSheet, View, TouchableOpacity, I18nManager, } from 'react-native';
import MatCommunityIcon from '@react-native-vector-icons/material-design-icons';
import { Divider as PaperDivider, Text } from 'react-native-paper';
import { renderableSubtitleComponent, renderableInfoComponent, withKeys, separate } from './utilities.js';
import { Icon } from '../Icon/index.js';
import { useFontScale, useFontScaleSettings } from '../__contexts__/font-scale-context.js';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
import { useFontStyles } from '../Utility/shared.js';
const getIconAlignment = (iconAlign) => {
    switch (iconAlign) {
        case 'right':
            return 'flex-end';
        case 'center':
            return 'center';
        case 'left':
        default:
            return 'flex-start';
    }
};
/**
 * Divider component
 *
 * A utility component for rendering a horizontal rule. This is a wrapper around the
 * react-native-paper Divider component that gives us the ability to do a partial or
 * full width divider.
 */
const Divider = (props) => {
    const { divider, fontScale = 1 } = props;
    if (divider) {
        return (React.createElement(View, { style: {
                position: 'absolute',
                bottom: 0,
                right: I18nManager.isRTL ? (divider === 'full' ? 0 : 72 * fontScale) : 0,
                left: !I18nManager.isRTL ? (divider === 'full' ? 0 : 72 * fontScale) : 0,
                alignItems: 'stretch',
            } },
            React.createElement(PaperDivider, null)));
    }
    return null;
};
const infoListItemStyles = (props, theme, fontScale, fontStyleSemiBold) => {
    const isWrapEnabled = props.wrapSubtitle || props.wrapTitle || props.wrapInfo;
    return StyleSheet.create({
        root: {
            backgroundColor: props.backgroundColor || 'transparent',
            minHeight: isWrapEnabled ? (props.dense ? 56 : 72) * fontScale : 'auto',
            height: !isWrapEnabled ? (props.dense ? 56 : 72) * fontScale : 'auto',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 8,
        },
        title: {
            color: props.fontColor || theme.colors.onSurface,
            ...fontStyleSemiBold,
        },
        subtitleWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
            overflow: 'hidden',
        },
        subtitle: {
            color: props.fontColor || theme.colors.onSurfaceVariant,
        },
        infoWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        info: {
            color: props.fontColor || theme.colors.onSurfaceVariant,
        },
        statusStripe: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: 6,
            backgroundColor: props.statusColor,
        },
        iconWrapper: {
            width: 40 * fontScale,
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        avatar: {
            width: 40 * fontScale,
            height: 40 * fontScale,
            borderRadius: 20 * fontScale,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: props.statusColor || theme.colors.neutralFilledContainer,
        },
        icon: {
            width: 40 * fontScale,
            height: 40 * fontScale,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: getIconAlignment(props.iconAlign),
        },
        mainContent: {
            flex: 1,
            paddingHorizontal: props.hidePadding ? 0 : 16,
        },
        flipIcon: {
            transform: [{ scaleX: -1 }],
        },
    });
};
/**
 * [InfoListItem](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--info-list-item) component
 *
 * The InfoListItem is a component used to render lists. It extends the basic implementation
 * of a list item with additional features, such as icons and status stripes and supplies all of
 * the correct Brightlayer UI styles.
 */
export const InfoListItem = (props) => {
    const { theme: themeOverride, ...otherProps } = props;
    const theme = useExtendedTheme(themeOverride);
    const fontScale = useFontScale();
    const { disableScaling, maxScale } = useFontScaleSettings();
    const { fontStyleSemiBold } = useFontStyles();
    const defaultStyles = infoListItemStyles(props, theme, fontScale, fontStyleSemiBold);
    const { avatar, title, wrapTitle, leftComponent, rightComponent, chevron, chevronColor = theme.colors.onSurfaceVariant, divider, subtitle, wrapSubtitle, subtitleSeparator, info, wrapInfo, statusColor, dense, //eslint-disable-line @typescript-eslint/no-unused-vars
    fontColor, //eslint-disable-line @typescript-eslint/no-unused-vars
    iconAlign, //eslint-disable-line @typescript-eslint/no-unused-vars
    iconColor, backgroundColor, //eslint-disable-line @typescript-eslint/no-unused-vars
    onPress, icon, hidePadding, styles = {}, style, ...viewProps } = otherProps;
    const getIconColor = useCallback(() => {
        if (iconColor)
            return iconColor;
        if (avatar) {
            return theme.colors.onNeutralFilledContainer;
        }
        return statusColor ? statusColor : theme.colors.onSurfaceVariant;
    }, [iconColor, avatar, statusColor, theme]);
    const getIcon = useCallback(() => {
        if (icon) {
            return (React.createElement(View, { style: avatar ? [defaultStyles.avatar, styles.avatar] : [defaultStyles.icon, styles.icon] },
                React.createElement(Icon, { source: icon, size: 24, color: getIconColor() })));
        }
    }, [icon, avatar, getIconColor, defaultStyles, styles]);
    const getSubtitle = useCallback(() => {
        if (!subtitle) {
            return null;
        }
        const subtitleParts = Array.isArray(subtitle) ? [...subtitle] : [subtitle];
        const renderableSubtitleParts = subtitleParts.map((element) => renderableSubtitleComponent(element, Object.assign({}, defaultStyles.subtitle, styles.subtitle), wrapSubtitle));
        return withKeys(separate(renderableSubtitleParts, subtitleSeparator));
    }, [subtitle, subtitleSeparator, styles.subtitle, wrapSubtitle, defaultStyles.subtitle]);
    const getInfo = useCallback(() => {
        if (!info) {
            return null;
        }
        const infoParts = Array.isArray(info) ? [...info] : [info];
        const renderableInfoParts = infoParts.map((element) => renderableInfoComponent(element, Object.assign({}, defaultStyles.info, styles.info), wrapInfo));
        return withKeys(separate(renderableInfoParts, subtitleSeparator));
    }, [info, subtitleSeparator, styles.info, wrapInfo, defaultStyles.info]);
    const getRightComponent = useCallback(() => (React.createElement(React.Fragment, null,
        rightComponent && rightComponent,
        chevron && (React.createElement(MatCommunityIcon, { name: "chevron-right", size: 24, color: chevronColor, allowFontScaling: !disableScaling, maxFontSizeMultiplier: maxScale, 
            // style={{transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }]}}
            style: I18nManager.isRTL ? defaultStyles.flipIcon : {} })))), [rightComponent, chevron, chevronColor, disableScaling, maxScale, defaultStyles.flipIcon]);
    return (React.createElement(TouchableOpacity, { accessible: true, testID: `list-item-${title.replace(/\s+/g, '-').toLowerCase()}`, accessibilityLabel: `list-item-${title.replace(/\s+/g, '-').toLowerCase()}`, onPress: onPress, style: [defaultStyles.root, styles.root, style], disabled: !onPress, activeOpacity: 0.7, ...viewProps },
        React.createElement(View, { style: [defaultStyles.statusStripe, styles.statusStripe] }),
        icon || !hidePadding ? (React.createElement(View, { style: [defaultStyles.iconWrapper, styles.iconWrapper] }, getIcon())) : null,
        leftComponent,
        React.createElement(View, { style: [defaultStyles.mainContent, styles.mainContent] },
            React.createElement(Text, { variant: 'titleMedium', style: [defaultStyles.title, styles.title], numberOfLines: wrapTitle ? 0 : 1, ellipsizeMode: 'tail' }, title),
            React.createElement(View, { style: [defaultStyles.subtitleWrapper, styles.subtitleWrapper] }, getSubtitle()),
            React.createElement(View, { style: [defaultStyles.infoWrapper, styles.infoWrapper] }, getInfo())),
        getRightComponent(),
        React.createElement(Divider, { divider: divider, fontScale: fontScale })));
};
