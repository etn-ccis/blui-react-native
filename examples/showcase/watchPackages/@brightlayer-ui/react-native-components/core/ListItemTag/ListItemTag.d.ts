import React from 'react';
import {TextStyle, StyleProp} from 'react-native';
import {TextProps} from 'react-native-paper';
import {$DeepPartial} from '@callstack/react-theme-provider';
import {ExtendedTheme} from '@brightlayer-ui/react-native-themes';
export type ListItemTagProps = Omit<
  TextProps<'bodyMedium'>,
  'children' | 'theme' | 'variant'
> & {
  /**
   * Background color for the label.
   *
   * @default: theme.colors.primaryFilledContainer
   **/
  backgroundColor?: string;
  /**
   * Text color for the label.
   *
   * @default: theme.colors.onPrimaryFilledContainer
   */
  fontColor?: string;
  /**
   * The font size to use
   */
  fontSize?: number;
  /** The label text. */
  label: string;
  /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
  styles?: {
    root?: StyleProp<TextStyle>;
  };
  /**
   * Theme value overrides specific to this component.
   */
  theme?: $DeepPartial<ExtendedTheme>;
};
/**
 * [ListItemTag](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--list-item-tag) component
 *
 * This component is primarily used as a tag for list elements. It is a stylized
 * text item with a colored background and rounded corners.
 */
export declare const ListItemTag: React.FC<ListItemTagProps>;
