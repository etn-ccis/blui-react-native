import React from 'react';
import {Icon} from '../Icon/index.js';
import {useFontScaleSettings} from '../__contexts__/font-scale-context.js';
import {ICON_SIZE} from './constants.js';
/**
 * HeaderIcon component
 *
 * The HeaderIcon is a helper component that is used to properly size and space icons in the Header component.
 */
export const HeaderIcon = props => {
  const {icon, color} = props;
  const {disableScaling} = useFontScaleSettings();
  if (icon) {
    return React.createElement(Icon, {
      source: icon,
      size: ICON_SIZE,
      color: color,
      allowFontScaling: !disableScaling,
    });
  }
  return null;
};
