import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle, TextStyle, ViewProps } from 'react-native';
import { $DeepPartial } from '@callstack/react-theme-provider';
import { IconSource } from '../__types__/index.js';
import { ExtendedTheme } from '@brightlayer-ui/react-native-themes';
export type EmptyStateProps = ViewProps & {
    /** The main text to display */
    title: ReactNode;
    /** The secondary text to display */
    description?: ReactNode;
    /** The primary icon */
    icon?: IconSource;
    /** The size of the primary icon */
    iconSize?: number;
    /** Color override for the row icon
     * @default: theme.colors.disabled
     */
    iconColor?: string;
    /** Additional components to render below */
    actions?: React.JSX.Element;
    /** Style overrides for the elements */
    styles?: {
        root?: StyleProp<ViewStyle>;
        title?: StyleProp<TextStyle>;
        description?: StyleProp<TextStyle>;
        actions?: StyleProp<ViewStyle>;
    };
    /** Theme value overrides specific to this component. */
    theme?: $DeepPartial<ExtendedTheme>;
};
/**
 * [EmptyState](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--empty-state) component
 *
 * The `<EmptyState>` component is an element that can be used as a placeholder when no data is present (such as an empty list, or a placeholder page for future content). This is only used when no data is available, rather than during loading (see [empty states pattern](https://brightlayer-ui.github.io/patterns/empty-states)).
 */
export declare const EmptyState: React.FC<EmptyStateProps>;
