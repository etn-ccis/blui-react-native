import React, { ReactNode } from 'react';
import { ImageSourcePropType, StyleProp, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { Card } from 'react-native-paper';
import { HeaderIcon } from '../__types__/index.js';
import { $DeepPartial } from '@callstack/react-theme-provider';
import { ExtendedTheme } from '@brightlayer-ui/react-native-themes';
export type ScoreCardProps = Omit<React.ComponentProps<typeof Card>, 'children' | 'theme'> & {
    /**
     * Array of icons to render to the right of the header text.
     * A maximum of six will be rendered.
     */
    actionItems?: HeaderIcon[];
    /** Component to render for the card footer */
    actionRow?: React.JSX.Element;
    /**  The color of the action icon
     *
     * @default: theme.colors.onSurfaceVariant
     */
    actionIconColor?: string;
    /** Component to render in the call-out area on the right side of the card body.
     * This is usually a single `Hero` or `HeroBanner`containing multiple Heroes.
     */
    badge?: React.JSX.Element;
    /** Vertical offset for the badge component to move it up and down */
    badgeOffset?: number;
    /** Background image to blend with the header color */
    headerBackgroundImage?: ImageSourcePropType;
    /** Background color of the header
     *
     *  @default: theme.colors.primaryContainer
     */
    headerColor?: string;
    /** The color for text in the header
     * @default: theme.colors.onPrimaryContainer
     */
    headerFontColor?: string;
    /** Third line of text to show in header */
    headerInfo?: string;
    /** Second line of text to show in header */
    headerSubtitle?: string;
    /** First line of text to show in the header */
    headerTitle: string;
    /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
    styles?: {
        root?: StyleProp<ViewStyle>;
        header?: StyleProp<ViewStyle>;
        backgroundImage?: StyleProp<ImageStyle>;
        headerContent?: StyleProp<ViewStyle>;
        headerText?: StyleProp<ViewStyle>;
        title?: StyleProp<TextStyle>;
        subtitle?: StyleProp<TextStyle>;
        info?: StyleProp<TextStyle>;
        headerActions?: StyleProp<ViewStyle>;
        headerActionItem?: StyleProp<ViewStyle>;
        body?: StyleProp<ViewStyle>;
        leftContent?: StyleProp<ViewStyle>;
        actionRow?: StyleProp<ViewStyle>;
        badge?: StyleProp<ViewStyle>;
    };
    /**
     * Theme value overrides specific to this component.
     */
    theme?: $DeepPartial<ExtendedTheme>;
};
/**
 * [ScoreCard](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--score-card) component
 *
 * This component renders a "score card" which is typically used in dashboard
 * displays to show the status of individual items along with some details.
 * The header is configurable with various text elements and icon actions and the
 * main body is fully customizable. You can use the `badge` prop to supply elements
 * that can span between the header and the body, such as a [Hero](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--hero) with a grade icon.
 */
export declare const ScoreCard: React.FC<ScoreCardProps & {
    children?: ReactNode;
}>;
