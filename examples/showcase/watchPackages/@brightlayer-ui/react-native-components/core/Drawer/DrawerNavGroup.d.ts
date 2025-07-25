import React, { ReactNode } from 'react';
import { ViewProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { NavItem } from './DrawerNavItem.js';
import { AllSharedProps } from './types.js';
export type DrawerNavGroupStyles = {
    root?: StyleProp<ViewStyle>;
    textContent?: StyleProp<ViewStyle>;
    title?: StyleProp<TextStyle>;
    divider?: StyleProp<ViewStyle>;
};
export type DrawerNavGroupProps = AllSharedProps & ViewProps & {
    /** List of navigation items to render */
    items?: NavItem[];
    /** Text to display in the group header */
    title?: string;
    /** Color to use for the group header title text
     *
     * @default: theme.colors.onSurface
     */
    titleColor?: string;
    /** Custom content to use in place of the group header title (if you want to use non-string content) */
    titleContent?: ReactNode;
    /** Whether to show a dividing line below the title */
    titleDivider?: boolean;
    /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
    styles?: DrawerNavGroupStyles;
};
/**
 * [DrawerNavGroup](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--drawer) component
 *
 * The DrawerNavGroup represents a collection of navigation items to display in the Drawer, useful for organizing
 * your links into buckets. Each group can be given a `title` to describe its items. Individual items in each group can be passed
 * through the `items` prop or passed declaratively as children.
 */
export declare const DrawerNavGroup: React.FC<DrawerNavGroupProps>;
