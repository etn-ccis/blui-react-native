import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {InfoListItem} from '../InfoListItem/index.js';
import {usePrevious} from '../__hooks__/usePrevious.js';
import {useDrawerContext} from './context/drawer-context.js';
import {useNavGroupContext} from './context/nav-group-context.js';
import {findChildByType, inheritSharedProps} from './utilities.js';
import Collapsible from 'react-native-collapsible';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Icon} from '../Icon/index.js';
import {
  useFontScale,
  useFontScaleSettings,
} from '../__contexts__/font-scale-context.js';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';
import {useFontStyles} from '../Utility/shared.js';
// First nested item has no additional indentation.  All items start with 16px indentation.
const calcNestedPadding = (depth, insets) =>
  insets.left + 16 + (depth > 0 ? depth * 40 : 0);
const makeStyles = (props, theme, fontScale) => {
  const {
    // Shared style props
    activeItemBackgroundColor = theme.colors.primaryContainer,
    activeItemBackgroundShape = 'square',
    backgroundColor,
    depth,
    nestedBackgroundColor = theme.colors.surfaceContainer,
  } = props;
  return StyleSheet.create({
    root: {
      backgroundColor: depth
        ? nestedBackgroundColor
        : backgroundColor || 'transparent',
    },
    activeBackground: {
      backgroundColor: activeItemBackgroundColor,
      zIndex: 0,
      position: 'absolute',
      height: '100%',
      width: activeItemBackgroundShape === 'square' ? '100%' : '97%',
      left: 0,
      top: 0,
      borderTopRightRadius:
        activeItemBackgroundShape === 'square' ? 0 : 24 * fontScale,
      borderBottomRightRadius:
        activeItemBackgroundShape === 'square' ? 0 : 24 * fontScale,
    },
    expandIcon: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 16,
    },
    flipIcon: {
      transform: [{scaleX: -1}],
    },
  });
};
/**
 * [DrawerNavItem](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--drawer) component
 *
 * The DrawerNavItem represents a single navigation item in the Drawer, usually a link to some route
 * in your application, but could also be used for static actions like login or logout. DrawerNavItems
 * can be nested (either declaratively by passing children or through the `items` prop). DrawerNavItems
 * are ultimately rendered as an InfoListItem element.
 *
 * When used inside of a DrawerNavGroup, certain props of the DrawerNavItem (`depth`, `isInActiveTree`, and `notifyActiveParent`)
 * are managed automatically for you.
 */
