import React, {useCallback} from 'react';
import {View, StyleSheet, I18nManager} from 'react-native';
import {Text} from 'react-native-paper';
import {Icon} from '../Icon/index.js';
import {Spacer} from '../Utility/index.js';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';
import {calculateHeight, useFontStyles} from '../Utility/shared.js';
const prefixUnitWhitelist = ['$'];
const suffixUnitWhitelist = ['%', '℉', '°F', '℃', '°C', '°'];
const defaultStyles = StyleSheet.create({
  root: {
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
/**
 * [ChannelValue](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--channel-value) component
 *
 * Used to show a stylized value and its units.
 * You may also include an icon.
 */
export const ChannelValue = props => {
  const {
    value,
    fontSize = 16,
    icon,
    iconColor,
    iconSize,
    color,
    units,
    theme: themeOverride,
    unitSpace = 'auto',
    prefix = false,
    styles = {},
    style,
    ...viewProps
  } = props;
  const theme = useExtendedTheme(themeOverride);
  const {fontStyleSemiBold, fontStyleLight} = useFontStyles();
  const getColor = useCallback(() => {
    if (!color) return theme.colors.onSurface;
    return color;
  }, [color, theme]);
  const getIcon = useCallback(() => {
    if (icon) {
      return React.createElement(
        View,
        {style: [{marginRight: Math.round(fontSize / 3)}]},
        React.createElement(Icon, {
          source: icon,
          size: iconSize || fontSize,
          color: iconColor || getColor(),
        }),
      );
    }
  }, [icon, fontSize, getColor, iconColor, iconSize]);
  const getUnits = useCallback(
    spacerLocation => {
      if (units) {
        return React.createElement(
          React.Fragment,
          null,
          ((spacerLocation === 'before' && unitSpace === 'show') ||
            (spacerLocation === 'before' &&
              unitSpace === 'auto' &&
              !suffixUnitWhitelist.includes(units))) &&
            React.createElement(Spacer, {flex: 0, width: fontSize / 4}),
          React.createElement(
            Text,
            {
              variant: 'titleMedium',
              style: [
                {
                  color: getColor(),
                  fontSize: fontSize,
                  lineHeight: calculateHeight(fontSize),
                },
                fontStyleLight,
                styles.units,
              ],
            },
            units,
          ),
          ((spacerLocation === 'after' && unitSpace === 'show') ||
            (spacerLocation === 'after' &&
              unitSpace === 'auto' &&
              !prefixUnitWhitelist.includes(units))) &&
            React.createElement(Spacer, {flex: 0, width: fontSize / 4}),
        );
      }
    },
    [units, fontSize, getColor, styles, unitSpace, fontStyleLight],
  );
  const prefixUnits = useCallback(() => {
    if ((!I18nManager.isRTL && prefix) || (I18nManager.isRTL && !prefix)) {
      return getUnits('after');
    }
  }, [prefix, getUnits]);
  const suffixUnits = useCallback(() => {
    if ((I18nManager.isRTL && prefix) || (!I18nManager.isRTL && !prefix)) {
      return getUnits('before');
    }
  }, [prefix, getUnits]);
  return React.createElement(
    View,
    {style: [defaultStyles.root, styles.root, style], ...viewProps},
    getIcon(),
    React.createElement(
      Text,
      {
        variant: 'titleMedium',
        numberOfLines: 1,
        ellipsizeMode: 'tail',
        testID: 'text-wrapper',
        style: [
          {
            color: getColor(),
            fontSize: fontSize,
            lineHeight: calculateHeight(fontSize),
            ...fontStyleSemiBold,
          },
        ],
      },
      prefixUnits(),
      React.createElement(
        Text,
        {
          variant: 'titleMedium',
          style: [
            {
              color: getColor(),
              fontSize: fontSize,
              ...fontStyleSemiBold,
              lineHeight: calculateHeight(fontSize),
            },
            styles.value,
          ],
        },
        value,
      ),
      suffixUnits(),
    ),
  );
};
