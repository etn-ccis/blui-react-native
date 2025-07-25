import React from 'react';
import { ViewStyle, TextStyle, StyleProp, ViewProps } from 'react-native';
import { ChannelValueProps as ChannelValuePropsType } from '../ChannelValue/index.js';
import { $DeepPartial } from '@callstack/react-theme-provider';
import { IconSource } from '../__types__/index.js';
import { ExtendedTheme } from '@brightlayer-ui/react-native-themes';
export type HeroProps = ViewProps & {
    /** The text shown below the `ChannelValue` */
    label: string;
    /** The primary icon */
    icon?: IconSource;
    /** The size of the primary icon (min 10px)
     *
     * @default: 36
     */
    iconSize?: number;
    /** Color override for the row icon
     *
     * @default: theme.colors.onSurfaceVariant
     */
    iconColor?: string;
    /** The color used behind the primary icon
     *
     * @default: 'transparent
     */
    iconBackgroundColor?: string;
    /** Props to be passed through to ChannelValue child component */
    ChannelValueProps?: ChannelValuePropsType;
    /** Callback to execute when the drawer header is pressed */
    onPress?: () => void;
    /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
    styles?: {
        root?: StyleProp<ViewStyle>;
        iconWrapper?: StyleProp<ViewStyle>;
        values?: StyleProp<ViewStyle>;
        label?: StyleProp<TextStyle>;
    };
    /** Theme value overrides specific to this component. */
    theme?: $DeepPartial<ExtendedTheme>;
};
/**
 * [Hero](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--hero) component
 *
 * The `<Hero>` component displays a particular icon, value/units, and a label. The icon property will accept any valid component - this will typically be a Material icon, [Brightlayer UI icon](https://github.com/etn-ccis/blui-icons), or [Progress Icon](https://github.com/etn-ccis/blui-progress-icons). It will also accept Text/Emoji values.
 */
export declare const Hero: React.FC<HeroProps>;
