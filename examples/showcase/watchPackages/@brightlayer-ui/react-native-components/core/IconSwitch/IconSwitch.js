import React, { useEffect, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, I18nManager, Animated } from 'react-native';
import { Icon } from '../Icon/Icon.js';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
/**
 * This is a Switch component which allow us to show the check icon on ToggleOn and Close icon on ToggleOff Switch's handle.
 */
export const IconSwitch = (props) => {
    const { showIcon = false, disabled = false, value, onValueChange, styles = {}, style, ...viewProps } = props;
    const theme = useExtendedTheme(props.theme);
    const rtl = I18nManager.isRTL;
    const toggleStyles = useMemo(() => ({
        transform: [{ translateX: value ? (showIcon ? (rtl ? -22 : 22) : rtl ? -18 : 18) : 0 }],
        transition: 'transform 50ms ease-in-out',
    }), [value, showIcon, rtl]);
    const onPressSwitch = () => {
        const newValue = !value;
        onValueChange(newValue);
    };
    useEffect(() => {
        // Update the toggleStyles based on the current value
        toggleStyles.transform = [{ translateX: value ? (showIcon ? (rtl ? -22 : 22) : rtl ? -18 : 18) : 0 }];
    }, [value, rtl, showIcon, toggleStyles]);
    const defaultStyles = StyleSheet.create({
        track: {
            display: 'flex',
            justifyContent: 'center',
            height: 32,
            width: 52,
            backgroundColor: disabled
                ? theme.colors.sliderTrackDisabled
                : value
                    ? theme.colors.primary
                    : theme.colors.surfaceContainerHighest,
            borderColor: value ? undefined : disabled ? theme.colors.disabled : theme.colors.outline,
            borderWidth: value ? 0 : 2,
            borderRadius: 100,
        },
        handle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: value ? 24 : showIcon ? 24 : 16,
            height: value ? 24 : showIcon ? 24 : 16,
            borderRadius: 23,
            marginHorizontal: showIcon ? 2 : 6,
            backgroundColor: disabled
                ? value
                    ? theme.colors.surface
                    : theme.colors.onDisabledContainer
                : value
                    ? theme.colors.onPrimary
                    : theme.colors.onBackground,
        },
    });
    return (React.createElement(TouchableOpacity, { disabled: disabled, onPress: onPressSwitch, activeOpacity: 1, style: [defaultStyles.track, styles.root, style], ...viewProps },
        React.createElement(Animated.View, { style: [defaultStyles.handle, toggleStyles, styles.handle] }, showIcon && (React.createElement(React.Fragment, null, value ? (React.createElement(Icon, { source: { family: 'material', name: 'check' }, color: disabled ? theme.colors.disabled : theme.colors.onBackground, size: 16 })) : (React.createElement(Icon, { source: { family: 'material', name: 'close' }, color: disabled ? theme.colors.surfaceContainerHighest : theme.colors.onPrimary, size: 16 })))))));
};
