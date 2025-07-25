import React from 'react';
import {IconSource} from '../__types__/index.js';
type HeaderIconProps = {
  /** A component to render for the icon  */
  icon?: IconSource;
  /** the color of the icon  */
  color?: string;
};
/**
 * HeaderIcon component
 *
 * The HeaderIcon is a helper component that is used to properly size and space icons in the Header component.
 */
export declare const HeaderIcon: React.FC<HeaderIconProps>;
export {};
