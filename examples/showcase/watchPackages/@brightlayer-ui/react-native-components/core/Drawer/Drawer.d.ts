import React from 'react';
import { ViewStyle, ViewProps } from 'react-native';
import { AllSharedProps } from './types.js';
type DrawerStyles = {
    root?: ViewStyle;
};
export type DrawerProps = ViewProps & AllSharedProps & {
    /** The itemID of the currently active / selected item */
    activeItem?: string;
    /** A callback function to execute whenever a navigation item is clicked */
    onItemSelect?: (id: string) => void;
    /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
    styles?: DrawerStyles;
};
/**
 * [Drawer](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--drawer) component
 *
 * The Drawer is a parent container that manages all of the content displayed in your primary
 * navigation drawer. It can contain a DrawerHeader, DrawerSubheader, DrawerBody, and DrawerFooter.
 */
export declare const Drawer: React.FC<DrawerProps>;
export {};
