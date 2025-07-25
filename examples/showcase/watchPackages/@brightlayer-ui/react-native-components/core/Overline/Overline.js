import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useFontScaleSettings} from '../__contexts__/font-scale-context.js';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';
const overlineStyles = theme =>
  StyleSheet.create({
    root: {
      color: theme.colors.onSurface,
      letterSpacing: 2,
      textTransform: 'uppercase',
    },
  });
export const Overline = props => {
  const {
    children,
    style,
    styles = {},
    theme: themeOverride,
    ...otherTextProps
  } = props;
  const theme = useExtendedTheme(themeOverride);
  const defaultStyles = overlineStyles(theme);
  const {maxScale, disableScaling} = useFontScaleSettings();
  return React.createElement(
    Text,
    {
      variant: 'labelMedium',
      style: [defaultStyles.root, styles.root, style],
      allowFontScaling: !disableScaling,
      maxFontSizeMultiplier: maxScale,
      ...otherTextProps,
    },
    children,
  );
};
