import * as React from 'react';
import {IconComponentProps, IconSource} from '../__types__/index.js';
import {ExtendedTheme} from '@brightlayer-ui/react-native-themes';
export type IconProps = IconComponentProps & {
  /** An object to specify the source of the icon */
  source: IconSource;
  /** Theme value overrides specific to this component. */
  /**
   * @optional
   */
  theme?: ExtendedTheme;
};
/**
 * Icon component
 *
 * The Icon component is an internal utility component used to render icons inside of other components.
 * It standardizes the implementation of the icon and handles all of the different ways
 * to specify the icon without having to duplicate this logic inside of every component that
 * utilizes icons.
 */
export declare const Icon: React.FC<IconProps>;
