import React from 'react';
import { StyleProp, ViewStyle, ViewProps } from 'react-native';
export type SpacerProps = ViewProps & {
    /** Flex grow/shrink value for use in flex layouts */
    flex?: number;
    /** Height (in dp) for static layouts */
    height?: number;
    /** Width (in dp) for static layouts */
    width?: number;
    /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
    styles?: {
        root?: StyleProp<ViewStyle>;
    };
};
/**
 * [Spacer](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--spacer) component
 *
 * This is a helpful utility component for adding spacer elements
 * when working within flexbox containers. You can give it a flexible
 * or a fixed size.
 */
export declare const Spacer: React.FC<SpacerProps>;
