import React, {useCallback} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {ChannelValue} from '../ChannelValue/index.js';
import {Icon} from '../Icon/index.js';
import {useFontScale} from '../__contexts__/font-scale-context.js';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';
import {useFontStyles} from '../Utility/shared.js';
const {fontStyleSemiBold} = useFontStyles();
const makeStyles = (theme, fontScale) =>
  StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 8,
      paddingVertical: 16,
    },
    iconWrapper: {
      padding: 0,
      marginBottom: 8 * fontScale,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderRadius: 50,
    },
    values: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '100%',
    },
    label: {
      width: '100%',
      overflow: 'hidden',
      textAlign: 'center',
      ...fontStyleSemiBold,
      color: theme.colors.onSurfaceVariant,
    },
  });
/**
 * [Hero](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--hero) component
 *
 * The `<Hero>` component displays a particular icon, value/units, and a label. The icon property will accept any valid component - this will typically be a Material icon, [Brightlayer UI icon](https://github.com/etn-ccis/blui-icons), or [Progress Icon](https://github.com/etn-ccis/blui-progress-icons). It will also accept Text/Emoji values.
 */
export const Hero = props => {
  const {
    label,
    ChannelValueProps,
    onPress,
    icon,
    iconColor,
    iconSize,
    children,
    iconBackgroundColor,
    styles = {},
    style,
    theme: themeOverride,
    ...viewProps
  } = props;
  const theme = useExtendedTheme(themeOverride);
  const fontScale = useFontScale();
  const defaultStyles = makeStyles(theme, fontScale);
  const normalizeIconSize = useCallback(() => {
    if (!iconSize) return 36;
    return Math.max(10, Math.min(48, iconSize));
  }, [iconSize]);
  const getColor = useCallback(
    color => color || theme.colors.onSurfaceVariant,
    [theme],
  );
  const getIcon = useCallback(() => {
    if (icon) {
      return React.createElement(Icon, {
        source: icon,
        size: normalizeIconSize(),
        color: getColor(iconColor),
      });
    }
  }, [icon, normalizeIconSize, getColor, iconColor]);
  return React.createElement(
    TouchableOpacity,
    {
      onPress: onPress,
      disabled: !onPress,
      style: [defaultStyles.root, styles.root, style],
      ...viewProps,
    },
    React.createElement(
      View,
      {
        style: [
          defaultStyles.iconWrapper,
          {
            backgroundColor: iconBackgroundColor || 'rgba(255, 255, 255, 0)',
            height:
              typeof iconSize === 'number'
                ? normalizeIconSize()
                : (iconSize ?? 36 * fontScale),
            width:
              typeof iconSize === 'number'
                ? normalizeIconSize()
                : (iconSize ?? 36 * fontScale),
          },
          styles.iconWrapper,
        ],
      },
      getIcon(),
    ),
    React.createElement(
      View,
      {style: [defaultStyles.values, styles.values]},
      !children &&
        !!ChannelValueProps?.value &&
        React.createElement(ChannelValue, {fontSize: 22, ...ChannelValueProps}),
      children,
    ),
    React.createElement(
      Text,
      {
        variant: 'titleMedium',
        style: [defaultStyles.label, styles.label],
        numberOfLines: 1,
        ellipsizeMode: 'tail',
      },
      label,
    ),
  );
};
