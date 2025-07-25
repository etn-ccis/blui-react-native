import React from 'react';
import {ScrollViewProps, ViewStyle} from 'react-native';
import {AllSharedProps} from './types.js';
type DrawerBodyStyles = {
  root?: ViewStyle;
};
export type DrawerBodyProps = ScrollViewProps &
  AllSharedProps & {
    /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
    styles?: DrawerBodyStyles;
  };
/**
 * [DrawerBody](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--drawer) component
 *
 * The DrawerBody is a wrapper for the main content of your navigation Drawer. This section sits between
 * the DrawerHeader (or optional DrawerSubheader) and the DrawerFooter. This part of the drawer should hold
 * your main navigation elements (either using the `items` prop or by passing in DrawerNavGroup and DrawerNavItem children
 * declaratively).
 */
export declare const DrawerBody: React.FC<DrawerBodyProps>;
export {};
