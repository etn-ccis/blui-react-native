import React from 'react';
type DrawerSubheaderProps = {
  /**
   * Whether to show a dividing line below the subheader
   *
   * @default: true
   */
  divider?: boolean;
  children: React.JSX.Element;
};
/**
 * [DrawerSubheader](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--drawer) component
 *
 * The DrawerSubheader is a wrapper for additional content in your navigation Drawer. This section will always
 * be pinned between the DrawerHeader and the DrawerBody. You can pass in any content you want as a child of this
 * component, but you are responsible for adjusting the styles as necessary when the drawer is opened
 * and closed.
 */
export declare const DrawerSubheader: React.FC<DrawerSubheaderProps>;
export {};
