import React, { useCallback, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { BottomSheet } from './BottomSheet.js';
import { Divider } from 'react-native-paper';
import { InfoListItem } from '../InfoListItem/index.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFontScale } from '../__contexts__/font-scale-context.js';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
import { useFontStyles } from '../Utility/shared.js';
const useStyles = (theme, fontScale, avatarSize) => StyleSheet.create({
    root: {
        backgroundColor: theme.colors.surface,
    },
    avatar: {
        width: avatarSize * fontScale,
        height: avatarSize * fontScale,
        borderRadius: avatarSize * fontScale,
    },
    bottomsheet: {},
});
/**
 * [UserMenu](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--user-menu) component
 *
 * Renders an avatar that can be clicked to open a bottomsheet menu.
 *
 * Typically used for a account-style menu with links to settings, log out, etc.
 */
export const UserMenu = (props) => {
    const theme = useExtendedTheme(props.theme);
    const { avatar, backgroundColor, fontColor, iconColor = theme.colors.onSurfaceVariant, menuTitle, menuSubtitle, menuItems, styles = {}, } = props;
    const avatarSize = avatar.props.size || 40;
    const [showBottomSheet, setShowBottomSheet] = useState(false);
    const fontScale = useFontScale();
    const defaultStyles = useStyles(theme, fontScale, avatarSize);
    const insets = useSafeAreaInsets();
    const openMenu = () => {
        if (menuItems)
            setShowBottomSheet(true);
    };
    const closeMenu = () => {
        setShowBottomSheet(false);
    };
    const getAvatar = useCallback(() => React.cloneElement(avatar, {
        size: avatarSize * fontScale,
    }), [avatar, avatarSize, fontScale]);
    const { fontStyleSemiBold } = useFontStyles();
    const getMenu = useCallback(() => (React.createElement(React.Fragment, null,
        menuTitle && (React.createElement(React.Fragment, null,
            React.createElement(InfoListItem, { hidePadding: true, title: menuTitle || '', subtitle: menuSubtitle, leftComponent: React.createElement(View, { style: [defaultStyles.avatar, styles.avatar, { marginRight: 16 }] }, getAvatar()), fontColor: fontColor, backgroundColor: backgroundColor }),
            React.createElement(Divider, { style: { marginLeft: -1 * insets.left, marginRight: -1 * insets.right } }))),
        menuItems?.map((menuItem, index) => {
            const menuItemStyles = menuItem.styles || {};
            return (React.createElement(InfoListItem, { ...menuItem, key: index, onPress: () => {
                    closeMenu();
                    if (menuItem.onPress)
                        menuItem.onPress();
                }, iconColor: menuItem.iconColor || iconColor, iconAlign: "center", fontColor: menuItem.fontColor || fontColor, backgroundColor: menuItem.backgroundColor || backgroundColor, dense: menuItem.dense !== undefined ? menuItem.dense : true, styles: Object.assign(menuItemStyles, {
                    title: Object.assign({
                        fontSize: 16,
                        ...fontStyleSemiBold,
                    }, menuItemStyles.title),
                    divider: Object.assign({
                        marginLeft: -1 * insets.left,
                        marginRight: -1 * insets.right,
                    }, menuItemStyles.divider),
                }) }));
        }))), [
        menuItems,
        menuTitle,
        menuSubtitle,
        iconColor,
        fontColor,
        backgroundColor,
        defaultStyles.avatar,
        getAvatar,
        insets.left,
        insets.right,
        styles.avatar,
        fontStyleSemiBold,
    ]);
    return (React.createElement(React.Fragment, null,
        React.createElement(TouchableWithoutFeedback, { onPress: () => openMenu(), testID: 'avatar', style: [defaultStyles.root, styles.root] }, getAvatar()),
        React.createElement(BottomSheet, { show: showBottomSheet, backgroundColor: backgroundColor, onClose: () => closeMenu(), styles: { root: styles.bottomsheet } }, getMenu())));
};
