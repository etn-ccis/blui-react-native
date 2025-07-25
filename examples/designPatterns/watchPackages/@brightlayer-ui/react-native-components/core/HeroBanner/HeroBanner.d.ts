import React from 'react';
import {StyleProp, ViewStyle, ViewProps} from 'react-native';
export type HeroBannerProps = ViewProps & {
  /**
   * Whether to show a dividing line below the banner
   *
   * @default: false
   */
  divider?: boolean;
  /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
  styles?: {
    root?: StyleProp<ViewStyle>;
    divider?: StyleProp<ViewStyle>;
  };
};
/**
 * [HeroBanner](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--hero) component
 *
 * The HeroBanner is a wrapper component that is used to properly space out
 * [Hero](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--hero) component children in a flex container row.
 */
export declare const HeroBanner: React.FC<HeroBannerProps>;
