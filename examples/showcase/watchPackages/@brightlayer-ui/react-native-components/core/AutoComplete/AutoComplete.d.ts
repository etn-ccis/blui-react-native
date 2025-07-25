import React from 'react';
import { TextStyle, StyleProp, ViewStyle, ViewProps, TextInputProps } from 'react-native';
import { $DeepPartial } from '@callstack/react-theme-provider';
import { ExtendedTheme } from '@brightlayer-ui/react-native-themes';
import { ChipProps as ChipPropsType } from '../Chip/index.js';
export type AutocompleteProps = ViewProps & {
    /** Text to display the Helper Text */
    helperText?: string;
    /** Text to display as component label */
    label?: string;
    /** List of Options to show in dropdown */
    options?: string[];
    /** Props to spread to the TextInput component. */
    tagInputFieldProps?: TextInputProps;
    /** Props to spread to the Chip component. */
    ChipProps?: ChipPropsType;
    /** Number of Chip to be shown
     *
     *  @default: 6
     *
     */
    limitTags?: number;
    /** Number of character count for a Chip
     *
     *  @default: 16
     *
     */
    tagCharacterLimit?: number;
    /** Callback for when the text in the Textinput changes */
    onChange?: (details?: string[]) => void;
    /** Callback for when the chip close icon is clicked */
    onDelete?: (option: string) => void;
    /** Prop to disable the AutoComplete Component
     *
     *  @default: false
     *
     */
    disabled?: boolean;
    /** List of  pre-populated chips to display inside TextField */
    value?: string[];
    /** Prop to let user pass a custom text to chip (inCase of false can only pass text from options)
     *
     *  @default: false
     *
     */
    allowCustomTag?: boolean;
    styles?: {
        root?: StyleProp<ViewStyle>;
        textInputContainer?: StyleProp<ViewStyle>;
        chip?: StyleProp<ViewStyle>;
        textInput?: StyleProp<ViewStyle>;
        dropdownContainer?: StyleProp<ViewStyle>;
        dropdownItem?: StyleProp<ViewStyle>;
        helperContainer?: StyleProp<ViewStyle>;
        helperText?: StyleProp<TextStyle>;
        helperCounter?: StyleProp<TextStyle>;
    };
    /**
     * Theme value overrides specific to this component.
     */
    theme?: $DeepPartial<ExtendedTheme>;
};
export declare const AutoComplete: React.FC<AutocompleteProps>;
