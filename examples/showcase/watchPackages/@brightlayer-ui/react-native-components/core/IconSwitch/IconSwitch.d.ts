import React from 'react';
import { ViewProps, StyleProp, ViewStyle } from 'react-native';
import { $DeepPartial } from '@callstack/react-theme-provider';
import { ExtendedTheme } from '@brightlayer-ui/react-native-themes';
export type IconSwitchProps = ViewProps & {
    /**
     * Flag to show the icon on the handle or not
     * @default: false
     */
    showIcon?: boolean;
    /**
     * Flag to disabled the IconSwitch
     * @default: false
     */
    disabled?: boolean;
    /**
     * Flag to pass the IconSwitch value
     * @default: false
     */
    value: boolean;
    /**
     * Callback Event handling function to handle value change
     */
    onValueChange: (arg: boolean) => void;
    /**
     * Theme value overrides specific to this component.
     */
    theme?: $DeepPartial<ExtendedTheme>;
    /**
     * Style overrides for internal elements. The styles you provide will be combined with the default styles.
     */
    styles?: {
        root?: StyleProp<ViewStyle>;
        handle?: StyleProp<ViewStyle>;
    };
};
/**
 * This is a Switch component which allow us to show the check icon on ToggleOn and Close icon on ToggleOff Switch's handle.
 */
export declare const IconSwitch: React.FC<IconSwitchProps>;
