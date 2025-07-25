import React from 'react';
import { StyleProp, ViewStyle, ViewProps } from 'react-native';
import { $DeepPartial } from '@callstack/react-theme-provider';
import { ExtendedTheme } from '@brightlayer-ui/react-native-themes';
export type DotStepperVariant = 'dots' | 'text' | 'progress';
export type MobileStepperProps = ViewProps & {
    /**
     * Color of the active page indicator (dots & progress only)
     *
     * @default: theme.colors.primary
     */
    activeColor?: string;
    /** The index of the active step */
    activeStep: number;
    /** Color of the inactive step indicators
     *
     *  @default: theme.colors.disabled
     */
    inactiveColor?: string;
    /** Content to render to the left of the step indicators
     *
     * Usually a Back or Previous button
     */
    leftButton?: React.JSX.Element;
    /** Content to render to the right of the step indicators
     *
     * Usually a Next or Finish button
     */
    rightButton?: React.JSX.Element;
    /** Total number of steps to display */
    steps: number;
    /** Which type of step indicator to use:
     * - dots: circles
     * - progress: progress bar
     * - text: text
     *
     * @default: 'dots'
     */
    variant?: DotStepperVariant;
    /** Style overrides for internal elements. The styles you provide will be combined with the default styles. */
    styles?: {
        root?: StyleProp<ViewStyle>;
        circle?: StyleProp<ViewStyle>;
        filled?: StyleProp<ViewStyle>;
        stepperContainer?: StyleProp<ViewStyle>;
        progressBar?: StyleProp<ViewStyle>;
        text?: StyleProp<ViewStyle>;
    };
    /**
     * Theme value overrides specific to this component.
     */
    theme?: $DeepPartial<ExtendedTheme>;
};
/**
 * [MobileStepper](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--mobile-stepper) component
 *
 * This component is used to show progress through a set of pages. It displays
 * the total number of pages or steps and which one is currently being displayed.
 *
 * This is based on the [MobileStepper](https://material-ui.com/components/steppers/#mobile-stepper) component from Material UI.
 */
export declare const MobileStepper: React.FC<MobileStepperProps>;
