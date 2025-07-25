import React from 'react';
import {ViewProps, ViewStyle, StyleProp, TextStyle} from 'react-native';
import {$DeepPartial} from '@callstack/react-theme-provider';
import {IconSource} from '../__types__/index.js';
import {ExtendedTheme} from '@brightlayer-ui/react-native-themes';
export type ChannelValueProps = ViewProps & {
  /** Text to display for the value (bold text) */
  value: string | number;
  /** A component to render for the icon */
  icon?: IconSource;
  /**
   * The size of the icon
   *
   * @default: fontSize
   */
  iconSize?: number;
  /**
   * The color of the primary icon
   *
   * @default: theme.colors.onSurface
   */
  iconColor?: string;
  /** Text to display for the units (light text) */
  units?: string;
  /** Whether to show a space between the value and units
   *
   * @default: auto (shows space except for white list items)
   *
   * prefixUnitWhitelist: ['$'];
   * suffixUnitWhitelist: ['%', '℉','°F','℃','°C','°']
   */
  unitSpace?: 'show' | 'hide' | 'auto';
  /** Whether to show the units before the value (e.g., for currency)
   *
   * @default: false
   */
  prefix?: boolean;
  /** The size to use for the text elements
   *
   * @default: 16
   */
  fontSize?: number;
  /** The color used for the text elements
   *
   * @default: theme.colors.onSurface
   */
  color?: string;
  /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
  styles?: {
    root?: StyleProp<ViewStyle>;
    value?: StyleProp<TextStyle>;
    units?: StyleProp<TextStyle>;
  };
  /**
   * Theme value overrides specific to this component.
   */
  theme?: $DeepPartial<ExtendedTheme>;
};
/**
 * [ChannelValue](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--channel-value) component
 *
 * Used to show a stylized value and its units.
 * You may also include an icon.
 */
export declare const ChannelValue: React.FC<ChannelValueProps>;
