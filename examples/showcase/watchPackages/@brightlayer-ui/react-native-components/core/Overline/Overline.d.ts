import React from 'react';
import {TextStyle, StyleProp} from 'react-native';
import {TextProps} from 'react-native-paper';
import {$DeepPartial} from '@callstack/react-theme-provider';
import {ExtendedTheme} from '@brightlayer-ui/react-native-themes';
export type OverlineProps = Omit<
  TextProps<'labelMedium'>,
  'theme' | 'variant'
> & {
  /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
  styles?: {
    root?: StyleProp<TextStyle>;
  };
  /**
   * Theme value overrides specific to this component.
   */
  theme?: $DeepPartial<ExtendedTheme>;
};
export declare const Overline: React.FC<OverlineProps>;
