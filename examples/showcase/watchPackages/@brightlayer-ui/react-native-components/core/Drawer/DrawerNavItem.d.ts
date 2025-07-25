import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle, ViewProps } from 'react-native';
import { InfoListItemProps as BLUIInfoListItemProps } from '../InfoListItem/index.js';
import { AllSharedProps } from './types.js';
import { IconSource } from '../__types__/index.js';
export type DrawerNavItemStyles = {
    root?: StyleProp<ViewStyle>;
    activeBackground?: StyleProp<ViewStyle>;
    expandIcon?: StyleProp<ViewStyle>;
    infoListItem?: BLUIInfoListItemProps['styles'];
};
export type DrawerNavItemProps = AllSharedProps & ViewProps & {
    children?: ReactNode;
    /**
     * The nested depth of the item (for creating trees).
     *
     * This property is managed automatically when used inside of a DrawerNavGroup.
     *
     * @default: 0
     */
    depth?: number;
    /**
     * Hides / does not render the item (useful for hiding certain items based on user role or permissions)
     *
     * @default: false
     */
    hidden?: boolean;
    /** A component to render for the left icon */
    icon?: IconSource;
    /**
     * Is the item a parent / ancestor of the current activeItem.
     *
     * This property is managed automatically when used inside of a DrawerNavGroup.
     *
     * @default: false
     */
    isInActiveTree?: boolean;
    /**
     * A unique ID for this item. This ID must be unique across all navigation items in a drawer.
     * The item will have the 'active' styles applied when this ID matches the `activeItem` property
     * that is set on the drawer.
     */
    itemID: string;
    /**
     * An array of navigation items to nest under this item in a tree structure
     */
    items?: NestedDrawerNavItemProps[];
    /**
     * A callback function to the parent element to tell it to update the active item hierarchy / styles
     *
     * This property is managed automatically when used inside of a DrawerNavGroup.
     */
    notifyActiveParent?: (ids: string[]) => void;
    /**
     * Callback function to execute when the navigation item is pressed
     */
    onPress?: () => void;
    /**
     * Custom content/component to display to the right
     */
    rightComponent?: React.JSX.Element;
    /**
     * Color used for the status stripe and icon
     */
    statusColor?: string;
    /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
    styles?: DrawerNavItemStyles;
    /** The text to display on the second line */
    subtitle?: string;
    /** The text to display on the first line */
    title: string;
    /** Used to override [InfoListItem](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--info-list-item) default props */
    InfoListItemProps?: Partial<BLUIInfoListItemProps>;
};
export type NestedDrawerNavItemProps = Omit<DrawerNavItemProps, 'icon'>;
export type NavItem = DrawerNavItemProps;
export type NestedNavItem = NestedDrawerNavItemProps;
/**
 * [DrawerNavItem](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--drawer) component
 *
 * The DrawerNavItem represents a single navigation item in the Drawer, usually a link to some route
 * in your application, but could also be used for static actions like login or logout. DrawerNavItems
 * can be nested (either declaratively by passing children or through the `items` prop). DrawerNavItems
 * are ultimately rendered as an InfoListItem element.
 *
 * When used inside of a DrawerNavGroup, certain props of the DrawerNavItem (`depth`, `isInActiveTree`, and `notifyActiveParent`)
 * are managed automatically for you.
 */
export declare const DrawerNavItem: React.FC<DrawerNavItemProps>;
