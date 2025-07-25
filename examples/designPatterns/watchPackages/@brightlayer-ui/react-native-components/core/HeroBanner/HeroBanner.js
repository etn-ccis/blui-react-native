import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-paper';
const defaultStyles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
/**
 * [HeroBanner](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--hero) component
 *
 * The HeroBanner is a wrapper component that is used to properly space out
 * [Hero](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--hero) component children in a flex container row.
 */
export const HeroBanner = props => {
  const {divider, children, styles = {}, style, ...viewProps} = props;
  const childrenArray = Array.isArray(children) ? children : [children];
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      View,
      {style: [defaultStyles.root, styles.root, style], ...viewProps},
      childrenArray,
      divider &&
        React.createElement(
          View,
          {style: defaultStyles.divider},
          React.createElement(Divider, null),
        ),
    ),
  );
};
