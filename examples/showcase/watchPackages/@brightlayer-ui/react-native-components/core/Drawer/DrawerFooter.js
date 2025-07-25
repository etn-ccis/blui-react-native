import React from 'react';
import {Divider} from 'react-native-paper';
/**
 * [DrawerFooter](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--drawer) component
 *
 * The DrawerFooter is a wrapper for the bottom of your navigation Drawer. This section will always
 * be pinned to the bottom of the Drawer. You can pass in any content you want as a child of this
 * component, but you are responsible for adjusting the styles as necessary when the drawer is opened
 * and closed.
 */
export const DrawerFooter = props => {
  const {children, divider = true} = props;
  return React.createElement(
    React.Fragment,
    null,
    divider && React.createElement(Divider, null),
    children,
  );
};
DrawerFooter.displayName = 'DrawerFooter';
