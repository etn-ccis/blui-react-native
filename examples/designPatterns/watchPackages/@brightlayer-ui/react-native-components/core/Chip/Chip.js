/**
 * @format
 * @flow
 */
import React from 'react';
import {Chip as PaperChip} from 'react-native-paper';
import {Icon} from '../Icon/index.js';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';
import {useFontStyles} from '../Utility/shared.js';
export const Chip = props => {
  const {
    children,
    icon,
    iconColor,
    style,
    textStyle,
    mode = 'outlined',
    selected,
    disabled,
    avatar,
    chipColor,
    borderColor,
    textColor,
    theme: themeOverride,
    styles = {},
    ...rest
  } = props;
  const {fontStyleRegular} = useFontStyles();
  const theme = useExtendedTheme(themeOverride);
  const isOutlined = mode === 'outlined';
  const isElevated = mode === 'elevated';
  const defaultChipColor = isOutlined
    ? disabled
      ? //the chip background color should be transparent in case it is set to disable in outline mode
        'transparent'
      : selected
        ? //the chip background color should be primary[80] in case it is set to selected in outline mode
          theme.colors.primaryContainer
        : //the chip background color should be transparent in case it is set to unselected in outline mode
          'transparent'
    : disabled
      ? //the chip background color should be neutral[10] 5% in case it is set to disable in elevated mode
        theme.colors.disabledContainer
      : selected
        ? //the chip background color should be primary[80] in case it is set to selected in elevated mode
          theme.colors.primaryContainer
        : //the chip background color should be neutral[97] in case it is set to unselected in elevated mode
          theme.colors.surfaceContainerLow;
  const DefaultTextColor = isOutlined
    ? disabled
      ? //the chip text color should be neutral[10] 20% in case it is set to disable in outline mode
        theme.colors.disabled
      : selected
        ? //the chip text color should be primary[80] in case it is set to selected in outline mode
          theme.colors.onPrimaryContainer
        : //the chip text color should be neutralVariant[30] in case it is set to unselected in outline mode
          theme.colors.onSurfaceVariant
    : disabled
      ? //the chip text color should be neutral[10] 25% in case it is set to disable in elevated mode
        theme.colors.onDisabledContainer
      : selected
        ? //the chip text color should be BLUIColors.primary[30] in case it is set to selected in elevated mode
          theme.colors.onPrimaryContainer
        : //the chip text color should be neutralVariant[30] in case it is set to unselected in elevated mode
          theme.colors.onSurfaceVariant;
  const getIcon = () => {
    if (icon) {
      return React.createElement(Icon, {
        source: icon,
        size: 18,
        color: iconColor ? iconColor : textColor ? textColor : DefaultTextColor,
      });
    } else if (avatar) {
      return avatar; // Show the passed Avatar component
    }
    return undefined;
  };
  const chipStyle = isElevated
    ? {}
    : selected
      ? {}
      : {
          borderWidth: 1,
          borderColor: borderColor
            ? borderColor
            : disabled
              ? theme.colors.disabled
              : theme.colors.outline,
        };
  const renderCloseIcon = () =>
    React.createElement(Icon, {
      source: {name: 'close'},
      size: 18,
      color: DefaultTextColor,
    });
  const renderIcon = () => getIcon();
  return React.createElement(
    React.Fragment,
    null,
    icon
      ? React.createElement(
          PaperChip,
          {
            style: [
              {
                backgroundColor: chipColor ? chipColor : defaultChipColor,
              },
              styles.root,
              style,
              chipStyle,
            ],
            textStyle: [
              {
                color: textColor ? textColor : DefaultTextColor,
                ...fontStyleRegular,
              },
              textStyle,
            ],
            showSelectedCheck: false,
            selected: selected,
            disabled: disabled,
            ...(isElevated && {elevated: !disabled}),
            closeIcon: renderCloseIcon,
            icon: renderIcon,
            ...rest,
          },
          children,
        )
      : avatar
        ? React.createElement(
            PaperChip,
            {
              style: [
                {
                  backgroundColor: chipColor ? chipColor : defaultChipColor,
                  paddingVertical: avatar.props.size
                    ? avatar.props.size > 24
                      ? 4
                      : 0
                    : 0,
                },
                styles.root,
                style,
                chipStyle,
              ],
              textStyle: [
                {
                  color: textColor ? textColor : DefaultTextColor,
                  ...fontStyleRegular,
                },
                textStyle,
              ],
              showSelectedCheck: false,
              selected: selected,
              disabled: disabled,
              avatar: React.cloneElement(avatar, {
                style: avatar.props.size
                  ? {
                      height: avatar.props.size,
                      width: avatar.props.size,
                      borderRadius: avatar.props.size,
                      ...avatar.props.style,
                    }
                  : {},
              }),
              ...(isElevated && {elevated: !disabled}),
              closeIcon: renderCloseIcon,
              ...rest,
            },
            children,
          )
        : React.createElement(
            PaperChip,
            {
              style: [
                {
                  backgroundColor: chipColor ? chipColor : defaultChipColor,
                },
                styles.root,
                style,
                chipStyle,
              ],
              textStyle: [
                {
                  color: textColor ? textColor : DefaultTextColor,
                  ...fontStyleRegular,
                },
                textStyle,
              ],
              showSelectedCheck: false,
              selected: selected,
              disabled: disabled,
              ...(isElevated && {elevated: !disabled}),
              closeIcon: renderCloseIcon,
              ...rest,
            },
            children,
          ),
  );
};
