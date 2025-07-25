import React from 'react';
import {
  Animated,
  ViewProps,
  ScrollViewProps as RNScrollViewProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {$DeepPartial} from '@callstack/react-theme-provider';
import {HeaderProps as BLUIHeaderProps} from '../Header/index.js';
import {ExtendedTheme} from '@brightlayer-ui/react-native-themes';
export type CollapsibleLayoutProps = ViewProps & {
  /** Props to spread to the Header component. */
  HeaderProps: BLUIHeaderProps;
  /** Scroll component passed as a prop */
  ScrollComponent?: (
    handleScroll: (e: any) => void,
    contentPadding: Animated.Value,
    contentOffset: {
      x: number;
      y: number;
    },
  ) => React.JSX.Element;
  /** Props to spread to the ScrollView component. */
  ScrollViewProps?: RNScrollViewProps;
  /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
  styles?: {
    root?: StyleProp<ViewStyle>;
  };
  /** Theme value overrides specific to this component. */
  theme?: $DeepPartial<ExtendedTheme>;
};
/**
 * [CollapsibleHeaderLayout](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--collapsible-header-layout) component
 *
 * This component displays a scrollable page with a header that shrinks between an expanded size and
 * a collapsed size as the page is scrolled. It uses a standard [`Header`](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--header)
 * and `ScrollView` component under the hood and
 * you can set all of the props directly to these components in order to configure them. The layout itself
 * is primarily responsible for tracking the current scroll position and updating the size of the `Header`.
 */
export declare const CollapsibleHeaderLayout: React.FC<CollapsibleLayoutProps>;
