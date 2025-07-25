import React from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {useSearch} from './contexts/SearchContextProvider.js';
import {useHeaderHeight} from './contexts/HeaderHeightContextProvider.js';
import {useHeaderDimensions} from '../__hooks__/useHeaderDimensions.js';
const defaultStyles = deviceWidth =>
  StyleSheet.create({
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      resizeMode: 'cover',
      width: deviceWidth,
    },
  });
/**
 * HeaderBackgroundImage component
 *
 * The HeaderBackgroundImage is a helper component for organizing the contents in the Header. It is
 * used for displaying the background image and blending it with the background color.
 */
export const HeaderBackgroundImage = props => {
  const {backgroundImage, style, ...otherImageProps} = props;
  const {searching} = useSearch();
  const {headerHeight} = useHeaderHeight();
  const {width} = Dimensions.get('screen');
  const {REGULAR_HEIGHT, EXTENDED_HEIGHT} = useHeaderDimensions();
  if (backgroundImage && !searching) {
    return React.createElement(Animated.Image, {
      testID: 'header-background-image',
      resizeMethod: 'resize',
      ...otherImageProps,
      source: backgroundImage,
      style: [
        defaultStyles(width).root,
        style,
        {
          height: headerHeight,
          opacity: headerHeight.interpolate({
            inputRange: [REGULAR_HEIGHT, EXTENDED_HEIGHT],
            outputRange: [0.2, 0.3],
          }),
        },
      ],
    });
  }
  return null;
};
