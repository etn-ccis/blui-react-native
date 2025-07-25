import React, {useCallback, useState, useRef, useEffect} from 'react';
import {
  Animated,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import color from 'color';
import {ANIMATION_LENGTH} from './constants.js';
import {HeaderBackgroundImage} from './HeaderBackgroundImage.js';
import {HeaderNavigationIcon} from './HeaderNavigationIcon.js';
import {HeaderContent} from './HeaderContent.js';
import {HeaderActionItems} from './HeaderActionItems.js';
import {SearchContext} from './contexts/SearchContextProvider.js';
import {ColorContext} from './contexts/ColorContextProvider.js';
import {HeaderHeightContext} from './contexts/HeaderHeightContextProvider.js';
import {usePrevious} from '../__hooks__/usePrevious.js';
import {useHeaderDimensions} from '../__hooks__/useHeaderDimensions.js';
import {useFontScale} from '../__contexts__/font-scale-context.js';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';
const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);
const headerStyles = (props, theme, fontScale) => ({
  root: {
    width: '100%',
    backgroundColor: props.backgroundColor || theme.colors.primaryContainer,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 0,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: 'row',
    minHeight: 56 * fontScale,
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
export const Header = props => {
  const {
    actionItems,
    actionItemColor,
    backgroundColor,
    backgroundImage,
    expandable = false,
    expandedHeight: expandedHeightProp = 200,
    collapsedHeight: collapsedHeightProp = 56,
    fontColor,
    info,
    icon,
    navigationIconColor,
    onIconPress,
    scrollPosition = new Animated.Value(0),
    searchableConfig,
    startExpanded,
    subtitle,
    style,
    styles = {},
    theme: themeOverride,
    title,
    variant = 'static',
    updateScrollView = () => {},
    ...viewProps
  } = props;
  const {getScaledHeight, LANDSCAPE} = useHeaderDimensions();
  const fontScale = useFontScale();
  const theme = useExtendedTheme(themeOverride);
  const defaultStyles = headerStyles(props, theme, fontScale);
  const searchRef = useRef(null);
  const collapsedHeight = getScaledHeight(collapsedHeightProp);
  const previousCollapsedHeight = usePrevious(collapsedHeight);
  const expandedHeight = getScaledHeight(expandedHeightProp);
  const previousExpandedHeight = usePrevious(expandedHeight);
  const scrollableDistance = expandedHeight - collapsedHeight;
  const previousScrollableDistance = usePrevious(scrollableDistance);
  const dynamicHeaderHeight = Animated.subtract(
    new Animated.Value(expandedHeight),
    scrollPosition,
  );
  // Local State
  const [staticHeaderHeightValue, setStaticHeaderHeightValue] = useState(
    startExpanded ? expandedHeight : collapsedHeight,
  );
  const [scrollPositionValue, setScrollPositionValue] = useState(0);
  const inDynamicRange = scrollPositionValue <= scrollableDistance;
  const [searching, setSearching] = useState(false);
  const expanded = staticHeaderHeightValue === expandedHeight;
  const [manuallyExpanded, setManuallyExpanded] = useState(false);
  const [previousExpanded, setPreviousExpanded] = useState(expanded);
  const [useStaticHeight, setUseStaticHeight] = useState(variant === 'static');
  const [query, setQuery] = useState('');
  const [staticHeaderHeight] = useState(
    startExpanded
      ? new Animated.Value(expandedHeight)
      : new Animated.Value(collapsedHeight),
  );
  // Animation functions to smoothly transition the static Header height
  const expand = Animated.timing(staticHeaderHeight, {
    toValue: expandedHeight,
    duration: ANIMATION_LENGTH,
    useNativeDriver: false,
  });
  const contract = Animated.timing(staticHeaderHeight, {
    toValue: collapsedHeight,
    duration: ANIMATION_LENGTH,
    useNativeDriver: false,
  });
  /* UTILITY FUNCTIONS */
  // returns the count of each type of actionItem (component and icon) and the total width of components
  const getActionItemInfo = useCallback(() => {
    if (!actionItems)
      return {components: {count: 0, width: 0}, icons: {count: 0}};
    const actionComponents = actionItems.filter(item => item.component);
    const componentsCount = actionComponents.length;
    const componentsWidth = actionComponents.reduce(
      (accumulator, currentValue) =>
        accumulator + (currentValue.width || 40 * fontScale),
      0,
    );
    return {
      components: {count: componentsCount, width: componentsWidth},
      icons: {count: actionItems.length - componentsCount},
    };
  }, [actionItems]);
  /* EVENT LISTENERS */
  // if variant is changed, make the necessary updates to sizing, margins, etc.
  useEffect(() => {
    // Going from dynamic -> static
    if (variant === 'static') {
      setUseStaticHeight(true);
      if (!inDynamicRange) {
        if (!expanded) {
          updateScrollView({
            padding: collapsedHeight,
            animate: false,
            scrollTo: scrollPositionValue - scrollableDistance,
          });
        }
      } else {
        // less than halfway through the dynamic range -> use expanded
        if (scrollPositionValue <= scrollableDistance / 2) {
          if (expanded) {
            updateScrollView({
              padding: expandedHeight,
              animate: false,
              scrollTo: 0,
            });
          }
        }
        // more than halfway through the dynamic range -> use collapsed
        else if (!expanded) {
          updateScrollView({
            padding: collapsedHeight,
            animate: false,
            scrollTo: 0,
          });
        }
      }
    }
    // Going from static -> dynamic
    else {
      if (!inDynamicRange) {
        setUseStaticHeight(true);
        if (!expanded) {
          updateScrollView({
            padding: expandedHeight,
            animate: false,
            scrollTo: scrollPositionValue + scrollableDistance,
          });
        }
      } else {
        setUseStaticHeight(false);
        if (expanded) {
          staticHeaderHeight.setValue(
            scrollPositionValue <= scrollableDistance / 2
              ? expandedHeight
              : collapsedHeight,
          );
          updateScrollView({
            padding: expandedHeight,
            animate: false,
            scrollTo:
              scrollPositionValue <= scrollableDistance / 2
                ? 0
                : scrollableDistance,
          });
        } else {
          updateScrollView({
            padding: expandedHeight,
            animate: false,
            scrollTo:
              scrollPositionValue <= scrollableDistance / 2
                ? 0
                : scrollableDistance,
          });
        }
      }
    }
  }, [variant]);
  // if either height property is changed (or orientation), make the necessary updates to sizing, margins, etc.
  useEffect(() => {
    // don't execute this logic on the first render
    if (
      previousExpandedHeight === undefined ||
      previousCollapsedHeight === undefined
    )
      return;
    const wasExpanded = staticHeaderHeightValue === previousExpandedHeight;
    staticHeaderHeight.setValue(wasExpanded ? expandedHeight : collapsedHeight);
    if (wasExpanded) expand.start();
    else contract.start();
    const scrollableDifference =
      scrollableDistance - (previousScrollableDistance || scrollableDistance);
    const expandedDifference =
      expandedHeight - (previousExpandedHeight || expandedHeight);
    const collapsedDifference =
      collapsedHeight - (previousCollapsedHeight || collapsedHeight);
    // was in the dynamic range
    if (
      scrollPositionValue <= (previousScrollableDistance || scrollableDistance)
    ) {
      updateScrollView({
        padding:
          variant === 'dynamic' || wasExpanded
            ? expandedHeight
            : collapsedHeight,
        animate: false,
        scrollTo:
          variant === 'dynamic'
            ? wasExpanded
              ? -1 // workaround because if we pass 0 the ScrollView won't update because it thinks the scroll position is the same as before
              : scrollableDistance
            : scrollPositionValue + scrollableDifference,
      });
    } else {
      if (variant === 'static') {
        updateScrollView({
          padding: wasExpanded ? expandedHeight : collapsedHeight,
          animate: false,
          scrollTo:
            scrollPositionValue +
            (wasExpanded ? expandedDifference : collapsedDifference),
        });
      } else {
        updateScrollView({
          padding: expandedHeight,
          animate: false,
          scrollTo: scrollPositionValue + expandedDifference,
        });
      }
    }
  }, [expandedHeight, collapsedHeight, LANDSCAPE]);
  // Track the current value of the Animated header height
  const onHeightChange = useCallback(({value: newHeight}) => {
    setStaticHeaderHeightValue(newHeight);
  }, []);
  // Make updates based on changes in the scroll position
  const onScrollChange = useCallback(
    ({value: scrollValue}) => {
      // save the current value of the animated scroll position
      setScrollPositionValue(scrollValue);
      if (variant !== 'dynamic' || searching) return;
      if (scrollValue <= scrollableDistance) {
        if (manuallyExpanded) {
          if (!useStaticHeight) setUseStaticHeight(true);
          if (scrollValue <= 0) {
            setUseStaticHeight(false);
            setManuallyExpanded(false);
          }
        } else {
          setUseStaticHeight(false);
          // Adjust whether to collapse or expand on click based on how far the header is collapsed
          if (scrollValue <= scrollableDistance / 2) {
            staticHeaderHeight.setValue(expandedHeight);
          } else {
            staticHeaderHeight.setValue(collapsedHeight);
          }
        }
      }
      // We have scrolled out of the dynamic range (past the point of full collapse)
      else {
        if (!useStaticHeight && !manuallyExpanded) {
          staticHeaderHeight.setValue(collapsedHeight);
          setUseStaticHeight(true);
        }
      }
    },
    [
      expandedHeight,
      collapsedHeight,
      scrollableDistance,
      useStaticHeight,
      staticHeaderHeight,
      variant,
      searching,
      manuallyExpanded,
    ],
  );
  // Set up listeners
  useEffect(() => {
    const statics = staticHeaderHeight.addListener(onHeightChange);
    const listen = scrollPosition.addListener(onScrollChange);
    return () => {
      scrollPosition.removeListener(listen);
      staticHeaderHeight.removeListener(statics);
    };
  }, [onScrollChange, onHeightChange]);
  /* STYLE FUNCTIONS */
  // Returns the clamped header height based on scroll position
  const getDynamicHeaderHeight = () =>
    dynamicHeaderHeight.interpolate({
      inputRange: [collapsedHeight, expandedHeight],
      outputRange: [collapsedHeight, expandedHeight],
      extrapolate: 'clamp',
    });
  const getBackgroundColor = useCallback(() => {
    if (searching) {
      return theme.colors.surface;
    }
    return backgroundColor || theme.colors.primaryContainer;
  }, [searching, theme, backgroundColor]);
  const getFontColor = useCallback(() => {
    if (searching) {
      return theme.colors.onSurface;
    }
    return fontColor || theme.colors.onPrimaryContainer;
  }, [theme, fontColor, searching]);
  const statusBarStyle = useCallback(
    () =>
      color(getBackgroundColor()).isDark() ? 'light-content' : 'dark-content',
    [getBackgroundColor],
  );
  // Returns the interpolated bottom padding of the Header text elements
  const contentStyle = useCallback(
    () => [
      searching ? defaultStyles.search : defaultStyles.content,
      searching
        ? {}
        : {
            paddingBottom: (useStaticHeight
              ? staticHeaderHeight
              : dynamicHeaderHeight
            ).interpolate({
              inputRange: [collapsedHeight, expandedHeight],
              outputRange: [0, 28],
              extrapolate: 'clamp',
            }),
          },
    ],
    [
      subtitle,
      searching,
      dynamicHeaderHeight,
      defaultStyles,
      useStaticHeight,
      staticHeaderHeight,
      collapsedHeight,
      expandedHeight,
    ],
  );
  /* CALLBACK FUNCTIONS */
  // Callback when the Header is tapped (expandable only)
  const onPress = useCallback(() => {
    if (expanded) {
      contract.start();
      setManuallyExpanded(false);
      updateScrollView({
        padding: variant === 'dynamic' ? expandedHeight : collapsedHeight,
        animate: inDynamicRange,
        scrollTo:
          variant === 'dynamic'
            ? inDynamicRange
              ? scrollableDistance
              : null
            : inDynamicRange
              ? 0
              : scrollPositionValue - scrollableDistance,
      });
    } else {
      expand.start();
      setManuallyExpanded(true);
      updateScrollView({
        padding: expandedHeight,
        animate: inDynamicRange,
        scrollTo:
          variant === 'dynamic'
            ? inDynamicRange
              ? 0
              : null
            : inDynamicRange
              ? 0
              : scrollPositionValue + scrollableDistance,
      });
    }
  }, [
    expanded,
    updateScrollView,
    collapsedHeight,
    contract,
    expand,
    expandedHeight,
    variant,
    inDynamicRange,
    scrollPositionValue,
    scrollableDistance,
  ]);
  // Callback when the search bar text is updated
  const onChangeSearchText = useCallback(
    text => {
      setQuery(text);
      if (searchableConfig?.onChangeText) searchableConfig.onChangeText(text);
    },
    [setQuery, searchableConfig],
  );
  // Callback when the search icon is clicked
  const onPressSearch = useCallback(() => {
    setUseStaticHeight(true);
    setSearching(true);
    contract.start(() => {
      // setSearching(true);
    });
    updateScrollView({
      padding: collapsedHeight,
      animate: expanded && inDynamicRange,
      scrollTo:
        variant === 'dynamic' || expanded
          ? Math.max(scrollPositionValue - scrollableDistance, 0)
          : null,
    });
    setPreviousExpanded(expanded);
  }, [
    contract,
    expandable,
    inDynamicRange,
    updateScrollView,
    variant,
    expanded,
    scrollPositionValue,
    scrollableDistance,
    collapsedHeight,
    staticHeaderHeightValue,
  ]);
  // Callback when the search bar content is cleared
  const onPressSearchClear = useCallback(() => {
    const searchInput = searchRef.current;
    if (searchInput) {
      searchInput.clear();
      if (searchableConfig?.onChangeText) searchableConfig.onChangeText('');
    }
    setQuery('');
  }, [searchableConfig, searchRef]);
  // Callback when the search bar is closed
  const onPressSearchClose = useCallback(() => {
    const searchInput = searchRef.current;
    if (searchInput) {
      if (searchableConfig?.onChangeText) searchableConfig.onChangeText('');
    }
    setSearching(false);
    setQuery('');
    if (previousExpanded) {
      expand.start();
      updateScrollView({
        padding: expandedHeight,
        animate: inDynamicRange,
        scrollTo: inDynamicRange ? 0 : scrollPositionValue + scrollableDistance,
      });
    } else {
      if (variant === 'dynamic') {
        updateScrollView({
          padding: expandedHeight,
          animate: false,
          scrollTo: scrollPositionValue + scrollableDistance,
        });
      }
    }
  }, [
    searchableConfig,
    searchRef,
    previousExpanded,
    expand,
    expandedHeight,
    inDynamicRange,
    scrollPositionValue,
    scrollableDistance,
    updateScrollView,
    variant,
  ]);
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(StatusBar, {
      barStyle: statusBarStyle(),
      translucent: true,
      backgroundColor: 'transparent',
    }),
    React.createElement(
      TouchableWithoutFeedback,
      {
        accessible: false,
        onPress: () => onPress(),
        disabled: !expandable || searching,
        ...viewProps,
      },
      React.createElement(
        AnimatedSafeAreaView,
        {
          style: [
            defaultStyles.root,
            styles.root,
            style,
            /* We only use the dynamic height when we are in the dynamic range (from scrollPosition zero to expandedHeight - collapsedHeight)
                        Everywhere else, we use the fixed header height
                        */
            {
              height: useStaticHeight
                ? staticHeaderHeight
                : getDynamicHeaderHeight(),
            },
            searching ? {backgroundColor: theme.colors.surface} : {},
          ],
        },
        React.createElement(
          SearchContext.Provider,
          {
            value: {
              searchRef: searchRef,
              query: query,
              searching: searching,
              onQueryChange: onChangeSearchText,
              searchConfig: searchableConfig,
              onSearch: onPressSearch,
              onClear: onPressSearchClear,
              onClose: onPressSearchClose,
            },
          },
          React.createElement(
            ColorContext.Provider,
            {value: {color: getFontColor()}},
            React.createElement(
              HeaderHeightContext.Provider,
              {
                value: {
                  headerHeight: useStaticHeight
                    ? staticHeaderHeight
                    : getDynamicHeaderHeight(),
                },
              },
              React.createElement(HeaderBackgroundImage, {
                backgroundImage: backgroundImage,
                style: styles.backgroundImage,
              }),
              React.createElement(
                Animated.View,
                {style: [contentStyle(), styles.content]},
                React.createElement(HeaderNavigationIcon, {
                  icon: icon,
                  navigationIconColor: navigationIconColor
                    ? navigationIconColor
                    : theme.colors.onSurface,
                  onPress: onIconPress,
                  style: styles.icon,
                }),
                React.createElement(HeaderContent, {
                  theme: theme,
                  title: title,
                  subtitle: subtitle,
                  info: info,
                  actions: getActionItemInfo(),
                  styles: {
                    root: styles.textContent,
                    title: styles.title,
                    subtitle: styles.subtitle,
                    info: styles.info,
                    search: styles.search,
                  },
                }),
                React.createElement(HeaderActionItems, {
                  actionItems: actionItems,
                  actionItemColor: actionItemColor
                    ? actionItemColor
                    : theme.colors.onSurfaceVariant,
                  styles: {
                    root: styles.actionPanel,
                    actionItem: styles.actionItem,
                    component: styles.component,
                  },
                }),
              ),
              props.children,
            ),
          ),
        ),
      ),
    ),
  );
};
Header.displayName = 'Header';