export const DrawerNavItem = props => {
  // Destructure the props
  const {theme: themeOverride, ...otherProps} = props;
  const theme = useExtendedTheme(themeOverride);
  const fontScale = useFontScale();
  const {disableScaling} = useFontScaleSettings();
  const defaultStyles = makeStyles(props, theme, fontScale);
  const {activeItem, onItemSelect} = useDrawerContext();
  const {activeHierarchy} = useNavGroupContext();
  const previousActive = usePrevious(activeItem || '');
  const {
    // Shared style props
    activeChevronColor = theme.colors.onPrimaryContainer,
    activeItemBackgroundColor /* eslint-disable-line @typescript-eslint/no-unused-vars */,
    activeItemBackgroundShape /* eslint-disable-line @typescript-eslint/no-unused-vars */,
    activeItemFontColor = theme.colors.onPrimaryContainer,
    activeItemIconColor = theme.colors.onPrimaryContainer,
    backgroundColor /* eslint-disable-line @typescript-eslint/no-unused-vars */,
    chevron,
    chevronColor = theme.colors.onSurfaceVariant,
    collapseIcon = {
      family: 'material',
      name: props.depth ? 'arrow-drop-up' : 'expand-less',
    },
    disableActiveItemParentStyles = false,
    divider,
    expandIcon = {
      family: 'material',
      name: props.depth ? 'arrow-drop-down' : 'expand-more',
    },
    hidePadding,
    itemFontColor = theme.colors.onSurface,
    itemIconColor = theme.colors.onSurfaceVariant,
    nestedBackgroundColor /* eslint-disable-line @typescript-eslint/no-unused-vars */,
    nestedDivider,
    // Drawer Nav Item specific props
    children,
    styles = {},
    depth = 0,
    hidden,
    icon: itemIcon,
    InfoListItemProps = {},
    isInActiveTree,
    itemID,
    items,
    notifyActiveParent = () => {},
    onPress,
    rightComponent,
    statusColor,
    subtitle: itemSubtitle,
    title: itemTitle,
    // other View props
  } = otherProps;
  const defaultProps = {
    activeItemFontColor: theme.colors.onPrimaryContainer,
    activeItemIconColor: theme.colors.onPrimaryContainer,
    collapseIcon: {
      family: 'material',
      name: props.depth ? 'arrow-drop-up' : 'expand-less',
    },
    disableActiveItemParentStyles: false,
    expandIcon: {
      family: 'material',
      name: props.depth ? 'arrow-drop-down' : 'expand-more',
    },
    itemFontColor: theme.colors.onSurface,
    itemIconColor: theme.colors.onSurfaceVariant,
    styles: {},
    depth: 0,
    icon: itemIcon,
    InfoListItemProps: {},
    notifyActiveParent: () => {},
    rightComponent: undefined,
    subtitle: itemSubtitle,
    title: itemTitle,
  };
  const insets = useSafeAreaInsets();
  const {fontStyleSemiBold, fontStyleRegular} = useFontStyles();
  const [expanded, setExpanded] = useState(isInActiveTree); // isInActiveTree: there is a bug in the react-native-collapsible that incorrectly calculates the initial panel height when using nested collapse panels
  const active = activeItem === itemID;
  const hasAction = Boolean(
    onItemSelect || onPress || (items && items.length > 0) || Boolean(children),
  );
  // only allow icons for the top level items
  const icon = !depth ? itemIcon : undefined;
  const showDivider =
    depth > 0
      ? nestedDivider !== undefined
        ? nestedDivider
        : false
      : divider !== undefined
        ? divider
        : false;
  // When the activeItem changes, update our expanded state
  useEffect(() => {
    if (isInActiveTree && !expanded) {
      setExpanded(true);
    }
  }, [isInActiveTree]); // Only update if the active tree changes (not after manual expand/collapse action)
  // If the active item changes
  useEffect(() => {
    if (activeItem === itemID && previousActive !== itemID) {
      // notify the parent that it should now be in the active tree
      notifyActiveParent([itemID]);
    }
  }, [activeItem, notifyActiveParent, itemID, previousActive]);
  // Handle click callbacks
  const onPressAction = useCallback(() => {
    if (onItemSelect) {
      onItemSelect(itemID);
    }
    if (onPress) {
      onPress();
    } else if ((items && items.length > 0) || Boolean(children)) {
      setExpanded(!expanded);
    }
  }, [onItemSelect, onPress, itemID, items, expanded, setExpanded, children]);
  const getActionComponent = useCallback(() => {
    if (!items && !children) {
      return null;
    }
    return React.createElement(
      View,
      {style: [defaultStyles.expandIcon, styles.expandIcon]},
      React.createElement(Icon, {
        source: collapseIcon && expanded ? collapseIcon : expandIcon,
        size: 24,
        color: theme.colors.onSurfaceVariant,
        allowFontScaling: !disableScaling,
      }),
    );
  }, [
    items,
    children,
    styles,
    defaultStyles,
    collapseIcon,
    expanded,
    expandIcon,
    disableScaling,
    theme.colors.onSurfaceVariant,
  ]);
  const actionComponent = getActionComponent();
  const getChildren = useCallback(
    () =>
      findChildByType(children, ['DrawerNavItem'])
        // .slice(0, 1)
        .map(child =>
          React.cloneElement(child, {
            ...inheritSharedProps(props, child.props),
            depth: depth + 1,
            isInActiveTree: activeHierarchy.includes(child.props.itemID),
            notifyActiveParent: (ids = []) => {
              notifyActiveParent(ids.concat(itemID));
            },
          }),
        ),
    [props, activeHierarchy, children, depth, itemID, notifyActiveParent],
  );
  const infoListItemStyles = styles.infoListItem || {};
  const {
    root: iliRoot,
    title: iliTitle,
    statusStripe: iliStatusStripe,
    ...otherILI
  } = infoListItemStyles;
  return React.createElement(
    React.Fragment,
    null,
    !hidden &&
      React.createElement(
        React.Fragment,
        null,
        React.createElement(
          View,
          {style: [defaultStyles.root, styles.root]},
          active &&
            React.createElement(View, {
              style: [defaultStyles.activeBackground, styles.activeBackground],
            }),
          React.createElement(InfoListItem, {
            dense: true,
            title: itemTitle,
            subtitle: itemSubtitle,
            divider: showDivider ? 'full' : undefined,
            statusColor: statusColor,
            fontColor: active ? activeItemFontColor : itemFontColor,
            icon: icon,
            chevron: !items && !children ? chevron : false,
            chevronColor: active ? activeChevronColor : chevronColor,
            iconColor: active ? activeItemIconColor : itemIconColor,
            rightComponent:
              (actionComponent || rightComponent) &&
              React.createElement(
                View,
                {style: {flexDirection: 'row', alignItems: 'center'}},
                rightComponent,
                actionComponent,
              ),
            backgroundColor: 'transparent',
            onPress: hasAction ? onPressAction : undefined,
            hidePadding: hidePadding,
            styles: {
              root: Object.assign(
                {paddingLeft: calcNestedPadding(depth, insets)},
                iliRoot,
              ),
              title: Object.assign(
                active || (isInActiveTree && !disableActiveItemParentStyles)
                  ? {
                      ...fontStyleSemiBold,
                      color: activeItemFontColor,
                    }
                  : {
                      ...fontStyleRegular,
                      color: itemFontColor,
                    },
                iliTitle,
              ),
              statusStripe: Object.assign({left: insets.left}, iliStatusStripe),
              ...otherILI,
            },
            ...InfoListItemProps,
          }),
        ),
        ((items && items.length > 0) || Boolean(children)) &&
          React.createElement(
            Collapsible,
            {collapsed: !expanded},
            items?.map((subItem, index) =>
              React.createElement(DrawerNavItem, {
                key: `itemList_${index}`,
                ...subItem,
                ...inheritSharedProps({...defaultProps, ...props}, subItem),
                depth: depth + 1,
                isInActiveTree: activeHierarchy.includes(subItem.itemID),
                notifyActiveParent: (ids = []) => {
                  notifyActiveParent(ids.concat(itemID));
                },
              }),
            ),
            getChildren(),
          ),
      ),
  );
};
DrawerNavItem.displayName = 'DrawerNavItem';
