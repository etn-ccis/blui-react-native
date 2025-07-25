import React from 'react';
import {ViewProps, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {$DeepPartial} from '@callstack/react-theme-provider';
import {IconSource} from '../__types__/index.js';
import {ExtendedTheme} from '@brightlayer-ui/react-native-themes';
type IconAlign = 'left' | 'center' | 'right';
export type InfoListItemProps = ViewProps & {
  /**
   * Show a colored background behind the icon
   *
   * @default: false
   */
  avatar?: boolean;
  /** The color used for the background of the InfoListItem
   *
   * @default: 'transparent'
   */
  backgroundColor?: string;
  /**
   * Add a chevron icon on the right
   *
   * @default: false
   */
  chevron?: boolean;
  /**
   * The color used for chevron icon
   *
   * @default: theme.colors.onSurfaceVariant
   */
  chevronColor?: string;
  /**
   * Smaller height rows with less padding
   *
   * @default: false
   */
  dense?: boolean;
  /**
   * Show a dividing line below the row
   * - partial: aligns with the main text keyline of the row
   * - full: spans the full width of the row
   *
   * @default: none
   */
  divider?: 'full' | 'partial';
  /**
   * Color to use for text elements
   *
   * @default: Title: theme.colors.onSurface
   * Subtitle, Info: theme.colors.onSurfaceVariant
   */
  fontColor?: string;
  /**
   * Hide the padding reserved for icons when there is no icon. If this is set to false, the text for the InfoListItem will align
   * together even if there is a mix of items with icons and items without. If this is set to true, the extra padding
   * for items without icons is removed and the text will align with the icon of other rows.
   *
   * @default: false
   */
  hidePadding?: boolean;
  /**
   * Icon alignment when avatar prop is set to false
   *
   * @default: 'left'
   */
  iconAlign?: IconAlign;
  /** A component to render for the icon */
  icon?: IconSource;
  /** Color to use for the icon
   * @default: theme.colors.onSurfaceVariant
   * With Avatar: theme.colors.onNeutralFilledContainer
   */
  iconColor?: string;
  /** The text to show on the third line.
   *
   * If an array is supplied, array items will be separated by the `subtitleSeparator`.
   * */
  info?: string | React.ReactNode[];
  /** Custom content to render between the icon and the text elements */
  leftComponent?: React.JSX.Element;
  /** Callback function to execute when the list item is pressed. */
  onPress?: () => void;
  /** Custom content to render to the right of the text elements */
  rightComponent?: React.JSX.Element;
  /** Color to use indicating status. This will apply to the status stripe and icon
   *
   * @default: theme.colors.onSurfaceVariant
   */
  statusColor?: string;
  /**
   * Separator character used between subtitle or info elements when an array is passed.
   *
   * @default: '·'
   */
  subtitleSeparator?: string;
  /** The text to show on the second line.
   *
   * If an array is supplied, array items will be separated by the `subtitleSeparator`.
   * */
  subtitle?: string | React.ReactNode[];
  /** The text to show on the first line */
  title: string;
  /** Whether the info line text should wrap to multiple lines on overflow
   *
   * @default: false
   */
  wrapInfo?: boolean;
  /** Whether the subtitle line text should wrap to multiple lines on overflow
   *
   * @default: false
   */
  wrapSubtitle?: boolean;
  /** Whether the title line text should wrap to multiple lines on overflow
   *
   * @default: false
   */
  wrapTitle?: boolean;
  /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
  styles?: {
    root?: StyleProp<ViewStyle>;
    statusStripe?: StyleProp<ViewStyle>;
    iconWrapper?: StyleProp<ViewStyle>;
    avatar?: StyleProp<ViewStyle>;
    icon?: StyleProp<ViewStyle>;
    mainContent?: StyleProp<ViewStyle>;
    title?: StyleProp<TextStyle>;
    subtitle?: StyleProp<TextStyle>;
    subtitleWrapper?: StyleProp<ViewStyle>;
    info?: StyleProp<TextStyle>;
    infoWrapper?: StyleProp<ViewStyle>;
    divider?: StyleProp<ViewStyle>;
  };
  /**
   * Theme value overrides specific to this component.
   */
  theme?: $DeepPartial<ExtendedTheme>;
};
/**
 * [InfoListItem](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--info-list-item) component
 *
 * The InfoListItem is a component used to render lists. It extends the basic implementation
 * of a list item with additional features, such as icons and status stripes and supplies all of
 * the correct Brightlayer UI styles.
 */
export declare const InfoListItem: React.FC<InfoListItemProps>;
export {};
