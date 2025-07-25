import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressBar, Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
const makeStyles = (props, theme) => StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 16,
    },
    stepperContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 24,
    },
    circle: {
        height: 8,
        width: 8,
        borderRadius: 8,
        marginHorizontal: 4,
        overflow: 'hidden',
        backgroundColor: props.inactiveColor || theme.colors.disabled,
    },
    filled: {
        backgroundColor: props.activeColor || theme.colors.primary,
    },
    progressBar: {
        backgroundColor: props.inactiveColor || theme.colors.disabled,
    },
    text: {},
});
/**
 * keepInRange function
 *
 * This function takes a value and clamps it between the min and max supplied values.
 *
 * @param value the initial value
 * @param min the minimum allowed value
 * @param max the maximum allowed value
 * @returns the initial value restricted to the supplied range
 */
const keepInRange = (value, min, max) => {
    let ret = value;
    if (min !== undefined) {
        ret = Math.max(min, ret);
    }
    if (max !== undefined) {
        ret = Math.min(max, ret);
    }
    return ret;
};
/**
 * [MobileStepper](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--mobile-stepper) component
 *
 * This component is used to show progress through a set of pages. It displays
 * the total number of pages or steps and which one is currently being displayed.
 *
 * This is based on the [MobileStepper](https://material-ui.com/components/steppers/#mobile-stepper) component from Material UI.
 */
export const MobileStepper = (props) => {
    const theme = useExtendedTheme(props.theme);
    const { activeColor = theme.colors.primary, activeStep, leftButton, rightButton, steps, style, styles = {}, variant = 'dots', ...viewProps } = props;
    const defaultStyles = makeStyles(props, theme);
    const adjustedSteps = keepInRange(steps, 1);
    const adjustedActiveStep = keepInRange(activeStep, 0, adjustedSteps - 1);
    const pageIndices = [...Array(adjustedSteps).keys()];
    return (React.createElement(View, { ...viewProps, style: [defaultStyles.root, styles.root, style] },
        leftButton,
        React.createElement(View, { style: [
                defaultStyles.stepperContainer,
                styles.stepperContainer,
                variant === 'progress' ? { flex: 1 } : { flex: 0, flexBasis: 'auto' },
            ] },
            variant === 'dots' &&
                pageIndices.map((i) => {
                    const active = i === adjustedActiveStep;
                    return (React.createElement(View, { key: i, testID: 'blui-dot', style: [
                            defaultStyles.circle,
                            styles.circle,
                            active ? defaultStyles.filled : {},
                            active ? styles.filled : {},
                        ] }));
                }),
            variant === 'text' && (React.createElement(Text, { style: [defaultStyles.text, styles.text] },
                adjustedActiveStep + 1,
                " / ",
                adjustedSteps)),
            variant === 'progress' && (React.createElement(View, { style: { flex: 1 } },
                React.createElement(ProgressBar, { style: [defaultStyles.progressBar, styles.progressBar], progress: adjustedActiveStep / (adjustedSteps - 1), color: activeColor })))),
        rightButton));
};
