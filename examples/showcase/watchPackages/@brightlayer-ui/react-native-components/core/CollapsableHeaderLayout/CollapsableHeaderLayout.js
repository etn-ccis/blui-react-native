import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Animated, View, ScrollView} from 'react-native';
import {ANIMATION_LENGTH, Header} from '../Header/index.js';
import {useHeaderDimensions} from '../__hooks__/useHeaderDimensions.js';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';
const useUpdateScrollView = (
  contentPaddingValue,
  contentPadding,
  animatePadding,
  scrollRef,
  scrollValue,
) =>
  useMemo(() => {
    const updateScrollView = data => {
      const {padding, animate, scrollTo} = data;
      if (padding !== null && padding !== contentPaddingValue) {
        if (animate) animatePadding(padding).start();
        else contentPadding.setValue(padding);
      }
      // Only update the scroll position if it is not null and is different from the current
      if (scrollRef?.current && scrollTo !== null && scrollTo !== scrollValue) {
        scrollRef.current.scrollTo({
          x: 0,
          y: scrollTo,
          animated: animate,
        });
      }
    };
    return updateScrollView;
  }, [
    contentPaddingValue,
    contentPadding,
    animatePadding,
    scrollRef,
    scrollValue,
  ]);
/**
 * [CollapsibleHeaderLayout](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--collapsible-header-layout) component
 *
 * This component displays a scrollable page with a header that shrinks between an expanded size and
 * a collapsed size as the page is scrolled. It uses a standard [`Header`](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--header)
 * and `ScrollView` component under the hood and
 * you can set all of the props directly to these components in order to configure them. The layout itself
 * is primarily responsible for tracking the current scroll position and updating the size of the `Header`.
 */
export const CollapsibleHeaderLayout = props => {
  const {
    HeaderProps = {styles: {}},
    theme: themeOverride,
    ScrollViewProps = {},
    styles = {},
    style,
    ScrollComponent,
    ...viewProps
  } = props;
  const theme = useExtendedTheme(themeOverride);
  const scrollRef = useRef(null);
  const {getScaledHeight} = useHeaderDimensions();
  const animatedScrollValue = useRef(new Animated.Value(0)).current;
  const [scrollValue, setScrollValue] = useState(0);
  const headerVariant = HeaderProps.variant || 'dynamic';
  const startExpanded = HeaderProps.startExpanded || false;
  const collapsedHeight = getScaledHeight(HeaderProps.collapsedHeight || 56);
  const expandedHeight = getScaledHeight(HeaderProps.expandedHeight || 200);
  const scrollableDistance = expandedHeight - collapsedHeight;
  const initialScrollPosition =
    headerVariant === 'static' ? 0 : !startExpanded ? scrollableDistance : 0;
  const contentOffset = {x: 0, y: initialScrollPosition};
  // State Variables
  const [contentPadding] = useState(
    new Animated.Value(
      headerVariant === 'dynamic' || startExpanded || false
        ? expandedHeight
        : collapsedHeight,
    ),
  );
  const [contentPaddingValue, setContentPaddingValue] = useState(
    headerVariant === 'dynamic' || startExpanded || false
      ? expandedHeight
      : collapsedHeight,
  );
  // Animation function to smoothly animate the paddingTop of ScrollView
  const animatePadding = padding =>
    Animated.timing(contentPadding, {
      toValue: padding,
      duration: ANIMATION_LENGTH,
      useNativeDriver: false,
    });
  // Track the scroll position here too so we can minimize unnecessary updates
  const onScrollChange = useCallback(({value: scrollDistance}) => {
    // console.log('scrollDistance', scrollDistance);
    // save the current value of the animated scroll position
    setScrollValue(scrollDistance);
  }, []);
  // Track the padding current (non animated) value so we can minimize unnecessary updates
  const onPaddingChange = useCallback(({value: newPadding}) => {
    // save the current value of the animated padding
    setContentPaddingValue(newPadding);
  }, []);
  // Set up listeners
  useEffect(() => {
    const scroll = animatedScrollValue.addListener(onScrollChange);
    const padding = contentPadding.addListener(onPaddingChange);
    return () => {
      animatedScrollValue.removeListener(scroll);
      contentPadding.removeListener(padding);
    };
  }, [onScrollChange, onPaddingChange]);
  const updateScrollView = useUpdateScrollView(
    contentPaddingValue,
    contentPadding,
    animatePadding,
    scrollRef,
    scrollValue,
  );
  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            y: animatedScrollValue,
          },
        },
      },
    ],
    {
      useNativeDriver: false,
    },
  );
  return React.createElement(
    View,
    {
      ...viewProps,
      style: [
        {flex: 1, backgroundColor: theme.colors.background},
        styles.root,
        style,
      ],
    },
    React.createElement(Header, {
      testID: 'blui-header',
      ...HeaderProps,
      updateScrollView: updateScrollView,
      scrollPosition: animatedScrollValue,
      style: [
        HeaderProps.styles ? HeaderProps.styles.root : {},
        HeaderProps.style,
        {position: 'absolute', zIndex: 100},
      ],
    }),
    ScrollComponent
      ? ScrollComponent(handleScroll, contentPadding, contentOffset)
      : /* TODO: Refactor this to use a scroll component passed as a children to CollapsibleHeaderLayout in the next major release
         (
             <>{props.children && props.children(handleScroll, contentPadding, contentOffset)}</>
         )
        */
        React.createElement(
          ScrollView,
          {
            testID: 'blui-scrollview',
            scrollEventThrottle: 32,
            ...ScrollViewProps,
            ref: scrollRef,
            contentOffset: contentOffset,
            // Bind the scroll position directly to our animated value
            onScroll: Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      y: animatedScrollValue,
                    },
                  },
                },
              ],
              {
                // User-supplied callback function
                listener: ScrollViewProps.onScroll,
                useNativeDriver: false,
              },
            ),
          },
          React.createElement(
            Animated.View,
            {testID: 'blui-padded-view', style: {paddingTop: contentPadding}},
            props.children,
          ),
        ),
  );
};
