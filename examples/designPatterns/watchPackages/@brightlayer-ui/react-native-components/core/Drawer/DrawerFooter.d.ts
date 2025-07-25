import React from 'react';
type DrawerFooterProps = {
  /**
   * Whether to show a dividing line above the footer
   *
   * @default: true
   */
  divider?: boolean;
  /**
   * children element that need to be rendered inside footer
   */
  children?: React.JSX.Element;
};
/**
 * [DrawerFooter](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--drawer) component
 *
 * The DrawerFooter is a wrapper for the bottom of your navigation Drawer. This section will always
 * be pinned to the bottom of the Drawer. You can pass in any content you want as a child of this
 * component, but you are responsible for adjusting the styles as necessary when the drawer is opened
 * and closed.
 */
export declare const DrawerFooter: React.FC<DrawerFooterProps>;
export {};
