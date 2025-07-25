/**
 * @format
 * @flow
 */
import React from 'react';
import {ChipProps as PaperChipProps} from 'react-native-paper';
import {$DeepPartial} from '@callstack/react-theme-provider';
import {IconSource} from '../__types__/index.js';
import {ExtendedTheme} from '@brightlayer-ui/react-native-themes';
import {StyleProp, ViewStyle} from 'react-native';
/**
 * Props for the Chip component.
 *
 * @typedef {object} ChipProps
 * @prop {string} [children] - The content to be displayed inside the Chip.
 * @prop {IconSource} [icon] - The source for the Icon displayed in the Chip.
 * @prop {string} [iconColor] - The color of the Icon in the Chip.
 * @prop {string} [textColor] - The color of the text content in the Chip.
 * @prop {string} [chipColor] - The background color of the Chip.
 * @prop {string} [borderColor] - The border color of the Chip.
 * @prop {boolean} [selected] - Whether the Chip is in a selected state.
 * @prop {boolean} [disabled] - Whether the Chip is in a disabled state.
 * @prop {$DeepPartial<ExtendedTheme>} [theme] - Theme value overrides specific to this component.
 * @prop {React.ReactElement} [avatar] - Avatar component to be displayed in the Chip.
 * @prop {string} [mode='outlined'] - Chip mode, either 'outlined' or 'elevated'.
 */
/**
 * A customizable Chip component.
 *
 * @param {ChipProps} props - The props for the Chip component.
 * @returns {React.JSX.Element} - The rendered Chip component.
 */
export type ChipProps = Omit<
  PaperChipProps,
  'icon' | 'mode' | 'selectedColor'
> & {
  /**
   * @prop {$DeepPartial<ExtendedTheme>} [theme] - Theme value overrides specific to this component.
   */
  theme?: $DeepPartial<ExtendedTheme>;
  /**
   * @prop {string} [iconColor] - The color of the Icon in the Chip.
   */
  iconColor?: string;
  /**
   * @prop {string} [textColor] - The color of the text content in the Chip.
   */
  textColor?: string;
  /**
   *  @prop {string} [chipColor] - The background color of the Chip.
   */
  chipColor?: string;
  /**
   *  @prop {string} [borderColor] - The border color of the Chip.
   */
  borderColor?: string;
  /**
   * @prop {IconSource} [icon] - The source for the Icon displayed in the Chip.
   */
  icon?: IconSource;
  /**
   * @prop {string} [mode='outlined'] - Chip mode, either 'outlined' or 'elevated' Default is outlined.
   */
  mode?: 'elevated' | 'outlined';
  /**
   * @prop {React.ReactElement} [avatar] - Avatar component to be displayed in the Chip.
   */
  avatar?: React.ReactElement<any>;
  /**
   * Style overrides for internal elements. The styles you provide will be combined with the default styles.
   */
  styles?: {
    root?: StyleProp<ViewStyle>;
  };
};
export declare const Chip: React.FC<ChipProps>;
