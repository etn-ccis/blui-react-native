import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {HeaderIcon} from './HeaderIcon.js';
import {useSearch} from './contexts/SearchContextProvider.js';
import {useFontScale} from '../__contexts__/font-scale-context.js';
const ClearIcon = {name: 'clear'};
const SearchIcon = {name: 'search'};
const makeStyles = fontScale =>
  StyleSheet.create({
    root: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      right: 8,
      height: 56 * fontScale,
    },
    actionItem: {
      height: 40 * fontScale,
      width: 24 * fontScale + 16,
      paddingVertical: 8 * fontScale,
      paddingHorizontal: 8,
    },
    component: {
      height: 40 * fontScale,
      width: 40 * fontScale,
      justifyContent: 'center',
    },
  });
/**
 * HeaderActionItems component
 *
 * The HeaderActionItems is a helper component for organizing the contents in the Header. It is
 * used for displaying all of the action item icons and components.
 */
export const HeaderActionItems = props => {
  const {actionItems, actionItemColor, styles = {}} = props;
  const {searchConfig, searching, query, onClear, onSearch} = useSearch();
  const fontScale = useFontScale();
  const defaultStyles = makeStyles(fontScale);
  let items = actionItems || [];
  if (searching) {
    if (query) {
      items = [
        {
          icon: ClearIcon,
          onPress: onClear,
        },
      ];
    } else {
      items = [];
    }
  } else if (searchConfig) {
    items = [
      {
        icon: SearchIcon,
        onPress: onSearch,
      },
    ];
    if (actionItems) {
      items = items.concat(actionItems);
    }
  }
  if (items) {
    return React.createElement(
      View,
      {style: [defaultStyles.root, styles.root]},
      items.map((actionItem, index) => {
        if ('component' in actionItem) {
          return React.createElement(
            View,
            {
              key: `action_${index}`,
              testID: `header-action-item${index}`,
              accessibilityLabel: `header-action-item${index}`,
              style: [
                defaultStyles.component,
                actionItem.width ? {width: actionItem.width} : {},
                styles.component,
              ],
            },
            actionItem.component,
          );
        }
        return React.createElement(
          TouchableOpacity,
          {
            key: `action_${index}`,
            testID: `header-action-item${index}`,
            accessibilityLabel: `header-action-item${index}`,
            onPress: actionItem.onPress,
            style: [defaultStyles.actionItem, styles.actionItem],
          },
          React.createElement(HeaderIcon, {
            icon: actionItem.icon,
            color: actionItemColor,
          }),
        );
      }),
    );
  }
  return null;
};
