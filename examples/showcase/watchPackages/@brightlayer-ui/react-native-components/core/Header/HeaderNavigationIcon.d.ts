import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { IconSource } from '../__types__/index.js';
type HeaderNavigationProps = {
    /** A component to render for the navigation icon */
    icon?: IconSource;
    /**
     * The color used for the navigation Icon
     *
     * @default: theme.colors.onSurface
     */
    navigationIconColor?: string;
    /** A callback function to call when the icon is pressed */
    onPress?: () => void;
    /** Style to apply to the Touchable element */
    style?: StyleProp<ViewStyle>;
};
/**
 * HeaderNavigationIcon component
 *
 * The HeaderNavigationIcon is a helper component that is used to properly size and space the main navigation icon (on the left) in the Header component.
 */
export declare const HeaderNavigationIcon: React.FC<HeaderNavigationProps>;
export {};
