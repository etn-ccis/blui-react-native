import React, {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
type BottomSheetProps = {
  /** Make the bottom sheet visible */
  show?: boolean;
  /** Callback function to execute when the bottom sheet is dismissed */
  onClose?: () => void;
  /** Background color to use for the bottom sheet
   *
   * @default: theme.colors.surface
   */
  backgroundColor?: string;
  /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
  styles?: {
    root?: ViewStyle;
    background?: ViewStyle;
  };
};
/**
 * BottomSheet component
 *
 * This is a utility component for the UserMenu. It handles rendering the menu items in
 * a bottom sheet that appears from the bottom of the screen.
 */
export declare const BottomSheet: React.FC<
  BottomSheetProps & {
    children: ReactNode;
  }
>;
export {};
