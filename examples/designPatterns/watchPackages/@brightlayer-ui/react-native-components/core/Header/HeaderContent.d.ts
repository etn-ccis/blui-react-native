import React from 'react';
import {StyleProp, ViewStyle, TextStyle} from 'react-native';
import {ExtendedTheme} from '@brightlayer-ui/react-native-themes';
export type HeaderContentProps = {
  /** The content to render for the title */
  title: React.ReactNode;
  /** The content to render for the subtitle */
  subtitle?: React.ReactNode;
  /** The content to render for the info */
  info?: React.ReactNode;
  /** Specifies the number of avatars and icons that are included in the action list */
  actions?: {
    components: {
      count: number;
      width: number;
    };
    icons: {
      count: number;
    };
  };
  /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
  styles?: {
    root?: StyleProp<ViewStyle>;
    title?: StyleProp<TextStyle>;
    subtitle?: StyleProp<TextStyle>;
    info?: StyleProp<TextStyle>;
    search?: StyleProp<TextStyle>;
  };
  /**
   * Theme value overrides specific to this component.
   */
  theme: ExtendedTheme;
};
/**
 * HeaderContent component
 *
 * The HeaderContent is a helper component for organizing the contents in the Header. It is
 * a wrapper that organizes the title, subtitle, info, and search inputs appropriately.
 */
export declare const HeaderContent: React.FC<HeaderContentProps>;
