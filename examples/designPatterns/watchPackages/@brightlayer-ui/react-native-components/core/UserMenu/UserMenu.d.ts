import React from 'react';
import {ViewStyle} from 'react-native';
import {InfoListItemProps} from '../InfoListItem/index.js';
import {$DeepPartial} from '@callstack/react-theme-provider';
import {ExtendedTheme} from '@brightlayer-ui/react-native-themes';
export type UserMenuProps = {
  /** Avatar component to display as the menu trigger */
  avatar: React.JSX.Element;
  /** Background color of the bottom sheet
   *
   * @default: theme.colors.surface
   */
  backgroundColor?: string;
  /** Color of text for the bottom sheet header and menu items */
  fontColor?: string;
  /** Color of icons for the bottom sheet menu items
   * @default: theme.colors.onSurfaceVariant
   *
   */
  iconColor?: string;
  /** An array of menu items to display in the bottom sheet */
  menuItems: InfoListItemProps[];
  /** Title to display in the bottom sheet */
  menuTitle?: string;
  /** Subtitle to display in the bottom sheet */
  menuSubtitle?: string;
  /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
  styles?: {
    root?: ViewStyle;
    avatar?: ViewStyle;
    bottomsheet?: ViewStyle;
  };
  /**
   * Theme value overrides specific to this component.
   */
  theme?: $DeepPartial<ExtendedTheme>;
};
/**
 * [UserMenu](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--user-menu) component
 *
 * Renders an avatar that can be clicked to open a bottomsheet menu.
 *
 * Typically used for a account-style menu with links to settings, log out, etc.
 */
export declare const UserMenu: React.FC<UserMenuProps>;
