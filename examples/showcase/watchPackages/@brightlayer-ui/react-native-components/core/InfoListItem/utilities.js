import React, {Fragment} from 'react';
import {interleave} from '../Helpers/Utils.js';
import {Text} from 'react-native-paper';
const renderSubtitleComponent = (element, style, isWrapped = false) => {
  switch (typeof element) {
    case 'string':
    case 'number':
      return React.createElement(
        Text,
        {variant: 'bodyMedium', numberOfLines: isWrapped ? 0 : 1, style: style},
        `${element}`,
      );
    default:
      return element;
  }
};
const renderInfoComponent = (element, style, isWrapped = false) => {
  switch (typeof element) {
    case 'string':
    case 'number':
      return React.createElement(
        Text,
        {variant: 'bodySmall', numberOfLines: isWrapped ? 0 : 1, style: style},
        `${element}`,
      );
    default:
      return element;
  }
};
export const renderableSubtitleComponent = (
  element,
  style,
  wrapSubtitle = false,
) => renderSubtitleComponent(element, style, wrapSubtitle);
export const renderableInfoComponent = (element, style, wrapInfo = false) =>
  renderInfoComponent(element, style, wrapInfo);
export const interpunct = (separator, style) =>
  React.createElement(
    Text,
    {variant: 'bodySmall', style: [{marginHorizontal: 4}, style]},
    separator || '\u00B7',
  );
export const withKeys = array =>
  array.map((element, index) =>
    React.createElement(Fragment, {key: index}, element),
  );
export const separate = (array, separator) =>
  interleave(array, () => interpunct(separator));
