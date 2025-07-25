import React, { ReactNode } from 'react';
import { Animated, ImageSourcePropType, ViewProps, StyleProp, ViewStyle, TextStyle, ImageStyle, TextInputProps } from 'react-native';
import { HeaderActionComponent, HeaderIcon, IconSource } from '../__types__/index.js';
import { $DeepPartial } from '@callstack/react-theme-provider';
import { ExtendedTheme } from '@brightlayer-ui/react-native-themes';
export type SearchableConfig = {
    /**
     * Determines how the search input will be capitalized
     *
     * @default: 'none'
     */
    autoCapitalize?: TextInputProps['autoCapitalize'];
    /**
     * Determines whether auto-correct is enabled in the search input
     *
     * @default: false
     */
    autoCorrect?: boolean;
    /**
     * Determines whether the search input will be focused on when it is rendered / opened
     *
     * @default: false
     */
    autoFocus?: boolean;
    /** Icon to override default search icon */
    icon?: IconSource;
    /** Callback for when the text in the search input changes */
    onChangeText?: (text: string) => void;
    /**
     * Placeholder text for the search input
     *
     * @default: 'Search'
     */
    placeholder?: string;
};
export type HeaderProps = ViewProps & {
    /** Array of icons / actions to display on the right */
    actionItems?: Array<HeaderIcon | HeaderActionComponent>;
    /**
     * The color used for the action Items
     *
     * @default: theme.colors.onSurfaceVariant
     */
    actionItemColor?: string;
    /**
     * The color used for the background
     *
     * @default: theme.colors.primaryContainer
     */
    backgroundColor?: string;
    /**
     * An image to blend with the colored background in the header
     */
    backgroundImage?: ImageSourcePropType;
    /**
     * Height of the Header when fully collapsed
     *
     * @default: 56
     */
    collapsedHeight?: number;
    /**
     * Allow the header to be expanded / collapsed by tapping
     *
     * @default: false
     */
    expandable?: boolean;
    /**
     * Height of the Header when fully expanded
     *
     * @default: 200
     */
    expandedHeight?: number;
    /**
     * Color of the title, subtitle, info, and icons in the header
     *
     * @default: theme.colors.onPrimary
     */
    fontColor?: string;
    /** Optional header third line of text (hidden when collapsed) */
    info?: ReactNode;
    /** Icon to show to the left of the title, primarily used to trigger the menu / drawer */
    icon?: IconSource;
    /**
     * The color used for the navigation Icon
     *
     * @default: theme.colors.onSurface
     */
    navigationIconColor?: string;
    /** Callback to execute when the icon is pressed */
    onIconPress?: () => void;
    /**
     * Y-value of the scroll position of the linked ScrollView (dynamic variant only)
     */
    scrollPosition?: Animated.Value;
    /** Configuration object for search behavior */
    searchableConfig?: SearchableConfig;
    /**
     * Renders the header in the expanded state to start
     *
     * @default: false
     */
    startExpanded?: boolean;
    /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
    styles?: {
        root?: StyleProp<ViewStyle>;
        backgroundImage?: StyleProp<ImageStyle>;
        component?: StyleProp<ViewStyle>;
        content?: StyleProp<ViewStyle>;
        icon?: StyleProp<ViewStyle>;
        textContent?: StyleProp<ViewStyle>;
        title?: StyleProp<TextStyle>;
        subtitle?: StyleProp<TextStyle>;
        info?: StyleProp<TextStyle>;
        search?: StyleProp<TextStyle>;
        actionPanel?: StyleProp<ViewStyle>;
        actionItem?: StyleProp<ViewStyle>;
    };
    /** The text to display on the second line */
    subtitle?: ReactNode;
    /**
     * Theme value overrides specific to this component.
     */
    theme?: $DeepPartial<ExtendedTheme>;
    /** The test to display on the first line */
    title: ReactNode;
    /**
     * Callback function to make updates to the linked scrollView (dynamic variant only)
     */
    updateScrollView?: (data: {
        padding: number | null;
        animate: boolean;
        scrollTo: number | null;
    }) => void;
    /**
     * Current resize mode of the Header:
     * - 'static': Header does not resize based on scroll position,
     * - 'dynamic' Header resizes based on the provided scrollPosition.
     *
     * @default: static
     */
    variant?: 'dynamic' | 'static';
};
export declare const Header: React.FC<HeaderProps>;
