import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { HeaderActionComponent, HeaderIcon as HeaderIconType } from '../__types__/index.js';
type ActionItemProps = {
    /** Array of up to three action items on the right of the header */
    actionItems?: Array<HeaderIconType | HeaderActionComponent>;
    /**
     * The color used for the action Items
     *
     * @default: theme.colors.onSurfaceVariant
     */
    actionItemColor?: string;
    /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
    styles?: {
        root?: StyleProp<ViewStyle>;
        actionItem?: StyleProp<ViewStyle>;
        component?: StyleProp<ViewStyle>;
    };
};
/**
 * HeaderActionItems component
 *
 * The HeaderActionItems is a helper component for organizing the contents in the Header. It is
 * used for displaying all of the action item icons and components.
 */
export declare const HeaderActionItems: React.FC<ActionItemProps>;
export {};
