import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DrawerNavItem} from './DrawerNavItem.js';
import {Divider, Text} from 'react-native-paper';
import {findChildByType, inheritSharedProps} from './utilities.js';
import {useDrawerContext} from './context/drawer-context.js';
import {NavGroupContext} from './context/index.js';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useFontScale} from '../__contexts__/font-scale-context.js';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';
import {useFontStyles} from '../Utility/shared.js';
const makeStyles = (props, theme, insets, fontScale, fontStyleSemiBold) =>
  StyleSheet.create({
    root: {},
    textContent: {
      height: 52 * fontScale,
      position: 'relative',
      justifyContent: 'center',
      paddingLeft: insets.left,
    },
    title: {
      paddingHorizontal: 16,
      color: props.titleColor || theme.colors.onSurface,
      fontSize: 12,
      letterSpacing: 2,
      lineHeight: 16,
      textTransform: 'uppercase',
      ...fontStyleSemiBold,
    },
    divider: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
    },
  });
/**
 * findID function
 *
 * A depth-first recursive search function to identify if the specified
 * id is anywhere in the tree of the supplied item.
 *
 * @param item The topmost item to start from
 * @param activeItem The id to search for
 * @returns true if the ID is found in the tree, false otherwise
 */
const findID = (item, activeItem) => {
  if (!activeItem) return false;
  // if leaf node, return
  if (!item.items && !item.children) {
    return item.itemID === activeItem;
  }
  // else, loop through the branches by items
  if (item.items) {
    for (const subItem of item.items) {
      if (findID(subItem, activeItem)) {
        return true;
      }
    }
  }
  // and by children
  if (item.children) {
    const childItems = findChildByType(item.children, ['DrawerNavItem']);
    for (const child of childItems) {
      if (findID(child.props, activeItem)) {
        return true;
      }
    }
  }
  // no active items found, return false
  return false;
};
/**
 * [DrawerNavGroup](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--drawer) component
 *
 * The DrawerNavGroup represents a collection of navigation items to display in the Drawer, useful for organizing
 * your links into buckets. Each group can be given a `title` to describe its items. Individual items in each group can be passed
 * through the `items` prop or passed declaratively as children.
 */
export const DrawerNavGroup = props => {
  const {
    // Inheritable Props
    /* eslint-disable @typescript-eslint/no-unused-vars */
    activeChevronColor,
    activeItemBackgroundColor,
    activeItemBackgroundShape,
    activeItemFontColor,
    activeItemIconColor,
    backgroundColor,
    chevron,
    chevronColor,
    collapseIcon,
    disableActiveItemParentStyles,
    divider,
    expandIcon,
    hidePadding,
    itemFontColor,
    itemIconColor,
    nestedBackgroundColor,
    nestedDivider,
    /* eslint-enable @typescript-eslint/no-unused-vars */
    // DrawerNavGroup-specific props
    title,
    titleContent,
    titleColor /* eslint-disable-line @typescript-eslint/no-unused-vars */,
    titleDivider = true,
    items = [],
    styles = {},
    // Other View Props
    style,
    children,
    theme: themeOverride,
    ...viewProps
  } = props;
  const theme = useExtendedTheme(themeOverride);
  const {fontStyleSemiBold} = useFontStyles();
  const insets = useSafeAreaInsets();
  const fontScale = useFontScale();
  const defaultStyles = makeStyles(
    props,
    theme,
    insets,
    fontScale,
    fontStyleSemiBold,
  );
  const {activeItem} = useDrawerContext();
  const defaultProps = {
    titleDivider: true,
    items: [],
    styles: {},
  };
  /* Keeps track of which group of IDs are in the 'active hierarchy' */
  const [activeHierarchyItems, setActiveHierarchyItems] = useState([]);
  /* Clear the active hierarchy array if the new active Item cannot be found in the tree */
  useEffect(() => {
    if (!findID({items: props.items, children: props.children}, activeItem))
      setActiveHierarchyItems([]);
  }, [activeItem, props.items, props.children]);
  const getChildren = useCallback(
    () =>
      findChildByType(children, ['DrawerNavItem'])
        // .slice(0, 1)
        .map(child =>
          React.cloneElement(child, {
            // Inherited Props
            ...inheritSharedProps(props, child.props),
            // depth: 0,
            isInActiveTree: activeHierarchyItems.includes(child.props.itemID),
            notifyActiveParent: ids => {
              if (
                JSON.stringify(activeHierarchyItems) !== JSON.stringify(ids)
              ) {
                // Sets the list of active IDs when we get a callback from an active child
                setActiveHierarchyItems(ids);
              }
            },
          }),
        ),
    [props, activeHierarchyItems, setActiveHierarchyItems, children],
  );
  return React.createElement(
    NavGroupContext.Provider,
    {
      value: {
        activeHierarchy: activeHierarchyItems,
      },
    },
    React.createElement(
      View,
      {style: [defaultStyles.root, styles.root, style], ...viewProps},
      titleContent !== null &&
        React.createElement(
          View,
          {style: {paddingLeft: insets.left}},
          titleContent,
        ),
      !titleContent &&
        title &&
        React.createElement(
          View,
          {style: [defaultStyles.textContent, styles.textContent]},
          React.createElement(
            Text,
            {variant: 'bodyMedium', style: [defaultStyles.title, styles.title]},
            title,
          ),
          titleDivider &&
            React.createElement(Divider, {
              style: [defaultStyles.divider, styles.divider],
            }),
        ),
      items.map((item, index) =>
        React.createElement(DrawerNavItem, {
          key: `itemList_${index}`,
          ...item,
          ...inheritSharedProps({...defaultProps, ...props}, item),
          // depth={1}
          isInActiveTree: activeHierarchyItems.includes(item.itemID),
          notifyActiveParent: ids => {
            if (JSON.stringify(activeHierarchyItems) !== JSON.stringify(ids)) {
              // Sets the list of active IDs when we get a callback from an active child
              setActiveHierarchyItems(ids);
            }
          },
        }),
      ),
      getChildren(),
    ),
  );
};
DrawerNavGroup.displayName = 'DrawerNavGroup';
