import React, { ReactNode } from 'react';
import { ImageSourcePropType, StyleProp, ViewStyle, ImageStyle, TextStyle, TouchableWithoutFeedbackProps } from 'react-native';
import { IconSource } from '../__types__/index.js';
import { $DeepPartial } from '@callstack/react-theme-provider';
import { ExtendedTheme } from '@brightlayer-ui/react-native-themes';
export type DrawerHeaderProps = TouchableWithoutFeedbackProps & {
    /**
     * The header background color
     *
     * @default: theme.colors.surface
     */
    backgroundColor?: string;
    /**
     * An image to blend with the colored background in the header
     */
    backgroundImage?: ImageSourcePropType;
    /**
     * Background image opacity to help blend background image into the background color
     *
     * @default: 0.3
     */
    backgroundOpacity?: number;
    /** Callback to execute when the drawer header is pressed */
    onPress?: () => void;
    /**
     * Color of the icon and header texts
     *
     * @default: Icon: theme.colors.onSurface
     * Title: theme.colors.primary
     * Subtitle: theme.colors.onSurfaceVariant
     */
    fontColor?: string;
    /** Icon  to the left of the header text */
    icon?: IconSource;
    /** Callback to execute when the icon is pressed */
    onIconPress?: () => void;
    /** First line of text in the header */
    title?: string;
    /** Second line of text in the header */
    subtitle?: string;
    /** Custom content to use in place of the header title / subtitle */
    titleContent?: ReactNode;
    /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
    styles?: {
        root?: StyleProp<ViewStyle>;
        headerContainer?: StyleProp<ViewStyle>;
        backgroundImageWrapper?: StyleProp<ViewStyle>;
        backgroundImage?: StyleProp<ImageStyle>;
        content?: StyleProp<ViewStyle>;
        textContent?: StyleProp<ViewStyle>;
        title?: StyleProp<TextStyle>;
        subtitle?: StyleProp<TextStyle>;
        icon?: StyleProp<ViewStyle>;
    };
    /**
     * Theme value overrides specific to this component.
     */
    theme?: $DeepPartial<ExtendedTheme>;
};
/**
 * [DrawerHeader](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--drawer) component
 *
 * The DrawerHeader holds the content at the top of your navigation Drawer. You can supply a title and subtitle to
 * use the default styles, or you can supply your own custom titleContent to render. This section will always be pinned
 * at the top of the Drawer.
 */
export declare const DrawerHeader: React.FC<DrawerHeaderProps>;
